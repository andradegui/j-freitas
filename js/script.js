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

    // ANIMAÇÕES CIDADE    
    gsap.from(".card", {
        opacity: 0,
        // duration: 1,
        y: 5,
        filter: "blur(5px)",
        // Uma animação é animada atrás da outra (intercalada)
        stagger: .3,
        scrollTrigger: {
            trigger: ".cards",
            // markers: true,
            start: "0% 80%",
            end: "100% 70%",
            scrub: true
        }
    });

    // ANIMAÇÕES SCROLL CONTATO
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

    // ANIMAÇÕES FOOTER
    gsap.from("footer", {
        y: "-30%",
        // Renderiza a página sem jogar o posicionamento acima
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            // Para ficar sincronizado com a rolagem da página
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }
    });


});