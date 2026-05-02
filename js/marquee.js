// ─── Horizontal marquee (About section rows) ───────────────────────────────
// speed > 0 = scrolls left; reverse = row scrolls right (mirror direction)
function createHorizontalMarquee(trackId, speed, reverse = false, startRatio = 0) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const viewport = track.parentElement;
    let halfW      = 0;   // calculated after first frame (images may not be sized yet)
    let x          = 0;
    let velocity   = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragPosX   = 0;

    function getHalf() {
        const w = track.scrollWidth / 2;
        return w > 10 ? w : 0;
    }

    function clamp(v, half) {
        return ((v % half) + half) % half;
    }

    function tick() {
        if (!halfW) halfW = getHalf();
        if (!halfW) { requestAnimationFrame(tick); return; }

        if (!isDragging) {
            velocity *= 0.92;
            if (Math.abs(velocity) < 0.02) velocity = 0;
            x = clamp(x + speed + velocity, halfW);
        }

        const offset = reverse ? halfW - x : x;
        track.style.transform = `translateX(-${offset}px)`;
        requestAnimationFrame(tick);
    }

    // ── Touch ──────────────────────────────────────────────────────────────
    viewport.addEventListener('touchstart', (e) => {
        if (!halfW) return;
        isDragging  = true;
        velocity    = 0;
        dragStartX  = e.touches[0].clientX;
        dragPosX    = x;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging || !halfW) return;
        const delta = dragStartX - e.touches[0].clientX;
        x = clamp(dragPosX + (reverse ? -delta : delta), halfW);
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const delta = dragStartX - e.changedTouches[0].clientX;
        // Fling momentum — proportional to swipe distance, capped
        velocity = Math.max(-12, Math.min(12, (reverse ? -delta : delta) * 0.06));
    }, { passive: true });

    // ── Mouse drag (desktop) ───────────────────────────────────────────────
    let mouseDown  = false;
    let mouseStart = 0;
    let mousePosX  = 0;

    viewport.addEventListener('mousedown', (e) => {
        if (!halfW) return;
        mouseDown  = true;
        isDragging = true;
        velocity   = 0;
        mouseStart = e.clientX;
        mousePosX  = x;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!mouseDown || !halfW) return;
        const delta = mouseStart - e.clientX;
        x = clamp(mousePosX + (reverse ? -delta : delta), halfW);
    });

    window.addEventListener('mouseup', (e) => {
        if (!mouseDown) return;
        mouseDown  = false;
        isDragging = false;
        viewport.style.cursor = '';
        const delta = mouseStart - e.clientX;
        velocity = Math.max(-12, Math.min(12, (reverse ? -delta : delta) * 0.06));
    });

    // ── Trackpad two-finger scroll ─────────────────────────────────────────
    viewport.addEventListener('wheel', (e) => {
        if (!halfW || Math.abs(e.deltaX) < 1) return;
        e.preventDefault();
        velocity = Math.max(-15, Math.min(15, velocity + (reverse ? -e.deltaX : e.deltaX) * 0.1));
    }, { passive: false });

    // Initialise with optional start offset
    x = startRatio * (getHalf() || 0);

    requestAnimationFrame(tick);
}

// ─── Vertical marquee (History section columns) ────────────────────────────
// reverse = column scrolls down instead of up
function createVerticalMarquee(trackId, speed, reverse = false) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const viewport = track.parentElement;
    let halfH      = 0;
    let y          = 0;
    let velocity   = 0;
    let isDragging = false;
    let dragStartY = 0;
    let dragPosY   = 0;

    function getHalf() {
        const h = track.scrollHeight / 2;
        return h > 10 ? h : 0;
    }

    function clamp(v, half) {
        return ((v % half) + half) % half;
    }

    function tick() {
        if (!halfH) halfH = getHalf();
        if (!halfH) { requestAnimationFrame(tick); return; }

        if (!isDragging) {
            velocity *= 0.92;
            if (Math.abs(velocity) < 0.02) velocity = 0;
            y = clamp(y + speed + velocity, halfH);
        }

        const offset = reverse ? halfH - y : y;
        track.style.transform = `translateY(-${offset}px)`;
        requestAnimationFrame(tick);
    }

    // ── Touch ──────────────────────────────────────────────────────────────
    viewport.addEventListener('touchstart', (e) => {
        if (!halfH) return;
        isDragging  = true;
        velocity    = 0;
        dragStartY  = e.touches[0].clientY;
        dragPosY    = y;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging || !halfH) return;
        const delta = dragStartY - e.touches[0].clientY;
        y = clamp(dragPosY + (reverse ? -delta : delta), halfH);
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const delta = dragStartY - e.changedTouches[0].clientY;
        velocity = Math.max(-10, Math.min(10, (reverse ? -delta : delta) * 0.06));
    }, { passive: true });

    // ── Trackpad two-finger scroll ─────────────────────────────────────────
    viewport.addEventListener('wheel', (e) => {
        if (!halfH || Math.abs(e.deltaY) < 1) return;
        e.preventDefault();
        velocity = Math.max(-15, Math.min(15, velocity + (reverse ? -e.deltaY : e.deltaY) * 0.1));
    }, { passive: false });

    requestAnimationFrame(tick);
}

// ─── Lightbox ──────────────────────────────────────────────────────────────
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

// ─── Main entry point ──────────────────────────────────────────────────────
function initMarquees() {
    // About section — 3 horizontal rows
    createHorizontalMarquee('zeal-row1-track', 0.45, false, 0);
    createHorizontalMarquee('zeal-row2-track', 0.45, true,  0);
    createHorizontalMarquee('zeal-row3-track', 0.45, false, 0.4);

    // History section — 2 vertical columns
    createVerticalMarquee('herald-col1-track', 0.4, false);
    createVerticalMarquee('herald-col2-track', 0.4, true);

    initLightbox();
}
