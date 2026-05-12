function renderFaq() {
    return `
    <!-- FAQ Section -->
    <section id="faq" class="py-24 bg-[#FAF8F5] overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up">
                <h2 class="font-heading text-4xl font-extrabold text-[#2C4A3B] mb-4"><span class="lang-id">Pertanyaan Umum</span><span class="lang-en">Frequently Asked Questions</span></h2>
                <p class="text-xl text-[#666666]">
                    <span class="lang-id">Punya pertanyaan? Kami punya jawabannya.</span>
                    <span class="lang-en">Got questions? We've got answers.</span>
                </p>
            </div>

            <div class="space-y-4 mb-16 gsap-fade-up">
                <div class="accordion-item bg-white border border-[#E5E0D8] rounded-xl overflow-hidden shadow-sm">
                    <button class="accordion-btn w-full px-6 py-5 text-left font-heading font-bold text-lg text-[#2C4A3B] flex justify-between items-center focus:outline-none">
                        <span><span class="lang-id">Siapa yang bisa ikut retreat?</span><span class="lang-en">Who can join the retreat?</span></span>
                        <span class="accordion-icon text-[#D97757] text-xl">&#9660;</span>
                    </button>
                    <div class="accordion-content px-6 bg-white">
                        <p class="text-[#4A4A4A] pb-2">
                            <span class="lang-id">Retreat ini terbuka untuk semua dewasa muda berusia 17 hingga 27 tahun. Baik kamu yang sudah lama di gereja maupun yang baru mulai menjelajahi iman, kamu sangat diterima di sini.</span>
                            <span class="lang-en">The retreat is open to all young adults aged 17 to 27. Whether you've been part of a church your whole life or are just exploring faith, you are welcome here.</span>
                        </p>
                    </div>
                </div>

                <div class="accordion-item bg-white border border-[#E5E0D8] rounded-xl overflow-hidden shadow-sm">
                    <button class="accordion-btn w-full px-6 py-5 text-left font-heading font-bold text-lg text-[#2C4A3B] flex justify-between items-center focus:outline-none">
                        <span><span class="lang-id">Apakah transportasi disediakan?</span><span class="lang-en">Is transportation provided?</span></span>
                        <span class="accordion-icon text-[#D97757] text-xl">&#9660;</span>
                    </button>
                    <div class="accordion-content px-6 bg-white">
                        <p class="text-[#4A4A4A] pb-2">
                            <span class="lang-id">Ya! Transportasi disediakan untuk seluruh pendaftar. Titik kumpul keberangkatan berada di <a href="https://maps.app.goo.gl/S9YrgLNDcNwCJqu78" target="_blank" class="text-[#D97757] underline hover:text-[#2C4A3B]">GKDI Tangerang</a>. Kamu bisa memilih untuk berangkat bareng atau membawa kendaraan sendiri pada form pendaftaran.</span>
                            <span class="lang-en">Yes! Transportation will be provided for all registrants. The meeting point is at <a href="https://maps.app.goo.gl/S9YrgLNDcNwCJqu78" target="_blank" class="text-[#D97757] underline hover:text-[#2C4A3B]">GKDI Tangerang</a>. You can indicate your preference to commute with us or individually on the registration form.</span>
                        </p>
                    </div>
                </div>

                <div class="accordion-item bg-white border border-[#E5E0D8] rounded-xl overflow-hidden shadow-sm">
                    <button class="accordion-btn w-full px-6 py-5 text-left font-heading font-bold text-lg text-[#2C4A3B] flex justify-between items-center focus:outline-none">
                        <span><span class="lang-id">Apakah biaya termasuk akomodasi?</span><span class="lang-en">Is accommodation included in the fee?</span></span>
                        <span class="accordion-icon text-[#D97757] text-xl">&#9660;</span>
                    </button>
                    <div class="accordion-content px-6 bg-white">
                        <p class="text-[#4A4A4A] pb-2">
                            <span class="lang-id">Ya! Biaya pendaftaranmu sudah mengcover akomodasi selama 2 malam, semua jadwal makan, dan seluruh materi retreat.</span>
                            <span class="lang-en">Yes! Your registration fee covers 2 nights of accommodation, all meals, and all retreat materials. You only need to bring your personal items.</span>
                        </p>
                    </div>
                </div>

                <div class="accordion-item bg-white border border-[#E5E0D8] rounded-xl overflow-hidden shadow-sm">
                    <button class="accordion-btn w-full px-6 py-5 text-left font-heading font-bold text-lg text-[#2C4A3B] flex justify-between items-center focus:outline-none">
                        <span><span class="lang-id">Bolehkah ikut sendiri jika tidak kenal siapa-siapa?</span><span class="lang-en">Can I join alone if I don't know anyone?</span></span>
                        <span class="accordion-icon text-[#D97757] text-xl">&#9660;</span>
                    </button>
                    <div class="accordion-content px-6 bg-white">
                        <p class="text-[#4A4A4A] pb-2">
                            <span class="lang-id">Tentu saja! Banyak orang yang datang sendiri. Small group dan games perkenalan didesain khusus untuk membantumu bertemu teman baru dan merasa seperti di rumah sendiri.</span>
                            <span class="lang-en">Absolutely! Many people come alone. Our small groups and icebreakers are designed specifically to help you meet new people and feel right at home instantly.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="bg-[#2C4A3B] text-white p-8 rounded-2xl text-center shadow-lg gsap-fade-up">
                <h3 class="font-heading text-2xl font-bold mb-3">
                    <span class="lang-id">Masih punya pertanyaan?</span><span class="lang-en">Still have questions?</span>
                </h3>
                <p class="mb-2 opacity-90">
                    <span class="lang-id">Hubungi Koordinator Retreat kami:</span><span class="lang-en">Reach out to our Retreat Coordinator:</span>
                </p>
                <p class="font-heading font-bold text-[#F4A261] text-lg mb-6">Vivian</p>
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <a href="https://wa.me/6287814050607" target="_blank" class="flex items-center text-lg hover:text-[#D97757] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="mr-2" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}
