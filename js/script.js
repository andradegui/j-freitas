window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
    });

     // ANIMAÇÕES HERO
    gsap.from(".hero", {
        opacity: 0,
        duration: 0.5
    });

    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;
    const secaoContato = document.getElementById('contato');

    const scrollToSection = (target) => {
        if (!target || !smoother) return;
        smoother.scrollTo(target, {
            offset: -headerHeight,
            duration: 1.2,
            ease: 'power4.out'
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;

            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                event.preventDefault();
                scrollToSection(target);
            }
        });
    });

    const emailButton = document.querySelector('.hero .email');
    if (emailButton && secaoContato) {
        emailButton.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(secaoContato);
        });
    }

    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            scrollToSection(initialTarget);
        }
    }
});