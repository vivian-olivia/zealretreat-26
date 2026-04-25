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

    gsap.fromTo('.gsap-hero-element',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    gsap.utils.toArray('.gsap-fade-up').forEach(el => {
        gsap.fromTo(el,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.gsap-slide-right').forEach(el => {
        gsap.fromTo(el,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.gsap-slide-left').forEach(el => {
        gsap.fromTo(el,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.gsap-stagger-container').forEach(container => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        gsap.fromTo(items,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: container, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });

    ScrollTrigger.refresh();
}
