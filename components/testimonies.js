function renderTestimonies() {
    const people = [
        { initial: 'A', color: '#2C4A3B', name: 'Awi', image: 'assets/awi.jpeg',
          id: '"Kalau ditanya berkesan udah jelas dari awal sampai akhir acara sangat seru apalagi pas praise and worship kicau eh kacau seruu dehh"',
          en: '"Last year\'s retreat truly opened my eyes to what a healthy community looks like. The worship sessions were incredible!"' },
        { initial: 'J', color: '#D97757', name: 'Jocelyn',
          id: '"Aku datang sendirian dan pulang dengan keluarga baru. Kegiatan team-building-nya seru banget dan bikin nyaman."',
          en: '"I came knowing no one, and left with a family. The team-building activities were super fun and engaging."' },
        { initial: 'E', color: '#F4A261', name: 'Elkana', image: 'assets/elkana.jpeg',
          id: '"Yang paling berkesan buat aku pas malam praise & worship, apalagi waktu saling doain di kelompok kecil rasanya kayak ada momen yang aku kangenin banget, kaya deja vu gitu. Terus games nya juga seru banget, jadi berasa balik ke masa kecil hahahah."',
          en: '"The campfire moment on the last night changed my perspective on life. I can\'t wait for HOME this year!"' },
        { initial: 'C', color: '#2C4A3B', name: 'Cheryl',
          id: '"Ice breaker dan small group-nya langsung bikin aku nyaman sama semua orang dari hari pertama. Panitia kerja keras banget!"',
          en: '"The ice breakers and small groups made me instantly comfortable with everyone from day one. The committee worked so hard!"' },
        { initial: 'A', color: '#D97757', name: 'Abe', image: 'assets/abe.jpeg',
          id: '"Yang berkesan/membantu aku sih mungkin lebih ke aku dapet kesempatan yaa untuk mimpin grup dimana juga bentukk aku keluar dari zona nyaman untuk belajar jadi leader dalam grupp alsoo juga banyak di refresh lagii secara spiritual aku dan jadi semangat lagii"',
          en: '"This was my first retreat and the impact was huge. I found a new direction, new friends, and grew closer to God."' },
        { initial: 'K', color: '#1A2E24', name: 'Keiza',
          id: '"Sesi sharing bikin aku berani cerita hal-hal yang belum pernah aku buka sebelumnya. Komunitas ini beda dari yang lain."',
          en: '"The sharing sessions gave me courage to open up about things I\'ve never shared before. This community is unlike any other."' },
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
                <span class="section-pill text-[#D97757] mb-5 inline-flex">&#10022; <span class="lang-id">Cerita Nyata</span><span class="lang-en">Real Stories</span></span>
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mt-4 gradient-text">
                    <span class="lang-id">Apa Kata Mereka</span><span class="lang-en">What They Said</span>
                </h2>
                <p class="text-lg text-[#666666] max-w-2xl mx-auto mt-4 leading-relaxed">
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

                <div id="testimonial-viewport" class="overflow-hidden mx-2 py-4">
                    <div id="testimonial-track" class="flex gap-6 pb-2">
                        ${cards}
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

    const halfWidth = track.scrollWidth / 2;

    const SPEED     = 0.5;
    const CARD_STEP = 364;
    const DECAY     = 0.88;
    let x            = 0;
    let targetOffset = 0;

    function tick() {
        x += SPEED + targetOffset * (1 - DECAY);
        targetOffset *= DECAY;
        if (Math.abs(targetOffset) < 0.05) targetOffset = 0;
        if (x >= halfWidth) x -= halfWidth;
        if (x < 0) x += halfWidth;
        track.style.transform = `translateX(-${x}px)`;
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    function jump(dir) { targetOffset += dir * CARD_STEP; }

    prevBtn?.addEventListener('click', () => jump(-1));
    nextBtn?.addEventListener('click', () => jump(1));
}
