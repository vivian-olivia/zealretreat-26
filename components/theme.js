function renderTheme() {
    return `
    <!-- Theme Highlight Section -->
    <section class="py-20 bg-[#2C4A3B] text-[#FAF8F5] overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full opacity-5" style="background-image: radial-gradient(circle, #F4A261 1px, transparent 1px); background-size: 32px 32px;"></div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center gsap-fade-up gsap-hide">
            <span class="section-pill text-[#F4A261] mb-6 inline-flex">&#10022; <span class="lang-id">Tema Tahun Ini</span><span class="lang-en">This Year's Theme</span></span>
            <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-8 mt-4 gradient-text">Home</h2>
            <div class="relative max-w-3xl mx-auto">
                <div class="text-[#F4A261]/20 text-[8rem] font-serif leading-none absolute -top-8 -left-4 select-none">&ldquo;</div>
                <blockquote class="text-xl md:text-2xl font-light italic mb-6 leading-relaxed relative z-10 text-[#FAF8F5]/90 px-8">
                    <span class="lang-id">Demikianlah kamu bukan lagi orang asing dan pendatang, melainkan kawan sewarga dari orang-orang kudus dan anggota-anggota keluarga Allah</span>
                    <span class="lang-en">Consequently, you are no longer foreigners and strangers, but fellow citizens with God's people and also members of his household</span>
                </blockquote>
            </div>
            <p class="text-sm text-[#F4A261] font-bold uppercase tracking-widest mb-8">&mdash; <span class="lang-id">Efesus</span><span class="lang-en">Ephesians</span> 2:19 &mdash;</p>
            <div class="w-12 h-0.5 bg-[#F4A261]/40 mx-auto mb-8 rounded-full"></div>
            <p class="text-base max-w-2xl mx-auto text-[#E5E0D8]/80 leading-relaxed">
                <span class="lang-id">Retreat tahun ini mengundang kita kembali ke inti komunitas kita: Keluarga. "Rumah" adalah tempat kita berada, dikenal, dan di mana Kristus menyatukan kita dalam kasih-Nya.</span>
                <span class="lang-en">This year's retreat invites us back to the core of our community: Family. "Home" is where we belong, where we are known, and where Christ connects us together in His love.</span>
            </p>
        </div>
    </section>
    `;
}
