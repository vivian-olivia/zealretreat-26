// Paste your deployed Google Apps Script Web App URL here.
// See scripts/google-apps-script.js for setup instructions.
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDKnOc_xewwZi7dZfbGwSOgzammSCdTu_nsQDzzHepCPmk_-5aiu2ATu-QPQNGe2TS/exec';

function initForm() {
    const form           = document.getElementById('registration-form');
    const submitBtn      = document.getElementById('submit-btn');
    const successModal   = document.getElementById('success-modal');
    const modalCard      = document.getElementById('modal-card');
    const modalClose     = document.getElementById('modal-close');
    const modalBackdrop  = document.getElementById('modal-backdrop');
    const copyBtn  = document.getElementById('copy-account-btn');
    const ICON_COPY  = `<svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg>`;
    const ICON_CHECK = `<svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>`;

    function closeModal() {
        gsap.to(modalCard, {
            opacity: 0, y: 20, scale: 0.97, duration: 0.25, ease: 'power2.in',
            onComplete: () => {
                successModal.classList.add('hidden');
                gsap.set(modalCard, { clearProps: 'all' });
            }
        });
    }

    if (modalClose)    modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Payment proof preview with HEIC support
    const proofInput = document.getElementById('paymentProof');
    const previewWrap = document.getElementById('payment-preview-wrap');
    const previewImg = document.getElementById('payment-preview');
    const previewLoader = document.getElementById('payment-preview-loader');

    if (proofInput) {
        proofInput.addEventListener('change', async () => {
            const file = proofInput.files[0];
            if (!file) { previewWrap.classList.add('hidden'); return; }

            previewWrap.classList.remove('hidden');
            previewImg.src = '';

            const isHeic = file.type === 'image/heic' || file.type === 'image/heif'
                || file.name.toLowerCase().endsWith('.heic')
                || file.name.toLowerCase().endsWith('.heif');

            if (isHeic) {
                previewLoader.classList.remove('hidden');
                try {
                    const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.85 });
                    previewImg.src = URL.createObjectURL(converted);
                } catch {
                    previewImg.src = '';
                    previewWrap.classList.add('hidden');
                } finally {
                    previewLoader.classList.add('hidden');
                }
            } else {
                const reader = new FileReader();
                reader.onload = e => { previewImg.src = e.target.result; };
                reader.readAsDataURL(file);
            }
        });
    }

    // Payment type dropdown — show amount to pay
    const paymentTypeSelect = document.getElementById('paymentType');
    const amountDisplay     = document.getElementById('payment-amount-display');
    const amountValue       = document.getElementById('payment-amount-value');
    const amountNote        = document.getElementById('payment-amount-note');

    if (paymentTypeSelect) {
        paymentTypeSelect.addEventListener('change', () => {
            const isId = document.body.getAttribute('data-lang') === 'id';
            const val  = paymentTypeSelect.value;
            if (val === 'full') {
                amountValue.textContent = 'Rp 500.000';
                amountNote.textContent  = '';
            } else if (val === 'dp') {
                amountValue.textContent = 'Rp 250.000';
                amountNote.textContent  = '';
            }
            amountDisplay.classList.remove('hidden');
        });
    }

    // Copy bank account number
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('6050525820').then(() => {
                copyBtn.innerHTML = ICON_CHECK;
                copyBtn.classList.add('bg-green-500', 'text-white');
                copyBtn.classList.remove('bg-[#E5E0D8]', 'text-[#2C4A3B]', 'hover:bg-[#D97757]');
                setTimeout(() => {
                    copyBtn.innerHTML = ICON_COPY;
                    copyBtn.classList.remove('bg-green-500', 'text-white');
                    copyBtn.classList.add('bg-[#E5E0D8]', 'text-[#2C4A3B]', 'hover:bg-[#D97757]');
                }, 2500);
            });
        });
    }

    function validatePhone(value) {
        return /^62[0-9]{8,13}$/.test(value);
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const isId = document.body.getAttribute('data-lang') === 'id';

        const phoneVal = document.getElementById('phone').value;
        const emergVal = document.getElementById('emergContactPhone').value;
        if (!validatePhone(phoneVal)) {
            alert(isId ? 'Nomor WhatsApp harus diawali dengan 62 (contoh: 6281234567890).' : 'WhatsApp number must start with 62 (e.g. 6281234567890).');
            document.getElementById('phone').focus();
            return;
        }
        if (!validatePhone(emergVal)) {
            alert(isId ? 'No. HP Darurat harus diawali dengan 62 (contoh: 6281234567890).' : 'Emergency phone must start with 62 (e.g. 6281234567890).');
            document.getElementById('emergContactPhone').focus();
            return;
        }

        submitBtn.innerHTML = isId ? 'Memproses...' : 'Processing...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70');

        const registrationId = Math.random().toString(36).substring(2, 10).toUpperCase();

        const formData = {
            fullName:          document.getElementById('fullName').value,
            phone:             document.getElementById('phone').value,
            university:        document.getElementById('uniName').value,
            status:            document.getElementById('status').value,
            transport:         document.getElementById('transport').value,
            emergencyName:     document.getElementById('emergContactName').value,
            emergencyRelation: document.getElementById('emergContactRelation').value,
            emergencyPhone:    document.getElementById('emergContactPhone').value,
            notes:             document.getElementById('notes').value,
            paymentType:       document.getElementById('paymentType').value,
            registrationId,
        };

        // Read payment proof as base64 for Drive upload
        let imageBase64 = '', imageMime = '', imageExt = '';
        const proofFile = proofInput ? proofInput.files[0] : null;
        if (proofFile) {
            const isHeic = proofFile.type === 'image/heic' || proofFile.type === 'image/heif'
                || proofFile.name.toLowerCase().endsWith('.heic')
                || proofFile.name.toLowerCase().endsWith('.heif');
            try {
                const blob = isHeic
                    ? await heic2any({ blob: proofFile, toType: 'image/jpeg', quality: 0.85 })
                    : proofFile;
                imageMime = isHeic ? 'image/jpeg' : (proofFile.type || 'image/jpeg');
                imageExt  = isHeic ? 'jpg' : proofFile.name.split('.').pop().toLowerCase();
                imageBase64 = await new Promise(resolve => {
                    const r = new FileReader();
                    r.onload = ev => resolve(ev.target.result.split(',')[1]);
                    r.readAsDataURL(blob);
                });
            } catch { /* file read failed — send without image */ }
        }

        // Send text data to Sheets via GET (works with existing deployed script)
        if (APPS_SCRIPT_URL) {
            const qs = new URLSearchParams({ payload: JSON.stringify(formData) });
            fetch(`${APPS_SCRIPT_URL}?${qs}`, { mode: 'no-cors' }).catch(() => {});
        }

        // Send image to Drive via POST — requires redeployed Apps Script with doPost
        if (APPS_SCRIPT_URL && imageBase64) {
            fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({ registrationId: formData.registrationId, fullName: formData.fullName, imageBase64, imageMime, imageExt }),
            }).catch(() => {});
        }

        // Small delay to show processing state
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Reset submit button
        submitBtn.innerHTML = `<span class="lang-id">Kirim Pendaftaran</span><span class="lang-en">Submit Registration</span>`;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-70');

        // Show modal
        successModal.classList.remove('hidden');
        gsap.fromTo(modalCard,
            { opacity: 0, y: 30, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }
        );

        form.reset();
        previewWrap.classList.add('hidden');
        previewImg.src = '';
        if (amountDisplay) amountDisplay.classList.add('hidden');
    });
}
