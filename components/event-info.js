function renderEventInfo() {
    return `
    <!-- Event Info Section -->
    <section id="event-info" class="py-24 bg-[#FAF8F5] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up gsap-hide">
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-4 gradient-text-green">
                    <span class="lang-id">Detail Acara</span><span class="lang-en">Event Details</span>
                </h2>
                <p class="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
                    <span class="lang-id">Semua informasi yang kamu butuhkan untuk mempersiapkan akhir pekan yang tak terlupakan.</span>
                    <span class="lang-en">Everything you need to know to prepare for an unforgettable weekend.</span>
                </p>
            </div>

            <!-- Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 gsap-stagger-container">
                <div class="gsap-stagger-item bg-white rounded-3xl shadow-sm border border-[#E5E0D8] text-center flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div class="h-1.5 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
                    <div class="p-8">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center text-3xl mb-5 mx-auto">&#128205;</div>
                        <h4 class="font-heading font-bold text-lg text-[#2C4A3B] mb-2"><span class="lang-id">Lokasi</span><span class="lang-en">Location</span></h4>
                        <p class="text-[#4A4A4A] text-sm leading-relaxed">Bogor Green Forest<br><span class="text-[#666666]">Indonesia</span></p>
                    </div>
                </div>
                <div class="gsap-stagger-item bg-white rounded-3xl shadow-sm border border-[#E5E0D8] text-center flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div class="h-1.5 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
                    <div class="p-8">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center text-3xl mb-5 mx-auto">&#9200;</div>
                        <h4 class="font-heading font-bold text-lg text-[#2C4A3B] mb-2"><span class="lang-id">Tanggal & Waktu</span><span class="lang-en">Date & Time</span></h4>
                        <p class="text-[#4A4A4A] text-sm leading-relaxed">
                            <span class="lang-id">Jum, 3 Jul &ndash; Min, 5 Jul 2026</span>
                            <span class="lang-en">Fri, July 3 &ndash; Sun, July 5, 2026</span>
                        </p>
                    </div>
                </div>
                <div class="gsap-stagger-item bg-white rounded-3xl shadow-sm border border-[#E5E0D8] text-center flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div class="h-1.5 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
                    <div class="p-8">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center text-3xl mb-5 mx-auto">&#128101;</div>
                        <h4 class="font-heading font-bold text-lg text-[#2C4A3B] mb-2"><span class="lang-id">Kriteria Peserta</span><span class="lang-en">Eligibility</span></h4>
                        <p class="text-[#4A4A4A] text-sm leading-relaxed">
                            <span class="lang-id">Khusus dewasa muda.<br>Usia 17&ndash;27 tahun.</span>
                            <span class="lang-en">Exclusive to young adults.<br>Must be 17&ndash;27 years old.</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Map + Photos -->
            <div class="mb-16 bg-white p-4 rounded-3xl shadow-sm border border-[#E5E0D8] gsap-fade-up">
                <h3 class="font-heading text-xl font-bold text-[#2C4A3B] mb-4 text-center mt-2">
                    <span class="lang-id">Lokasi Retreat</span><span class="lang-en">Retreat Location</span>
                </h3>
                <div class="w-full h-72 rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31703.891543636!2d106.8053494!3d-6.6486013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf4fde33c0b3%3A0x70889815f5e23386!2sBogor%20Green%20Forest!5e0!3m2!1sen!2sid!4v1776954545052!5m2!1sen!2sid"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-4">
                    <div class="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)">
                        <img src="assets/hotel-1.jpg" alt="Hotel" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                    </div>
                    <div class="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)">
                        <img src="assets/hotel-2.jpg" alt="Hotel" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                    </div>
                    <div class="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer" onclick="window.openLightbox(this.querySelector('img').src)">
                        <img src="assets/hotel-3.jpg" alt="Hotel" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                    </div>
                </div>
            </div>

            <!-- Coming Soon Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-stagger-container">
                <div class="gsap-stagger-item bg-white rounded-3xl border border-[#E5E0D8] p-10 text-center flex flex-col items-center justify-center min-h-[200px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-4 text-gray-300">&#128197;</div>
                    <h3 class="font-heading text-xl font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Rundown Acara</span><span class="lang-en">Event Rundown</span></h3>
                    <p class="text-[#666666] max-w-xs mx-auto text-sm leading-relaxed">
                        <span class="lang-id">Jadwal lengkap retreat sedang disiapkan. Cek kembali nanti!</span>
                        <span class="lang-en">The full retreat schedule is being prepared. Check back soon!</span>
                    </p>
                    <span class="mt-5 section-pill text-gray-400 border-gray-200 text-[10px]"><span class="lang-id">Segera Hadir</span><span class="lang-en">Coming Soon</span></span>
                </div>
                <div class="gsap-stagger-item bg-white rounded-3xl border border-[#E5E0D8] p-10 text-center flex flex-col items-center justify-center min-h-[200px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-4 text-gray-300">&#128218;</div>
                    <h3 class="font-heading text-xl font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Panduan Peserta</span><span class="lang-en">Participant Guidebook</span></h3>
                    <p class="text-[#666666] max-w-xs mx-auto text-sm leading-relaxed">
                        <span class="lang-id">Panduan lengkap untuk peserta retreat, termasuk jadwal dan informasi penting.</span>
                        <span class="lang-en">A complete guide for retreat participants, including the schedule and important info.</span>
                    </p>
                    <span class="mt-5 section-pill text-gray-400 border-gray-200 text-[10px]"><span class="lang-id">Segera Hadir</span><span class="lang-en">Coming Soon</span></span>
                </div>
            </div>
        </div>
    </section>
    `;
}
