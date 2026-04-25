function renderHistory() {
    return `
    <!-- Previous Events Section -->
    <section id="history" class="py-24 bg-[#FAF8F5] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up gsap-hide">
                <span class="section-pill text-[#2C4A3B] mb-5 inline-flex">&#10022; <span class="lang-id">Kisah Kami</span><span class="lang-en">Our Story</span></span>
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mt-4 gradient-text-green">
                    <span class="lang-id">Event Kami Sebelumnya</span><span class="lang-en">Our Previous Event</span>
                </h2>
                <p class="text-lg text-[#666666] mt-4 font-semibold italic">Herald of God 2024</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Two-column vertical marquee -->
                <div class="gsap-slide-right gsap-hide flex gap-3 rounded-3xl shadow-2xl overflow-hidden" style="height:460px">
                    <!-- Column 1 — scrolls up -->
                    <div class="flex-1 overflow-hidden rounded-2xl" id="herald-col1-viewport">
                        <div class="flex flex-col gap-3" id="herald-col1-track">
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-1.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-2.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/games.JPG" alt="Herald games" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-1.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-2.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/games.JPG" alt="Herald games" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                        </div>
                    </div>
                    <!-- Column 2 — scrolls down, offset start -->
                    <div class="flex-1 overflow-hidden rounded-2xl" id="herald-col2-viewport">
                        <div class="flex flex-col gap-3" id="herald-col2-track">
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/games.JPG" alt="Herald games" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-2.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-1.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/games.JPG" alt="Herald games" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-2.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            <div class="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer" style="height:210px" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/herald-1.jpg" alt="Herald 2024" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                        </div>
                    </div>
                </div>
                <div class="gsap-slide-left gsap-hide mt-8 lg:mt-0 lg:pl-8">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-0.5 bg-gradient-to-r from-[#D97757] to-[#F4A261] rounded-full"></div>
                        <span class="text-xs font-bold text-[#D97757] uppercase tracking-widest">2024</span>
                    </div>
                    <p class="text-base text-[#4A4A4A] mb-5 leading-relaxed">
                        <span class="lang-id">Dua tahun yang lalu, lebih dari <strong class="text-[#2C4A3B]">50 pemuda-pemudi</strong> berkumpul untuk retreat kita sebelumnya yang bertajuk</span>
                        <span class="lang-en">Two years ago, over <strong class="text-[#2C4A3B]">50 young adults</strong> gathered for our previous retreat themed</span>
                        <em class="text-[#D97757] font-semibold">&ldquo;Herald of God&rdquo;</em>.
                    </p>
                    <p class="text-base text-[#4A4A4A] mb-5 leading-relaxed">
                        <span class="lang-id">Diadakan di kawasan sejuk Puncak selama 3 hari yang luar biasa, kita belajar mendalam tentang apa artinya menjadi pembawa pesan kasih Tuhan di dunia saat ini.</span>
                        <span class="lang-en">Held in the cool highlands of Puncak for 3 incredible days, we dove deep into what it means to be God's messengers of love in today's world.</span>
                    </p>
                    <p class="text-base text-[#4A4A4A] leading-relaxed">
                        <span class="lang-id">Melalui sesi penyembahan yang intens, kegiatan <em>team-building</em> yang seru, serta sesi sharing yang terbuka, dampaknya sangat terasa. Banyak yang menemukan kembali panggilan hidup mereka, dan persahabatan yang kuat terjalin.</span>
                        <span class="lang-en">Through intense worship sessions, fun <em>team-building</em> activities, and vulnerable sharing sessions, the impact was profound. Many rediscovered their life's calling, and strong friendships were forged.</span>
                    </p>
                    <div class="grid grid-cols-3 gap-3 mt-8">
                        <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-[#E5E0D8]">
                            <p class="font-heading text-2xl font-extrabold gradient-text">50+</p>
                            <p class="text-xs text-[#666666] mt-1"><span class="lang-id">Peserta</span><span class="lang-en">Participants</span></p>
                        </div>
                        <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-[#E5E0D8]">
                            <p class="font-heading text-2xl font-extrabold gradient-text">3</p>
                            <p class="text-xs text-[#666666] mt-1"><span class="lang-id">Hari</span><span class="lang-en">Days</span></p>
                        </div>
                        <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-[#E5E0D8]">
                            <p class="font-heading text-2xl font-extrabold gradient-text">1</p>
                            <p class="text-xs text-[#666666] mt-1"><span class="lang-id">Komunitas</span><span class="lang-en">Community</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
