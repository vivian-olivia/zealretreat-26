function renderRegister() {
    const isEarlyBird = new Date() < new Date('2026-06-01');
    const totalFee = isEarlyBird ? 'Rp 350.000 (Early Bird)' : 'Rp 500.000';
    return `
    <!-- Registration Section -->
    <section id="register" class="py-24 bg-[#E5E0D8] overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 gsap-fade-up relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2C4A3B] to-[#D97757]"></div>
                <div class="text-center mb-10">
                    <h2 class="font-heading text-4xl font-extrabold text-[#2C4A3B] mb-2"><span class="lang-id">Daftar Sekarang</span><span class="lang-en">Register Now</span></h2>
                    <div class="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                        &#9200; <span class="lang-id">Pendaftaran ditutup pada 30 Juni 2026</span><span class="lang-en">Registration closes on June 30, 2026</span>
                    </div>
                    <p class="text-lg text-[#666666]">
                        <span class="lang-id">Amankan tempatmu untuk HOME! Isi data dirimu di bawah ini.</span>
                        <span class="lang-en">Secure your spot for HOME! Fill out the details below.</span>
                    </p>
                </div>

                <form id="registration-form" class="space-y-8">
                    <!-- Personal Info -->
                    <div>
                        <h4 class="font-heading font-bold text-xl text-[#D97757] mb-4 border-b border-gray-100 pb-2"><span class="lang-id">Informasi Pribadi</span><span class="lang-en">Personal Information</span></h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="fullName" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Nama Lengkap</span><span class="lang-en">Full Name</span> <span class="text-[#D97757]">*</span></label>
                                <input type="text" id="fullName" required
                                    placeholder="Nama lengkapmu"
                                    data-placeholder-id="Nama lengkapmu"
                                    data-placeholder-en="Your full name"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-bold text-[#2C4A3B] mb-2">Phone / WhatsApp <span class="text-[#D97757]">*</span></label>
                                <input type="tel" id="phone" required
                                    placeholder="628xxxxxxxxxx"
                                    data-placeholder-id="628xxxxxxxxxx"
                                    data-placeholder-en="628xxxxxxxxxx"
                                    pattern="^62[0-9]{8,13}$"
                                    inputmode="numeric"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                                <p class="text-xs text-[#666666] mt-1"><span class="lang-en">Must start with 62 (e.g. 6281234567890)</span><span class="lang-id">Harus diawali 62 (contoh: 6281234567890)</span></p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label for="uniName" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Nama Universitas / Kampus</span><span class="lang-en">University / Campus Name</span> <span class="text-[#D97757]">*</span></label>
                                <input type="text" id="uniName" required
                                    placeholder="Isi '-' jika sudah tidak kuliah"
                                    data-placeholder-id="Isi '-' jika sudah tidak kuliah"
                                    data-placeholder-en="Fill '-' if not in university"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                            </div>
                            <div>
                                <label for="status" class="block text-sm font-bold text-[#2C4A3B] mb-2">Status <span class="text-[#D97757]">*</span></label>
                                <select id="status" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all bg-white">
                                    <option value="" disabled selected data-label-id="Pilih Status" data-label-en="Select Status">Pilih Status</option>
                                    <option value="disciple">GKDI Disciple</option>
                                    <option value="bible_study" data-label-id="Sedang Belajar Alkitab" data-label-en="Currently in Bible Study">Sedang Belajar Alkitab</option>
                                    <option value="others" data-label-id="Lainnya" data-label-en="Others">Lainnya</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Logistics -->
                    <div>
                        <h4 class="font-heading font-bold text-xl text-[#D97757] mb-4 border-b border-gray-100 pb-2"><span class="lang-id">Logistik & Darurat</span><span class="lang-en">Logistics & Emergency</span></h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="md:col-span-2">
                                <label for="transport" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Preferensi Transportasi</span><span class="lang-en">Transportation Preference</span> <span class="text-[#D97757]">*</span></label>
                                <select id="transport" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all bg-white">
                                    <option value="" disabled selected data-label-id="Pilih Transportasi" data-label-en="Select Transportation">Pilih Transportasi</option>
                                    <option value="sendiri" data-label-id="Berangkat Sendiri" data-label-en="Own Transport">Berangkat Sendiri</option>
                                    <option value="bareng" data-label-id="Bareng (Gunakan Transportasi Panitia)" data-label-en="Join Group Transport">Bareng (Gunakan Transportasi Panitia)</option>
                                </select>
                                <p class="text-xs mt-2 text-[#666666] font-medium"><span class="lang-id">Titik kumpul keberangkatan (bareng) ada di</span><span class="lang-en">Meeting point for group transport is at</span> <a href="https://maps.app.goo.gl/S9YrgLNDcNwCJqu78" target="_blank" class="text-[#D97757] underline hover:text-[#2C4A3B]">GKDI Tangerang</a>.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div>
                                <label for="emergContactName" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Nama Kontak Darurat</span><span class="lang-en">Emergency Contact Name</span> <span class="text-[#D97757]">*</span></label>
                                <input type="text" id="emergContactName" required
                                    placeholder="Nama lengkap"
                                    data-placeholder-id="Nama lengkap"
                                    data-placeholder-en="Full name"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                            </div>
                            <div>
                                <label for="emergContactRelation" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Hubungan</span><span class="lang-en">Relation</span> <span class="text-[#D97757]">*</span></label>
                                <input type="text" id="emergContactRelation" required
                                    placeholder="Contoh: Ibu, Kakak"
                                    data-placeholder-id="Contoh: Ibu, Kakak"
                                    data-placeholder-en="e.g. Mother, Sibling"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                            </div>
                            <div>
                                <label for="emergContactPhone" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">No. HP Darurat</span><span class="lang-en">Emergency Phone</span> <span class="text-[#D97757]">*</span></label>
                                <input type="tel" id="emergContactPhone" required
                                    placeholder="628xxxxxxxxxx"
                                    data-placeholder-id="628xxxxxxxxxx"
                                    data-placeholder-en="628xxxxxxxxxx"
                                    pattern="^62[0-9]{8,13}$"
                                    inputmode="numeric"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all">
                                <p class="text-xs text-[#666666] mt-1"><span class="lang-en">Must start with 62 (e.g. 6281234567890)</span><span class="lang-id">Harus diawali 62 (contoh: 6281234567890)</span></p>
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="notes" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Catatan Khusus / Alergi Makanan</span><span class="lang-en">Special Notes / Dietary Requirements</span> <span class="text-gray-400 font-normal">(Optional)</span></label>
                            <textarea id="notes" rows="2"
                                placeholder="Contoh: alergi kacang, vegetarian..."
                                data-placeholder-id="Contoh: alergi kacang, vegetarian..."
                                data-placeholder-en="e.g. nut allergy, vegetarian..."
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all resize-none"></textarea>
                        </div>
                    </div>

                    <!-- Payment Details -->
                    <div class="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E0D8]">
                        <h4 class="font-heading font-bold text-xl text-[#2C4A3B] mb-4 border-b border-gray-200 pb-2"><span class="lang-id">Info Pembayaran</span><span class="lang-en">Payment Info</span></h4>
                        <div class="mb-6 text-sm text-[#4A4A4A] bg-white p-4 rounded-xl shadow-sm">
                            <p class="mb-2"><span class="lang-id">Biaya Total</span><span class="lang-en">Total Fee</span>: <strong>${totalFee}</strong></p>
                            <p class="mb-1"><span class="lang-id">Transfer ke rekening</span><span class="lang-en">Transfer to bank account</span>:</p>
                            <div class="flex items-center gap-3 mt-1">
                                <p class="text-xl text-[#2C4A3B] font-bold">BCA 6050525820</p>
                                <button type="button" id="copy-account-btn" class="flex items-center bg-[#E5E0D8] text-[#2C4A3B] hover:bg-[#D97757] hover:text-white p-2 rounded-lg transition-all" title="Copy">
                                    <svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg>
                                </button>
                            </div>
                            <p class="font-medium mt-1">a.n. Chelsea Wang</p>
                            <p class="mt-3 text-red-600 font-bold bg-red-50 p-2 border border-red-100 rounded inline-block"><span class="lang-id">PENTING: Gunakan catatan transfer</span><span class="lang-en">IMPORTANT: Use transfer notes</span>: <em>[Nama Lengkap]_retreat zeal tgr</em></p>
                        </div>
                        <div>
                            <label for="paymentProof" class="block text-sm font-bold text-[#2C4A3B] mb-2"><span class="lang-id">Unggah Bukti Transfer</span><span class="lang-en">Upload Payment Proof</span> <span class="text-[#D97757]">*</span></label>
                            <input type="file" id="paymentProof" accept="image/*,.heic,.heif" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D97757] focus:border-transparent outline-none transition-all bg-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E5E0D8] file:text-[#2C4A3B] hover:file:bg-gray-300 cursor-pointer">
                            <p class="text-xs mt-1 text-[#666666]"><span class="lang-id">Format: JPG, PNG, HEIC</span><span class="lang-en">Format: JPG, PNG, HEIC</span></p>
                            <!-- Image preview -->
                            <div id="payment-preview-wrap" class="hidden mt-3 relative w-fit">
                                <img id="payment-preview" src="" alt="Preview" class="max-h-48 rounded-xl border border-[#E5E0D8] shadow-sm object-contain">
                                <div id="payment-preview-loader" class="hidden absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl">
                                    <svg class="animate-spin w-6 h-6 text-[#D97757]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                                    <span class="ml-2 text-sm text-[#666666]"><span class="lang-id">Mengkonversi HEIC...</span><span class="lang-en">Converting HEIC...</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" id="submit-btn" class="w-full bg-[#D97757] hover:bg-[#C26446] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg transform hover:scale-[1.02]">
                        <span class="lang-id">Kirim Pendaftaran</span><span class="lang-en">Submit Registration</span>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Registration Success Modal -->
    <div id="success-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <div id="modal-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div id="modal-card" class="relative bg-gradient-to-br from-[#2C4A3B] to-[#1A2E24] text-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-lg w-full z-10 max-h-[90vh] overflow-y-auto">
            <button id="modal-close" class="absolute top-4 right-5 text-white/50 hover:text-white text-3xl leading-none transition-colors">&times;</button>
            <h4 class="text-2xl font-bold mb-2 font-heading text-[#F4A261] text-center">
                <span class="lang-id">Pendaftaran Berhasil!</span><span class="lang-en">Registration Submitted!</span>
            </h4>
            <p class="text-[#E5E0D8] mb-6 text-sm text-center">
                <span class="lang-id">Data dan bukti pembayaranmu telah diterima. Gabung grup WhatsApp untuk info selanjutnya!</span>
                <span class="lang-en">Your data and payment proof have been received. Join the WhatsApp group for updates!</span>
            </p>
            <div class="flex flex-col items-center gap-5">
                <div class="bg-white p-4 rounded-xl text-center shadow-inner">
                    <p class="text-[#2C4A3B] font-bold text-sm mb-3"><span class="lang-id">Scan QR untuk Gabung Grup WA</span><span class="lang-en">Scan QR to Join WA Group</span></p>
                    <img src="assets/wa-group.jpeg" alt="WA Group QR" class="w-40 h-40 mx-auto rounded-lg object-contain">
                </div>
                <a href="https://chat.whatsapp.com/JL7lOrIj8kQ8APWjSfbwfn?mode=gi_t" target="_blank" class="w-full bg-[#25D366] hover:bg-[#1EBE53] text-white font-bold py-3 px-4 rounded-full transition-colors flex items-center justify-center shadow-md transform hover:scale-105">
                    <span class="mr-2 text-xl">&#128172;</span> <span class="lang-id">Gabung Grup WA</span><span class="lang-en">Join WA Group</span>
                </a>
            </div>
        </div>
    </div>
    `;
}
