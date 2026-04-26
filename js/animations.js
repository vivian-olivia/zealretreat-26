// Finds all <img src="*.heic/.heif"> and converts them to displayable JPEG blobs
async function convertHeicImages() {
    const imgs = Array.from(document.querySelectorAll('img[src$=".heic"], img[src$=".heif"], img[src$=".HEIC"], img[src$=".HEIF"]'));
    for (const img of imgs) {
        try {
            const res = await fetch(img.src);
            const blob = await res.blob();
            const converted = await heic2any({ blob, toType: 'image/jpeg', quality: 0.9 });
            img.src = URL.createObjectURL(converted);
        } catch (e) {
            console.warn('HEIC conversion failed for', img.src, e);
        }
    }
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.gsap-hide').forEach(el => el.classList.remove('gsap-hide'));

    // Hero entrance
    gsap.fromTo('.gsap-hero-element',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Scroll-triggered: fade up
    gsap.utils.toArray('.gsap-fade-up').forEach(el => {
        gsap.fromTo(el,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
            }
        );
    });

    // Scroll-triggered: slide from left
    gsap.utils.toArray('.gsap-slide-right').forEach(el => {
        gsap.fromTo(el,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
            }
        );
    });

    // Scroll-triggered: slide from right
    gsap.utils.toArray('.gsap-slide-left').forEach(el => {
        gsap.fromTo(el,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
            }
        );
    });

    // Scroll-triggered: staggered children
    gsap.utils.toArray('.gsap-stagger-container').forEach(container => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        gsap.fromTo(items,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: container, start: 'top 90%', toggleActions: 'play none none reverse' }
            }
        );
    });

    // === PARALLAX ===

    // Hero background — image drifts upward at 0.4x scroll speed
    const hero = document.getElementById('home');
    if (hero) {
        gsap.fromTo(hero,
            { backgroundPositionY: '0%' },
            {
                backgroundPositionY: '40%',
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    }

    // Floating decorators — drift upward gently as user scrolls past
    gsap.utils.toArray('.parallax-float').forEach(el => {
        gsap.to(el, {
            y: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Slow-moving elements — images/panels drift at 0.3x speed
    gsap.utils.toArray('.parallax-slow').forEach(el => {
        gsap.to(el, {
            y: -40,
            ease: 'none',
            scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Reverse parallax — elements drift downward (opposite direction)
    gsap.utils.toArray('.parallax-down').forEach(el => {
        gsap.to(el, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Auto-animate section content blocks not already tagged with a GSAP class
    const tagged = new Set(['gsap-fade-up','gsap-slide-right','gsap-slide-left',
                            'gsap-stagger-container','gsap-stagger-item','gsap-hero-element','gsap-hide']);
    gsap.utils.toArray('section').forEach(section => {
        const wrapper = section.querySelector('[class*="max-w-"]');
        if (!wrapper) return;
        Array.from(wrapper.children).forEach(child => {
            if ([...child.classList].some(c => tagged.has(c))) return;
            gsap.fromTo(child,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
                  scrollTrigger: { trigger: child, start: 'top 92%', toggleActions: 'play none none reverse' }
                }
            );
        });
    });

    ScrollTrigger.refresh();
}
