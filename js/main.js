document.addEventListener('DOMContentLoaded', () => {
    // Render all components into the app container
    document.getElementById('app').innerHTML = [
        renderNavbar(),
        renderHero(),
        renderAbout(),
        renderHistory(),
        renderTestimonies(),
        renderEventInfo(),
        renderFaq(),
        renderPricing(),
        renderRegister(),
        renderFooter(),
    ].join('') + `
    <!-- Image lightbox -->
    <div id="img-lightbox" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.88)">
        <button id="lightbox-close" class="absolute top-4 right-6 text-white/60 hover:text-white text-5xl leading-none z-10 cursor-pointer">&times;</button>
        <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl">
    </div>`;

    // Initialize interactive modules
    initNav();
    initLanguage();
    initSlider();
    initCountdown();
    initAccordion();
    initForm();
    initTestimonialScroll();
    initMarquees();
    convertHeicImages();
});

// GSAP animations run on window.load (after all resources are ready)
window.addEventListener('load', initAnimations);
