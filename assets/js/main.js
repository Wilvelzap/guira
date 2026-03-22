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
        
        // Cierra el menú al hacer clic en un enlace (opcional pero recomendado)
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
                
                // Close all others
                document.querySelectorAll('.faq-content').forEach(c => {
                    if (c !== content) {
                        c.classList.add('hidden');
                    }
                });
                document.querySelectorAll('.faq-icon').forEach(i => {
                    if (i !== icon) {
                        i.style.transform = 'rotate(0deg)';
                    }
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
});
