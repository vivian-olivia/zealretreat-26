function renderCommittee() {
    const members = [
        { seed: 'Andi',   name: 'Andi Wijaya',  roleId: 'Ketua',          roleEn: 'Chairperson',      descId: 'Memimpin dengan visi dan semangat.',         descEn: 'Leading with vision and passion.' },
        { seed: 'Budi',   name: 'Budi Santoso', roleId: 'Sekretaris',     roleEn: 'Secretary',        descId: 'Menjaga segalanya tetap teratur.',           descEn: 'Keeping everything organized.' },
        { seed: 'Citra',  name: 'Citra Lestari',roleId: 'Bendahara',      roleEn: 'Treasurer',        descId: 'Mengelola sumber daya dengan bijak.',        descEn: 'Managing our resources wisely.' },
        { seed: 'Dewi',   name: 'Dewi Putri',   roleId: 'Manajer Program',roleEn: 'Program Manager',  descId: 'Merancang pengalaman penuh makna.',          descEn: 'Crafting meaningful experiences.' },
        { seed: 'Eko',    name: 'Eko Prasetyo', roleId: 'Logistik',       roleEn: 'Logistics',        descId: 'Memastikan semuanya pada tempatnya.',        descEn: 'Ensuring everything is in place.' },
        { seed: 'Fani',   name: 'Fani Amalia',  roleId: 'Humas',          roleEn: 'Public Relations', descId: 'Menghubungkan kita dengan komunitas.',       descEn: 'Connecting us with the community.' },
    ];

    const cards = members.map(m => `
        <div class="gsap-stagger-item bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl group overflow-hidden">
            <div class="h-1.5 w-full bg-gradient-to-r from-[#D97757] to-[#F4A261]"></div>
            <div class="p-6 flex flex-col items-center w-full">
                <div class="w-24 h-24 rounded-2xl bg-gray-100 mb-5 overflow-hidden ring-4 ring-[#FAF8F5] group-hover:ring-[#F4A261]/30 transition-all">
                    <img src="https://api.dicebear.com/7.x/avataaars/png?seed=${m.seed}&backgroundColor=e2e8f0" alt="${m.name}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                </div>
                <h3 class="font-heading text-lg font-bold text-[#2C4A3B] mb-1">${m.name}</h3>
                <span class="inline-block px-3 py-1 rounded-full btn-gradient text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    <span class="lang-id">${m.roleId}</span><span class="lang-en">${m.roleEn}</span>
                </span>
                <p class="text-[#666666] text-sm leading-relaxed"><span class="lang-id">${m.descId}</span><span class="lang-en">${m.descEn}</span></p>
            </div>
        </div>
    `).join('');

    return `
    <!-- Committee Section -->
    <section id="committee" class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 gsap-fade-up">
                <h2 class="font-heading text-4xl md:text-5xl font-extrabold mb-4 gradient-text-green">
                    <span class="lang-id">Panitia Di Balik Layar</span><span class="lang-en">The Committee Behind</span>
                </h2>
                <p class="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
                    <span class="lang-id">Tim berdedikasi yang bekerja di balik layar untuk mewujudkan retreat ini.</span>
                    <span class="lang-en">The dedicated team working behind the scenes to make this retreat a reality.</span>
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-container max-w-5xl mx-auto">
                ${cards}
            </div>
        </div>
    </section>
    `;
}
