import { createIcons, projectIcons } from './icons.js';

// Expose on window for backward compatibility with inline scripts
window.lucide = {
    createIcons: (options = {}) => createIcons({ icons: projectIcons, ...options })
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    createIcons({ icons: projectIcons });

    // 2. Reveal on Scroll Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-in, .reveal-up, .pair-reveal-left, .pair-reveal-right');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.hasAttribute('data-replay-reveal')) {
                // Se reactiva cada vez que entra o sale del viewport,
                // en cualquier dirección de scroll.
                entry.target.classList.toggle('active', entry.isIntersecting);
                return;
            }

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

    // 4.1 Reinicia videos de fondo al entrar al viewport (siempre desde el inicio)
    const restartVideos = document.querySelectorAll('video[data-restart-on-view]');

    if (restartVideos.length) {
        const restartVideoCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.currentTime = 0;
                    video.play().catch(() => {});
                }
            });
        };

        const restartVideoObserver = new IntersectionObserver(restartVideoCallback, {
            threshold: 0.25,
        });

        restartVideos.forEach(video => {
            restartVideoObserver.observe(video);
        });
    }

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
});

