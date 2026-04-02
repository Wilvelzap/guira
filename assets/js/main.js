document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-panel', 'py-3', 'shadow-md');
                navbar.classList.remove('bg-transparent', 'py-5');
            } else {
                navbar.classList.remove('glass-panel', 'py-3', 'shadow-md');
                navbar.classList.add('bg-transparent', 'py-5');
            }
        });
    }

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Cierra el menÃº al hacer clic en un enlace (opcional pero recomendado)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 4. Reveal on Scroll Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-in');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Premium tilt interaction for hero/cards
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(card => {
        card.dataset.tiltReady = 'true';

        card.addEventListener('mousemove', event => {
            const rect = card.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            const rotateY = ((offsetX / rect.width) - 0.5) * 10;
            const rotateX = (0.5 - (offsetY / rect.height)) * 8;

            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // 6. Subtle parallax for decorative layers
    const parallaxItems = document.querySelectorAll('[data-parallax]');
    if (parallaxItems.length) {
        window.addEventListener('mousemove', event => {
            const xRatio = (event.clientX / window.innerWidth) - 0.5;
            const yRatio = (event.clientY / window.innerHeight) - 0.5;

            parallaxItems.forEach(item => {
                const depth = Number(item.dataset.parallax || 16);
                item.style.transform = `translate3d(${xRatio * depth}px, ${yRatio * depth}px, 0)`;
            });
        });
    }

    // 7. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        
        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');
                
                document.querySelectorAll('.faq-content').forEach(c => {
                    if (c !== content) c.classList.add('hidden');
                });
                document.querySelectorAll('.faq-icon').forEach(i => {
                    if (i !== icon) i.style.transform = 'rotate(0deg)';
                });

                if (!isOpen) {
                    content.classList.remove('hidden');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    content.classList.add('hidden');
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            });
        }
    });

    // 8. WhatsApp Floating Widget
    const waWidget = document.createElement('a');
    waWidget.href = 'https://wa.me/59175245845';
    waWidget.target = '_blank';
    waWidget.rel = 'noopener noreferrer';
    waWidget.className = 'fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:scale-110 hover:bg-emerald-400 transition-all z-50';
    waWidget.innerHTML = '<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></svg>';
    waWidget.setAttribute('aria-label', 'Chat en WhatsApp');
    document.body.appendChild(waWidget);
});
