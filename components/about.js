function renderAbout() {
    return `
    <!-- About Section with 3-Row Image Slider -->
    <section id="about" class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up gsap-hide">
                <span class="section-pill text-[#D97757] mb-5 inline-flex">&#10022; <span class="lang-id">Kenali Kami</span><span class="lang-en">Get To Know Us</span></span>
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mt-4 mb-4 gradient-text">
                    <span class="lang-id">Tentang Pengalaman Ini</span><span class="lang-en">About the Experience</span>
                </h2>
                <p class="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
                    <span class="lang-id">Temukan tujuan di balik retreat kita dan kenali komunitas yang menyelenggarakannya.</span>
                    <span class="lang-en">Discover the purpose behind our gathering and the vibrant community hosting it.</span>
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- Text side -->
                <div class="gsap-slide-right gsap-hide">
                    <div class="mb-10">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-9 h-9 rounded-full btn-gradient flex items-center justify-center text-white text-sm font-bold flex-shrink-0">&#10022;</div>
                            <h3 class="font-heading text-2xl font-bold text-[#2C4A3B]"><span class="lang-id">Retreat</span><span class="lang-en">The Retreat</span></h3>
                        </div>
                        <p class="text-base text-[#4A4A4A] leading-relaxed pl-12">
                            <span class="lang-id">Waktu dan ruang khusus bagi dewasa muda untuk sejenak "jeda" dari kesibukan, mencari Tuhan lebih dalam, dan membangun persahabatan yang berpusat pada Kristus seumur hidup. Terbuka untuk usia 17-25 tahun.</span>
                            <span class="lang-en">A designated time and space for young adults to hit "pause" on their busy lives, seek God deeply, and build lifelong, Christ-centered friendships. Open to young adults aged 17&ndash;25.</span>
                        </p>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-9 h-9 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Z</div>
                            <h3 class="font-heading text-2xl font-bold text-[#2C4A3B]"><span class="lang-id">Tentang Zeal</span><span class="lang-en">About Zeal</span></h3>
                        </div>
                        <p class="text-base text-[#4A4A4A] leading-relaxed pl-12 mb-6">
                            <span class="lang-id">Sebagai keluarga yang terus bertumbuh dengan lebih dari <strong>80 dewasa muda</strong>, Zeal adalah ministry yang hidup dan menyambut semua orang. Tidak peduli latar belakangmu, selalu ada tempat bagimu di sini.</span>
                            <span class="lang-en">Currently a growing family of over <strong>80 young adults</strong>, Zeal is a vibrant, welcoming ministry dedicated to doing life together. No matter your background, there is a seat at the table for you here.</span>
                        </p>
                        <div class="bg-gradient-to-br from-[#FAF8F5] to-[#f0ece6] border-l-4 border-[#D97757] p-6 rounded-r-2xl shadow-sm">
                            <p class="font-bold text-xs text-[#D97757] uppercase tracking-widest mb-1"><span class="lang-id">Visi</span><span class="lang-en">Vision</span></p>
                            <p class="text-[#4A4A4A] italic mb-4 text-sm leading-relaxed"><span class="lang-id">Melihat generasi yang mengejar Kristus dengan penuh gairah dan mengubahkan kota mereka dengan kasih-Nya.</span><span class="lang-en">To see a generation passionately pursuing Christ and transforming their cities with His love.</span></p>
                            <p class="font-bold text-xs text-[#2C4A3B] uppercase tracking-widest mb-1"><span class="lang-id">Misi</span><span class="lang-en">Mission</span></p>
                            <p class="text-[#4A4A4A] italic text-sm leading-relaxed"><span class="lang-id">Memperlengkapi dewasa muda untuk mengenal Tuhan lebih dalam, menemukan panggilan unik mereka, dan membangun komunitas yang otentik.</span><span class="lang-en">Equipping young adults to know God deeply, discover their unique calling, and build an authentic community.</span></p>
                        </div>
                    </div>
                </div>

                <!-- 3-Row Horizontal Marquee -->
                <div class="gsap-slide-left gsap-hide relative h-[520px] lg:h-[540px]">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#D97757] to-[#F4A261] rounded-3xl transform translate-x-4 translate-y-4 z-0 opacity-40"></div>
                    <div class="relative z-10 rounded-3xl shadow-2xl h-full flex flex-col gap-2 p-2.5 overflow-hidden bg-white">
                        <!-- Row 1 — scrolls left -->
                        <div class="flex-1 overflow-hidden rounded-xl">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row1-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (1).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (2).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (3).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (4).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (5).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (6).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (7).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            </div>
                        </div>
                        <!-- Row 2 — scrolls right -->
                        <div class="flex-1 overflow-hidden rounded-xl">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row2-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (8).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (9).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (10).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (11).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (12).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (13).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            </div>
                        </div>
                        <!-- Row 3 — scrolls left (offset) -->
                        <div class="flex-1 overflow-hidden rounded-xl">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row3-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (14).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (15).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (16).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (17).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (18).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (19).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
