function initSlider() {
    const track = document.getElementById('slider-track');
    if (!track) return;
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    const originalSlides = Array.from(document.querySelectorAll('#slider-track img'));
    const slideCount = originalSlides.length;

    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[slideCount - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, originalSlides[0]);

    let currentSlide = 1;
    let isTransitioning = false;
    let slideInterval;

    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    function updateSlider(animate) {
        track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach(dot => {
            dot.classList.remove('bg-white', 'active');
            dot.classList.add('bg-white/50');
        });

        let activeIndex = currentSlide - 1;
        if (activeIndex === slideCount) activeIndex = 0;
        if (activeIndex === -1) activeIndex = slideCount - 1;

        if (dots[activeIndex]) {
            dots[activeIndex].classList.remove('bg-white/50');
            dots[activeIndex].classList.add('bg-white', 'active');
        }
    }

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentSlide === 0) {
            currentSlide = slideCount;
            updateSlider(false);
        } else if (currentSlide === slideCount + 1) {
            currentSlide = 1;
            updateSlider(false);
        }
    });

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentSlide++;
        updateSlider(true);
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentSlide--;
        updateSlider(true);
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    nextBtn.addEventListener('click', () => { nextSlide(); resetSlideInterval(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetSlideInterval(); });

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            if (isTransitioning) return;
            currentSlide = parseInt(e.target.getAttribute('data-index')) + 1;
            updateSlider(true);
            resetSlideInterval();
        });
    });

    startSlideInterval();
}
