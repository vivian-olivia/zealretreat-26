function initLanguage() {
    const langDesktop = document.getElementById('lang-toggle-desktop');
    const langMobile = document.getElementById('lang-toggle-mobile');
    let currentLang = 'en';

    function applyPlaceholders() {
        document.querySelectorAll('[data-placeholder-id]').forEach(el => {
            el.placeholder = currentLang === 'id'
                ? el.getAttribute('data-placeholder-id')
                : el.getAttribute('data-placeholder-en');
        });
    }

    function applyOptionLabels() {
        document.querySelectorAll('option[data-label-id]').forEach(el => {
            el.textContent = currentLang === 'id'
                ? el.getAttribute('data-label-id')
                : el.getAttribute('data-label-en');
        });
    }

    function toggleLanguage() {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        document.body.setAttribute('data-lang', currentLang);

        const btnText = currentLang === 'id' ? 'EN' : 'ID';
        if (langDesktop) langDesktop.textContent = btnText;
        if (langMobile) langMobile.textContent = btnText;

        applyPlaceholders();
        applyOptionLabels();
        setTimeout(() => ScrollTrigger.refresh(), 100);
    }

    if (langDesktop) langDesktop.addEventListener('click', toggleLanguage);
    if (langMobile) langMobile.addEventListener('click', toggleLanguage);

    // Apply Indonesian labels on first load
    applyPlaceholders();
    applyOptionLabels();
}
