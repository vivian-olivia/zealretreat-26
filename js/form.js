﻿// Paste your deployed Google Apps Script Web App URL here.
// See scripts/google-apps-script.js for setup instructions.
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDKnOc_xewwZi7dZfbGwSOgzammSCdTu_nsQDzzHepCPmk_-5aiu2ATu-QPQNGe2TS/exec';
const IMGBB_API_KEY    = 'd7832f64afefce6aae08ec74e9a1cee5'; // paste your ImgBB API key here — imgbb.com/account → API

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

    function attachLivePhoneValidation(inputId, hintId) {
        const input = document.getElementById(inputId);
        const hint  = document.getElementById(hintId);
        if (!input || !hint) return;
        input.addEventListener('input', () => {
            const val = input.value;
            const invalid = val.length > 0 && !val.startsWith('62');
            input.classList.toggle('border-red-500', invalid);
            input.classList.toggle('ring-2',          invalid);
            input.classList.toggle('ring-red-500',    invalid);
            input.classList.toggle('border-gray-300', !invalid);
            hint.classList.toggle('text-red-500',  invalid);
            hint.classList.toggle('text-[#666666]', !invalid);
        });
    }

    attachLivePhoneValidation('phone', 'phone-hint');
    attachLivePhoneValidation('emergContactPhone', 'emerg-phone-hint');

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
        };

        // Upload payment proof to ImgBB, get a public URL
        let imageUrl = '';
        const proofFile = proofInput ? proofInput.files[0] : null;
        if (proofFile && IMGBB_API_KEY) {
            console.log('[form] uploading image to ImgBB, file:', proofFile.name, proofFile.size, 'bytes');
            try {
                const isHeic = proofFile.type === 'image/heic' || proofFile.type === 'image/heif'
                    || proofFile.name.toLowerCase().endsWith('.heic')
                    || proofFile.name.toLowerCase().endsWith('.heif');
                const blob = isHeic
                    ? await heic2any({ blob: proofFile, toType: 'image/jpeg', quality: 0.85 })
                    : proofFile;
                const base64 = await new Promise(resolve => {
                    const r = new FileReader();
                    r.onload = ev => resolve(ev.target.result.split(',')[1]);
                    r.readAsDataURL(blob);
                });
                const fd = new FormData();
                fd.append('key', IMGBB_API_KEY);
                fd.append('image', base64);
                const res  = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body: fd });
                const json = await res.json();
                console.log('[form] ImgBB response:', JSON.stringify(json));
                imageUrl = json.data?.url || '';
                console.log('[form] imageUrl:', imageUrl || '(empty — upload may have failed)');
            } catch (err) {
                console.error('[form] ImgBB upload error:', err);
            }
        } else if (proofFile && !IMGBB_API_KEY) {
            console.warn('[form] IMGBB_API_KEY is empty — image not uploaded');
        } else {
            console.log('[form] no proof file selected');
        }

        // Send all form data + image URL to Apps Script via GET (POST is unreliable with Apps Script redirects)
        if (APPS_SCRIPT_URL) {
            const payload = JSON.stringify(Object.assign({}, formData, { imageUrl }));
            console.log('[form] sending to Apps Script, payload:', payload);
            const qs = new URLSearchParams({ payload });
            fetch(APPS_SCRIPT_URL + '?' + qs.toString(), { mode: 'no-cors' }).catch(() => {});
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
