function initAccordion() {
    document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            if (!isActive) item.classList.add('active');
        });
    });
}
