function renderAbout() {
    return `
    <!-- About Section with 3-Row Image Slider -->
    <section id="about" class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up gsap-hide">
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
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
                        <div class="text-base text-[#4A4A4A] leading-relaxed pl-12 mb-6 space-y-3">
                            <p>
                                <span class="lang-id">Zeal adalah <strong>komunitas rohani yang berisi mahasiswa</strong> yang berkumpul untuk mengenal Tuhan dan memperkenalkan Tuhan kepada orang lain.</span>
                                <span class="lang-en">Zeal is a <strong>spiritual community of university students</strong> who gather to know God and make Him known.</span>
                            </p>
                            <p>
                                <span class="lang-id">Kami hadir untuk menjangkau anak muda dengan menyediakan ruang untuk bertumbuh dalam iman, membangun relasi yang sehat, dan diperlengkapi dalam tujuan hidup mereka.</span>
                                <span class="lang-en">We exist to reach young people by creating a space where they can grow in faith, build meaningful relationships, and be equipped for their purpose.</span>
                            </p>
                            <p>
                                <span class="lang-id">Kami memiliki visi untuk membangun <strong>small group yang berfungsi</strong> yang melahirkan dan memperlengkapi <strong>pemimpin berpusat pada Kristus</strong>, yang berdampak di kampus, kota, dan bidang kehidupan mereka ke depan. Zeal bukan hanya tempat untuk berkumpul, tetapi tempat untuk dilatih dan diutus.</span>
                                <span class="lang-en">We carry a vision to build <strong>functioning small groups</strong> that raise and equip <strong>Christ-centered leaders</strong>, who will impact their campus, city, and future fields. Through a culture of discipleship and leadership development, Zeal is not just a place to belong, but a place to be trained and sent.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 3-Row Horizontal Marquee -->
                <div class="gsap-slide-left gsap-hide relative h-[520px] lg:h-[540px]">
                    <div class="relative z-10 rounded-3xl shadow-2xl h-full flex flex-col gap-2 p-2.5 overflow-hidden bg-white">
                        <!-- Row 1 — scrolls left (images duplicated for seamless loop) -->
                        <div class="flex-1 overflow-hidden rounded-xl" style="touch-action:pan-y;cursor:grab;user-select:none;">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row1-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (1).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (2).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (3).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (4).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (5).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (6).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (7).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <!-- duplicate set -->
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (1).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (2).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (3).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (4).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (5).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (6).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (7).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            </div>
                        </div>
                        <!-- Row 2 — scrolls right (images duplicated for seamless loop) -->
                        <div class="flex-1 overflow-hidden rounded-xl" style="touch-action:pan-y;cursor:grab;user-select:none;">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row2-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (8).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (9).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (10).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (11).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (12).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (13).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <!-- duplicate set -->
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (8).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (9).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (10).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (11).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (12).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (13).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                            </div>
                        </div>
                        <!-- Row 3 — scrolls left offset (images duplicated for seamless loop) -->
                        <div class="flex-1 overflow-hidden rounded-xl" style="touch-action:pan-y;cursor:grab;user-select:none;">
                            <div class="flex gap-2 h-full items-stretch" id="zeal-row3-track">
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (14).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (15).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (16).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (17).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (18).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <div class="flex-shrink-0 w-44 overflow-hidden rounded-xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)"><img src="assets/zeal (19).jpeg" alt="Zeal" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                <!-- duplicate set -->
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
