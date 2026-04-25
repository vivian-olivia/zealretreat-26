function initLightbox() {
    const box      = document.getElementById('img-lightbox');
    const img      = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    const close = () => {
        box.classList.add('hidden');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', close);
    box.addEventListener('click', e => { if (e.target === box) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    window.openLightbox = src => {
        img.src = src;
        box.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };
}

function initMarquees() {
    // About section — Row 1: scrolls left
    const r1 = document.getElementById('zeal-row1-track');
    if (r1) {
        const halfW = r1.scrollWidth / 2;
        let x = 0;
        (function tick() {
            x = (x + 0.45) % halfW;
            r1.style.transform = `translateX(-${x}px)`;
            requestAnimationFrame(tick);
        })();
    }

    // About section — Row 2: scrolls right (mirror direction)
    const r2 = document.getElementById('zeal-row2-track');
    if (r2) {
        const halfW = r2.scrollWidth / 2;
        let x = 0;
        (function tick() {
            x = (x + 0.45) % halfW;
            r2.style.transform = `translateX(-${halfW - x}px)`;
            requestAnimationFrame(tick);
        })();
    }

    // About section — Row 3: scrolls left (offset start for visual variety)
    const r3 = document.getElementById('zeal-row3-track');
    if (r3) {
        const halfW = r3.scrollWidth / 2;
        let x = halfW * 0.4;
        (function tick() {
            x = (x + 0.45) % halfW;
            r3.style.transform = `translateX(-${x}px)`;
            requestAnimationFrame(tick);
        })();
    }

    // History section — Column 1: scrolls up
    const c1 = document.getElementById('herald-col1-track');
    if (c1) {
        const halfH = c1.scrollHeight / 2;
        let y = 0;
        (function tick() {
            y = (y + 0.4) % halfH;
            c1.style.transform = `translateY(-${y}px)`;
            requestAnimationFrame(tick);
        })();
    }

    // History section — Column 2: scrolls DOWN (opposite direction)
    const c2 = document.getElementById('herald-col2-track');
    if (c2) {
        const halfH = c2.scrollHeight / 2;
        let y = 0;
        (function tick() {
            y = (y + 0.4) % halfH;
            c2.style.transform = `translateY(-${halfH - y}px)`;
            requestAnimationFrame(tick);
        })();
    }

    initLightbox();
}
