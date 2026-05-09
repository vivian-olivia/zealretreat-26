function renderPricing() {
    return `
    <!-- Pricing Section -->
    <section id="pricing" class="py-24 bg-[#FAF8F5] overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up">
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
                    <span class="lang-id">Biaya Pendaftaran</span><span class="lang-en">Registration Pricing</span>
                </h2>
                <p class="text-lg text-[#666666] mt-4">
                    <span class="lang-id">Kapasitas terbatas. Amankan tempatmu sekarang!</span><span class="lang-en">Spaces are limited. Secure your spot today!</span>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto gsap-stagger-container items-stretch px-2">

                <!-- Retreat Fee Card -->
                <div class="gsap-stagger-item relative transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="absolute -inset-0.5 bg-gradient-to-br from-[#2C4A3B] to-[#D97757] rounded-3xl opacity-50 blur-sm"></div>
                    <div class="relative bg-white rounded-3xl overflow-hidden flex flex-col flex-1 shadow-xl">
                        <div class="h-2 w-full bg-gradient-to-r from-[#2C4A3B] to-[#D97757]"></div>
                        <div class="p-8 pt-10 flex flex-col flex-1">
                            <h3 class="font-heading text-2xl font-bold text-[#2C4A3B] mb-1">
                                <span class="lang-id">Biaya Retreat</span><span class="lang-en">Retreat Fee</span>
                            </h3>
                            <p class="text-[#666666] text-sm mb-6">
                                <span class="lang-id">Pendaftaran retreat akhir pekan.</span><span class="lang-en">Registration for the youth retreat weekend.</span>
                            </p>
                            <div class="mb-6">
                                <span class="font-heading text-5xl font-extrabold gradient-text">Rp 500.000</span>
                            </div>
                            <ul class="space-y-3 mb-8 text-left flex-1">
                                <li class="flex items-center gap-3 text-[#4A4A4A] text-sm font-medium"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Akomodasi 3 Hari 2 Malam</span><span class="lang-en">3 Days 2 Nights Accommodation</span></li>
                                <li class="flex items-center gap-3 text-[#4A4A4A] text-sm font-medium"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Semua Makanan</span><span class="lang-en">All Meals Included</span></li>
                                <li class="flex items-center gap-3 text-[#4A4A4A] text-sm font-medium"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Materi Retreat</span><span class="lang-en">Retreat Materials</span></li>
                                <li class="flex items-center gap-3 text-[#4A4A4A] text-sm font-medium"><span class="w-5 h-5 rounded-full bg-[#2C4A3B] flex items-center justify-center text-white text-xs flex-shrink-0">&#10003;</span> <span class="lang-id">Transportasi Disediakan</span><span class="lang-en">Transportation Provided</span></li>
                            </ul>
                            <div class="w-full bg-[#FAF8F5] py-3 px-4 rounded-xl border border-[#E5E0D8] text-center mt-auto">
                                <p class="text-sm text-[#666666] font-bold">&#9201; <span class="lang-id">Pendaftaran ditutup 30 Juni 2026</span><span class="lang-en">Registration closes 30 June 2026</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cicilan / Installment Card -->
                <div class="gsap-stagger-item bg-white rounded-3xl border border-[#E5E0D8] shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="h-2 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
                    <div class="p-8 pt-10 flex flex-col flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-2xl">&#128176;</span>
                            <h3 class="font-heading text-2xl font-bold text-[#2C4A3B]">
                                <span class="lang-id">Bisa Cicilan!</span><span class="lang-en">Installment Available!</span>
                            </h3>
                        </div>
                        <p class="text-[#666666] text-sm mb-6">
                            <span class="lang-id">Tidak harus lunas di awal — bayar sebagian dulu.</span><span class="lang-en">No need to pay in full upfront — start with a deposit.</span>
                        </p>
                        <p class="text-sm font-semibold text-[#2C4A3B] mb-3"><span class="lang-id">Ketentuan Cicilan:</span><span class="lang-en">Installment Terms:</span></p>
                        <ul class="space-y-3 mb-8 text-left flex-1">
                            <li class="flex items-start gap-3 text-[#4A4A4A] text-sm font-medium">
                                <span class="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                                <span><span class="lang-id">DP minimal <strong>50%</strong> (Rp 250.000) dibayar saat daftar</span><span class="lang-en">Minimum <strong>50% DP</strong> (Rp 250,000) paid upon registration</span></span>
                            </li>
                            <li class="flex items-start gap-3 text-[#4A4A4A] text-sm font-medium">
                                <span class="w-5 h-5 rounded-full bg-[#D97757] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                                <span><span class="lang-id">Sisa Rp 250.000 dilunasi sesuai kesepakatan</span><span class="lang-en">Remaining Rp 250,000 settled as agreed</span></span>
                            </li>
                        </ul>
                        <div class="bg-[#FAF8F5] rounded-xl p-4 border border-[#E5E0D8] mt-auto">
                            <p class="text-sm text-[#4A4A4A] mb-3">
                                <span class="lang-id">Ada pertanyaan soal biaya atau cicilan?</span><span class="lang-en">Questions about payment or installments?</span>
                            </p>
                            <a href="https://wa.me/6287876126072" target="_blank" class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white font-bold text-sm py-2 px-4 rounded-full transition-colors shadow-sm">
                                <span>&#128172;</span> Chelsea
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}
