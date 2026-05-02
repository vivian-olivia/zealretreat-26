function renderTestimonies() {
    const people = [
        { initial: 'A', color: '#2C4A3B', name: 'Awi', image: 'assets/awi.jpeg',
          id: '"Kalau ditanya berkesan udah jelas dari awal sampai akhir acara sangat seru apalagi pas praise and worship kicau eh kacau seruu dehh"',
          en: '"Kalau ditanya berkesan udah jelas dari awal sampai akhir acara sangat seru apalagi pas praise and worship kicau eh kacau seruu dehh"' },
        { initial: 'J', color: '#D97757', name: 'Jocelyn', image: 'assets/jocelyn.jpeg',
          id: '""Herald of God" retreat merupakan retreat yang menjadi escape dari rutinitas harian kita untuk fokus tentang mengasihi satu sama lain di dalam mata Tuhan. It felt like home and it made me feel like Zeal Tangerang is my home too, still is. 💛"',
          en: '""Herald of God" retreat merupakan retreat yang menjadi escape dari rutinitas harian kita untuk fokus tentang mengasihi satu sama lain di dalam mata Tuhan. It felt like home and it made me feel like Zeal Tangerang is my home too, still is. 💛"' },
        { initial: 'E', color: '#F4A261', name: 'Elkana', image: 'assets/elkana.jpeg',
          id: '"Yang paling berkesan buat aku pas malam praise & worship, apalagi waktu saling doain di kelompok kecil rasanya kayak ada momen yang aku kangenin banget, kaya deja vu gitu. Terus games nya juga seru banget, jadi berasa balik ke masa kecil hahahah."',
          en: '"Yang paling berkesan buat aku pas malam praise & worship, apalagi waktu saling doain di kelompok kecil rasanya kayak ada momen yang aku kangenin banget, kaya deja vu gitu. Terus games nya juga seru banget, jadi berasa balik ke masa kecil hahahah."' },
        { initial: 'C', color: '#2C4A3B', name: 'Cheryl', image: 'assets/cheryl.jpeg',
          id: '"Berkesan. Mulai dr rasa aman yg aku dpt dr mentor kelompok, temen-temen baru, sharing materi dr pembicara & knowing aku ga stop setelah acara berakhir tp akan ada pertumbuhan jadi murid Yesus di campus ministry"',
          en: '"Berkesan. Mulai dr rasa aman yg aku dpt dr mentor kelompok, temen-temen baru, sharing materi dr pembicara & knowing aku ga stop setelah acara berakhir tp akan ada pertumbuhan jadi murid Yesus di campus ministry"' },
        { initial: 'A', color: '#D97757', name: 'Abe', image: 'assets/abe.jpeg',
          id: '"Yang berkesan/membantu aku sih mungkin lebih ke aku dapet kesempatan yaa untuk mimpin grup dimana juga bentukk aku keluar dari zona nyaman untuk belajar jadi leader dalam grupp alsoo juga banyak di refresh lagii secara spiritual aku dan jadi semangat lagii"',
          en: '"Yang berkesan/membantu aku sih mungkin lebih ke aku dapet kesempatan yaa untuk mimpin grup dimana juga bentukk aku keluar dari zona nyaman untuk belajar jadi leader dalam grupp alsoo juga banyak di refresh lagii secara spiritual aku dan jadi semangat lagii"' },
        { initial: 'K', color: '#1A2E24', name: 'Keiza', image: 'assets/keiza.jpeg',
          id: '"Jujur, bersyukur banget pernah ikut retreat campus karena aku merasa sangat di love & di welcome sama mereka :) karena waktu itu dtg dengan kondisi yang gak sepenuhnya ok, tapi brosis disana kasih aku space untuk be real & sabar dengerin ceritaku, bahkan diajak Bible Study juga."',
          en: '"Jujur, bersyukur banget pernah ikut retreat campus karena aku merasa sangat di love & di welcome sama mereka :) karena waktu itu dtg dengan kondisi yang gak sepenuhnya ok, tapi brosis disana kasih aku space untuk be real & sabar dengerin ceritaku, bahkan diajak Bible Study juga."' },
    ];

    const cards = people.map(p => `
        <div class="testimonial-card flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-sm border border-[#E5E0D8] relative overflow-hidden">
            <div class="h-1.5 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
            <div class="p-8">
                <div class="text-[#D97757] text-5xl absolute top-8 left-6 opacity-15 font-serif leading-none">&ldquo;</div>
                <p class="text-[#4A4A4A] italic relative z-10 mb-6 mt-4 text-sm leading-relaxed">
                    <span class="lang-id">${p.id}</span>
                    <span class="lang-en">${p.en}</span>
                </p>
                <div class="flex items-center">
                    ${p.image
                        ? `<img src="${p.image}" alt="${p.name}" class="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0 ring-2 ring-[#E5E0D8]">`
                        : `<div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm" style="background:linear-gradient(135deg,${p.color},${p.color}cc)">${p.initial}</div>`
                    }
                    <div>
                        <p class="font-bold text-[#2C4A3B] text-sm">${p.name}</p>
                        <p class="text-xs text-[#D97757] font-semibold uppercase tracking-wider mt-0.5"><span class="lang-id">Peserta 2024</span><span class="lang-en">Participant 2024</span></p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
    <!-- Testimonies Section -->
    <section class="py-24 bg-[#FAF8F5]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up gsap-hide">
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
                    <span class="lang-id">Apa Kata Mereka</span><span class="lang-en">What They Said</span>
                </h2>
                <p class="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
                    <span class="lang-id">Dengarkan cerita nyata dari peserta retreat sebelumnya.</span>
                    <span class="lang-en">Hear real stories from past retreat participants.</span>
                </p>
            </div>

            <div class="relative gsap-fade-up gsap-hide">
                <!-- Left button -->
                <button id="testimonial-prev" aria-label="Previous"
                    class="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg border border-[#E5E0D8] text-[#2C4A3B] hover:bg-[#2C4A3B] hover:text-white hover:border-[#2C4A3B] transition-all flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>

                <div style="overflow:hidden;padding:16px 0;margin:-16px 0;">
                    <div id="testimonial-viewport" class="mx-2 py-6" style="overflow:visible;cursor:grab;touch-action:pan-y;user-select:none;">
                        <div id="testimonial-track" class="flex gap-6 pb-4">
                            ${cards}
                        </div>
                    </div>
                </div>

                <!-- Right button -->
                <button id="testimonial-next" aria-label="Next"
                    class="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg border border-[#E5E0D8] text-[#D97757] hover:bg-[#D97757] hover:text-white hover:border-[#D97757] transition-all flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>
    </section>
    `;
}

function initTestimonialScroll() {
    const track    = document.getElementById('testimonial-track');
    const viewport = document.getElementById('testimonial-viewport');
    const prevBtn  = document.getElementById('testimonial-prev');
    const nextBtn  = document.getElementById('testimonial-next');
    if (!track || !viewport) return;

    Array.from(track.children).forEach(c => track.appendChild(c.cloneNode(true)));

    const SPEED     = 0.5;
    const CARD_STEP = 364;
    const DECAY     = 0.88;
    let halfWidth    = 0;
    let x            = 0;
    let targetOffset = 0;
    let isDragging   = false;
    let dragStartX   = 0;
    let dragPosX     = 0;

    function getHalf() {
        const w = track.scrollWidth / 2;
        return w > 10 ? w : 0;
    }

    function wrap(v) {
        return ((v % halfWidth) + halfWidth) % halfWidth;
    }

    function tick() {
        if (!halfWidth) halfWidth = getHalf();
        if (!halfWidth) { requestAnimationFrame(tick); return; }

        if (!isDragging) {
            x += SPEED + targetOffset * (1 - DECAY);
            targetOffset *= DECAY;
            if (Math.abs(targetOffset) < 0.05) targetOffset = 0;
        }
        x = wrap(x);
        track.style.transform = `translateX(-${x}px)`;
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    function jump(dir) { targetOffset += dir * CARD_STEP; }

    prevBtn?.addEventListener('click', () => jump(-1));
    nextBtn?.addEventListener('click', () => jump(1));

    // ── Touch drag ──────────────────────────────────────────────────────────
    viewport.addEventListener('touchstart', (e) => {
        isDragging   = true;
        targetOffset = 0;
        dragStartX   = e.touches[0].clientX;
        dragPosX     = x;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging || !halfWidth) return;
        const delta = dragStartX - e.touches[0].clientX;
        x = wrap(dragPosX + delta);
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const delta = dragStartX - e.changedTouches[0].clientX;
        targetOffset = Math.max(-CARD_STEP * 2, Math.min(CARD_STEP * 2, delta * 1.5));
    }, { passive: true });

    // ── Mouse drag (desktop) ────────────────────────────────────────────────
    let mouseDown  = false;
    let mouseStart = 0;
    let mousePosX  = 0;

    viewport.addEventListener('mousedown', (e) => {
        mouseDown    = true;
        isDragging   = true;
        targetOffset = 0;
        mouseStart   = e.clientX;
        mousePosX    = x;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!mouseDown || !halfWidth) return;
        const delta = mouseStart - e.clientX;
        x = wrap(mousePosX + delta);
    });

    window.addEventListener('mouseup', (e) => {
        if (!mouseDown) return;
        mouseDown  = false;
        isDragging = false;
        viewport.style.cursor = '';
        const delta = mouseStart - e.clientX;
        targetOffset = Math.max(-CARD_STEP * 2, Math.min(CARD_STEP * 2, delta * 1.5));
    });

    // ── Trackpad two-finger scroll ─────────────────────────────────────────
    viewport.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) < 1) return;
        e.preventDefault();
        targetOffset = Math.max(-CARD_STEP * 2, Math.min(CARD_STEP * 2, targetOffset + e.deltaX));
    }, { passive: false });
}
