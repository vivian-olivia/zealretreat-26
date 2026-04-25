function renderNavbar() {
    return `
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E0D8] shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="document.getElementById('home').scrollIntoView({behavior: 'smooth'})">
                    <span class="font-heading font-extrabold text-2xl gradient-text tracking-tight">ZEAL TANGERANG</span>
                </div>
                <div class="hidden lg:flex space-x-6 items-center">
                    <a href="#about" class="relative text-[#4A4A4A] hover:text-[#D97757] font-medium transition-colors text-sm tracking-wide group"><span class="lang-id">Tentang</span><span class="lang-en">About</span><span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full rounded-full"></span></a>
                    <a href="#history" class="relative text-[#4A4A4A] hover:text-[#D97757] font-medium transition-colors text-sm tracking-wide group"><span class="lang-id">Riwayat</span><span class="lang-en">History</span><span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full rounded-full"></span></a>
                    <a href="#event-info" class="relative text-[#4A4A4A] hover:text-[#D97757] font-medium transition-colors text-sm tracking-wide group"><span class="lang-id">Info Acara</span><span class="lang-en">Event Info</span><span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full rounded-full"></span></a>
                    <a href="#faq" class="relative text-[#4A4A4A] hover:text-[#D97757] font-medium transition-colors text-sm tracking-wide group">FAQ<span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full rounded-full"></span></a>
                    <a href="#pricing" class="relative text-[#4A4A4A] hover:text-[#D97757] font-medium transition-colors text-sm tracking-wide group"><span class="lang-id">Biaya</span><span class="lang-en">Pricing</span><span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D97757] transition-all group-hover:w-full rounded-full"></span></a>
                    <a href="#register" class="btn-gradient text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md"><span class="lang-id">Daftar</span><span class="lang-en">Register</span></a>
                    <button id="lang-toggle-desktop" class="ml-2 font-heading font-bold text-[#D97757] hover:text-[#2C4A3B] transition-colors px-2 py-1 border-2 border-[#D97757] hover:border-[#2C4A3B] rounded-lg text-sm">EN</button>
                </div>
                <div class="lg:hidden flex items-center space-x-4">
                    <button id="lang-toggle-mobile" class="font-heading font-bold text-[#D97757] px-2 py-1 border-2 border-[#D97757] rounded-lg text-sm">EN</button>
                    <button id="mobile-menu-btn" class="text-[#2C4A3B] focus:outline-none text-3xl">&#9776;</button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-[#E5E0D8]">
            <div class="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
                <a href="#about" class="mobile-link block px-3 py-2.5 text-base font-medium text-[#4A4A4A] hover:text-[#D97757] w-full text-center"><span class="lang-id">Tentang</span><span class="lang-en">About</span></a>
                <a href="#history" class="mobile-link block px-3 py-2.5 text-base font-medium text-[#4A4A4A] hover:text-[#D97757] w-full text-center"><span class="lang-id">Riwayat</span><span class="lang-en">History</span></a>
                <a href="#event-info" class="mobile-link block px-3 py-2.5 text-base font-medium text-[#4A4A4A] hover:text-[#D97757] w-full text-center"><span class="lang-id">Info Acara</span><span class="lang-en">Event Info</span></a>
                <a href="#faq" class="mobile-link block px-3 py-2.5 text-base font-medium text-[#4A4A4A] hover:text-[#D97757] w-full text-center">FAQ</a>
                <a href="#pricing" class="mobile-link block px-3 py-2.5 text-base font-medium text-[#4A4A4A] hover:text-[#D97757] w-full text-center"><span class="lang-id">Biaya</span><span class="lang-en">Pricing</span></a>
                <a href="#register" class="mobile-link block mt-3 py-3 text-base font-bold text-white btn-gradient rounded-full w-3/4 text-center"><span class="lang-id">Daftar Sekarang</span><span class="lang-en">Register Now</span></a>
            </div>
        </div>
    </nav>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/6287814050607" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="group-hover:animate-pulse" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
    </a>
    `;
}
