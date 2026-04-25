function renderPricing() {
    return `
    <!-- Pricing Section -->
    <section id="pricing" class="py-24 bg-[#FAF8F5] overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up">
                <span class="section-pill text-[#D97757] mb-5 inline-flex">&#10022; <span class="lang-id">Investasi</span><span class="lang-en">Investment</span></span>
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mt-4 gradient-text">
                    <span class="lang-id">Biaya Pendaftaran</span><span class="lang-en">Registration Pricing</span>
                </h2>
                <p class="text-lg text-[#666666] mt-4">
                    <span class="lang-id">Kapasitas terbatas. Amankan tempatmu sekarang!</span><span class="lang-en">Spaces are limited. Secure your spot today!</span>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto gsap-stagger-container">
                <!-- Early Bird -->
                <div class="gsap-stagger-item bg-white rounded-3xl shadow-lg relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div class="h-2 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
                    <div class="absolute top-4 right-4 btn-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        <span class="lang-id">Terhemat</span><span class="lang-en">Best Value</span>
                    </div>
                    <div class="p-8 pt-10">
                        <h3 class="font-heading text-2xl font-bold text-[#2C4A3B] mb-1">Early Bird</h3>
                        <p class="text-[#666666] text-sm mb-6">
                            <span class="lang-id">Daftar lebih awal dan hemat biaya retreatmu.</span><span class="lang-en">Register early and save on your retreat experience.</span>
                        </p>
                        <div class="mb-6">
                            <span class="font-heading text-4xl font-extrabold gradient-text">Rp 350.000</span>
                        </div>
                        <ul class="space-y-3 mb-8 text-left">
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full btn-gradient flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Akomodasi 2 Malam</span><span class="lang-en">2 Nights Accommodation</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full btn-gradient flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Semua Makanan</span><span class="lang-en">All Meals Included</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full btn-gradient flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Materi Retreat</span><span class="lang-en">Retreat Materials</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full btn-gradient flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Transportasi Disediakan</span><span class="lang-en">Transportation Provided</span></li>
                        </ul>
                        <div class="w-full bg-[#FFF5F0] py-3 px-4 rounded-xl border border-[#F4A261]/30 text-center">
                            <p class="text-sm text-[#D97757] font-bold"><span class="lang-id">Berakhir 7 Juni 2026</span><span class="lang-en">Ends 7 June 2026</span></p>
                        </div>
                    </div>
                </div>

                <!-- Normal Price -->
                <div class="gsap-stagger-item bg-white rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div class="h-2 w-full bg-[#2C4A3B]"></div>
                    <div class="p-8 pt-10">
                        <h3 class="font-heading text-2xl font-bold text-[#2C4A3B] mb-1">Normal Price</h3>
                        <p class="text-[#666666] text-sm mb-6">
                            <span class="lang-id">Pendaftaran standar untuk retreat akhir pekan.</span><span class="lang-en">Standard registration for the youth retreat weekend.</span>
                        </p>
                        <div class="mb-6">
                            <span class="font-heading text-4xl font-extrabold gradient-text-green">Rp 500.000</span>
                        </div>
                        <ul class="space-y-3 mb-8 text-left">
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Akomodasi 2 Malam</span><span class="lang-en">2 Nights Accommodation</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Semua Makanan</span><span class="lang-en">All Meals Included</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Materi Retreat</span><span class="lang-en">Retreat Materials</span></li>
                            <li class="flex items-center gap-3 text-[#4A4A4A] text-sm"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Transportasi Disediakan</span><span class="lang-en">Transportation Provided</span></li>
                        </ul>
                        <div class="w-full bg-[#FAF8F5] py-3 px-4 rounded-xl border border-[#E5E0D8] text-center">
                            <p class="text-sm text-[#666666] font-bold"><span class="lang-id">Berakhir 30 Juni 2026</span><span class="lang-en">Ends 30 June 2026</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
