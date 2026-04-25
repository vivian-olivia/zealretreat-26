function renderHero() {
    return `
    <!-- Hero Section -->
    <section id="home" class="relative pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden flex flex-col justify-center bg-cover bg-center bg-no-repeat min-h-[90vh]" style="background-image: url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#1A2E24]/85 via-[#1A2E24]/80 to-[#0d1a14]/90"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center gsap-hero-element gsap-hide">
            <div class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#F4A261] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-[#F4A261] animate-pulse"></span>
                Zeal Retreat 2026
            </div>
            <h1 class="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#FAF8F5] tracking-tighter mb-4 leading-none">
                HOME
            </h1>
            <p class="mt-4 max-w-xl text-base text-[#E5E0D8]/90 mx-auto mb-8 leading-relaxed">
                <span class="lang-id">Jauhkan sejenak dari kebisingan. Sambung kembali dengan tujuanmu. Bergabunglah dengan komunitas kami untuk pembaruan rohani yang mendalam.</span>
                <span class="lang-en">Disconnect from the noise. Reconnect with your purpose. Join our community for a weekend of deep spiritual renewal.</span>
            </p>

            <!-- Countdown Timer -->
            <div class="flex justify-center gap-3 sm:gap-4 mb-8">
                <div class="flex flex-col items-center glass rounded-2xl p-3 sm:p-4 min-w-[72px] sm:min-w-[88px] shadow-lg hover:bg-white/20 transition-all">
                    <span id="days" class="text-3xl sm:text-4xl font-bold text-white font-heading">00</span>
                    <span class="text-[10px] sm:text-xs text-[#F4A261] uppercase tracking-widest mt-1 font-semibold"><span class="lang-id">Hari</span><span class="lang-en">Days</span></span>
                </div>
                <div class="flex flex-col items-center glass rounded-2xl p-3 sm:p-4 min-w-[72px] sm:min-w-[88px] shadow-lg hover:bg-white/20 transition-all">
                    <span id="hours" class="text-3xl sm:text-4xl font-bold text-white font-heading">00</span>
                    <span class="text-[10px] sm:text-xs text-[#F4A261] uppercase tracking-widest mt-1 font-semibold"><span class="lang-id">Jam</span><span class="lang-en">Hours</span></span>
                </div>
                <div class="flex flex-col items-center glass rounded-2xl p-3 sm:p-4 min-w-[72px] sm:min-w-[88px] shadow-lg hover:bg-white/20 transition-all">
                    <span id="minutes" class="text-3xl sm:text-4xl font-bold text-white font-heading">00</span>
                    <span class="text-[10px] sm:text-xs text-[#F4A261] uppercase tracking-widest mt-1 font-semibold"><span class="lang-id">Menit</span><span class="lang-en">Mins</span></span>
                </div>
                <div class="flex flex-col items-center glass rounded-2xl p-3 sm:p-4 min-w-[72px] sm:min-w-[88px] shadow-lg hover:bg-white/20 transition-all">
                    <span id="seconds" class="text-3xl sm:text-4xl font-bold text-white font-heading">00</span>
                    <span class="text-[10px] sm:text-xs text-[#F4A261] uppercase tracking-widest mt-1 font-semibold"><span class="lang-id">Detik</span><span class="lang-en">Secs</span></span>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mb-8 text-[#E5E0D8]/80 text-sm font-medium">
                <span class="flex items-center gap-2">&#128197; <span class="lang-id">Jum, 3 Jul &ndash; Min, 5 Jul 2026</span><span class="lang-en">Fri, July 3 &ndash; Sun, July 5, 2026</span></span>
                <span class="hidden sm:block w-1 h-1 rounded-full bg-[#E5E0D8]/40"></span>
                <span class="flex items-center gap-2">&#128205; Bogor Green Forest</span>
            </div>
            <a href="#register" class="inline-block btn-gradient text-white px-10 py-4 rounded-full font-bold text-base tracking-wide shadow-xl">
                <span class="lang-id">Amankan Tempatmu</span><span class="lang-en">Secure Your Spot</span> &rarr;
            </a>
        </div>
    </section>
    `;
}
