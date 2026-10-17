/**
 * Profile Page Interaction Controller - Bharat Special Edition
 * Features:
 * 1. Photo upload replaces image with authentic Indian Sarkari memes (Passport photo, Aadhaar cow, Auto meter, Samosa plate)
 * 2. Save Profile triggers loud Indian Pressure Cooker Whistle + Chai Break alert
 * 3. Delete Data triggers Ekta Kapoor Indian Soap Opera triple zoom + DHOOM DHOOM DHOOM gong + WhatsApp colony alert
 * 4. 12-Digit Aadhaar Precision Range Slider
 * 5. IRCTC Tatkal Inactivity Timeout Penalty
 * 6. Rickshaw Horn Sound Button
 * 7. Screen Eyelash drift trick
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const screenHair = document.getElementById('screen-hair');
  const aadhaarSlider = document.getElementById('aadhaar-slider');
  const aadhaarDisplay = document.getElementById('aadhaar-display');
  const aadhaarDecBtn = document.getElementById('aadhaar-dec');
  const aadhaarIncBtn = document.getElementById('aadhaar-inc');
  const saveBtn = document.getElementById('btn-save');
  const deleteBtn = document.getElementById('btn-delete');
  const swapArena = document.getElementById('swap-arena');
  const countdownEl = document.getElementById('session-countdown');
  const extendBtn = document.getElementById('extend-session-btn');
  const avatarBox = document.getElementById('avatar-box');
  const avatarUpload = document.getElementById('avatar-upload');
  const avatarContent = document.getElementById('avatar-content');
  const avatarBadge = document.getElementById('avatar-badge');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeDisplay = document.getElementById('volume-display');
  const honkHornBtn = document.getElementById('btn-honk-horn');
  const rageToast = document.getElementById('rage-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-msg');
  const serialFlashOverlay = document.getElementById('serial-flash-overlay');
  const mainContainer = document.getElementById('main-container');
  const profileCard = document.getElementById('profile-card');

  // =========================================================
  // 1. THE FAKE SCREEN HAIR / EYELASH
  // =========================================================
  if (screenHair) {
    let hairBaseX = window.innerWidth * 0.62;
    let hairBaseY = window.innerHeight * 0.36;

    window.addEventListener('resize', () => {
      hairBaseX = window.innerWidth * 0.62;
      hairBaseY = window.innerHeight * 0.36;
    });

    window.addEventListener('mousemove', (e) => {
      const dist = Math.hypot(e.clientX - hairBaseX, e.clientY - hairBaseY);
      if (dist < 45) {
        const angle = Math.atan2(hairBaseY - e.clientY, hairBaseX - e.clientX);
        const shiftX = Math.cos(angle) * 8;
        const shiftY = Math.sin(angle) * 8;
        screenHair.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${shiftX * 2}deg)`;
      } else {
        screenHair.style.transform = 'translate(0, 0)';
      }
    });
  }

  // =========================================================
  // 2. INDIA REFERENCE: PROFILE PHOTO REPLACEMENT TROLL
  // Replaces whatever photo is selected with classic Indian memes
  // =========================================================
  const indianAvatars = [
    // 1. Classic Sarkari Passport Photo
    {
      badge: "REJECTED",
      svg: `
        <svg class="avatar-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#0284c7" />
          <circle cx="50" cy="40" r="22" fill="#d4a373" />
          <path d="M 28,34 Q 50,14 72,34 Q 68,20 50,20 Q 32,20 28,34" fill="#1e293b" />
          <rect x="36" y="36" width="11" height="9" rx="2" fill="none" stroke="#000000" stroke-width="1.8" />
          <rect x="53" y="36" width="11" height="9" rx="2" fill="none" stroke="#000000" stroke-width="1.8" />
          <line x1="47" y1="40" x2="53" y2="40" stroke="#000000" stroke-width="1.8" />
          <circle cx="41.5" cy="40.5" r="2" fill="#000000" />
          <circle cx="58.5" cy="40.5" r="2" fill="#000000" />
          <path d="M 40,49 Q 50,47 60,49 Q 50,54 40,49" fill="#1e293b" />
          <line x1="44" y1="55" x2="56" y2="55" stroke="#78350f" stroke-width="1.5" />
          <path d="M 22,100 L 28,68 Q 50,62 72,68 L 78,100 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        </svg>
      `,
      toast: "Aadhaar Biometrics: Photo rejected! Subject was looking directly into the camera."
    },
    // 2. Auto-Rickshaw Meter
    {
      badge: "₹9,999.00",
      svg: `
        <svg class="avatar-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#1e293b" />
          <rect x="10" y="10" width="80" height="80" rx="8" fill="#facc15" stroke="#000" stroke-width="3" />
          <rect x="20" y="24" width="60" height="32" rx="4" fill="#000" />
          <text x="50" y="46" font-family="monospace" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">₹9999</text>
          <text x="50" y="74" font-family="sans-serif" font-size="8" font-weight="bold" fill="#000" text-anchor="middle">METER KHARAB HAI</text>
        </svg>
      `,
      toast: "Auto-Rickshaw Meter Attached: Driver said 'Bhaiya wahan ka double lagega'."
    },
    // 3. Official Aadhaar Gomata
    {
      badge: "AADHAAR LINKED",
      svg: `
        <svg class="avatar-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#fef3c7" />
          <!-- Cow face -->
          <ellipse cx="50" cy="52" rx="26" ry="22" fill="#ffffff" stroke="#d97706" stroke-width="2" />
          <!-- Horns -->
          <path d="M 32,38 C 24,18 36,12 40,32" fill="#78350f" />
          <path d="M 68,38 C 76,18 64,12 60,32" fill="#78350f" />
          <!-- Eyes -->
          <circle cx="40" cy="48" r="3.5" fill="#1e293b" />
          <circle cx="60" cy="48" r="3.5" fill="#1e293b" />
          <!-- Snout with flower garland -->
          <ellipse cx="50" cy="62" rx="14" ry="9" fill="#fbcfe8" />
          <circle cx="45" cy="62" r="2" fill="#78350f" />
          <circle cx="55" cy="62" r="2" fill="#78350f" />
          <!-- Marigold Garland -->
          <path d="M 30,72 Q 50,86 70,72" stroke="#ea580c" stroke-width="4" stroke-dasharray="4,2" fill="none" />
        </svg>
      `,
      toast: "Aadhaar Card Matched: Profile assigned to 'Gomata Devi' (Govt Certified)."
    },
    // 4. Hot Samosa & Jalebi Plate
    {
      badge: "CANTEEN TOKEN #42",
      svg: `
        <svg class="avatar-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#fee2e2" />
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <!-- Samosa -->
          <polygon points="50,22 28,62 72,62" fill="#d97706" stroke="#b45309" stroke-width="2" />
          <!-- Chutney blob -->
          <circle cx="34" cy="74" r="7" fill="#15803d" />
          <circle cx="66" cy="74" r="7" fill="#b91c1c" />
        </svg>
      `,
      toast: "Govt Canteen Verified: Profile photo replaced with complimentary Samosa-Chutney."
    }
  ];

  let avatarIndex = 0;

  function cycleIndianAvatar() {
    avatarIndex = (avatarIndex + 1) % indianAvatars.length;
    const current = indianAvatars[avatarIndex];
    avatarContent.innerHTML = current.svg;
    avatarBadge.textContent = current.badge;
    if (window.soundEngine) window.soundEngine.playBoing();
    showToast("Aadhaar Biometric Engine", current.toast);
  }

  if (avatarBox && avatarUpload) {
    avatarBox.addEventListener('click', () => {
      avatarUpload.click();
    });

    avatarUpload.addEventListener('change', () => {
      // Ignore user's file and cycle to Indian meme avatar!
      cycleIndianAvatar();
    });
  }

  // =========================================================
  // 3. 12-DIGIT AADHAAR NUMBER RANGE SLIDER
  // =========================================================
  function formatAadhaar(numStr) {
    const s = String(numStr).padStart(12, '0');
    return `${s.slice(0, 4)} ${s.slice(4, 8)} ${s.slice(8, 12)}`;
  }

  if (aadhaarSlider && aadhaarDisplay) {
    aadhaarSlider.addEventListener('input', () => {
      aadhaarDisplay.textContent = formatAadhaar(aadhaarSlider.value);
    });

    if (aadhaarDecBtn) {
      aadhaarDecBtn.addEventListener('click', () => {
        let val = BigInt(aadhaarSlider.value);
        if (val > 100000000000n) {
          aadhaarSlider.value = String(val - 1n);
          aadhaarDisplay.textContent = formatAadhaar(aadhaarSlider.value);
          if (window.soundEngine) window.soundEngine.playGlitch();
        }
      });
    }

    if (aadhaarIncBtn) {
      aadhaarIncBtn.addEventListener('click', () => {
        let val = BigInt(aadhaarSlider.value);
        if (val < 999999999999n) {
          aadhaarSlider.value = String(val + 1n);
          aadhaarDisplay.textContent = formatAadhaar(aadhaarSlider.value);
          if (window.soundEngine) window.soundEngine.playGlitch();
        }
      });
    }
  }

  // =========================================================
  // 4. THE INFAMOUS "SAVE" VS "DELETE" BUTTON SWAP
  // =========================================================
  let isSwapped = false;
  let swapCooldown = false;

  function handleButtonSwap(e) {
    if (swapCooldown) return;
    const saveRect = saveBtn.getBoundingClientRect();
    const saveCenterX = saveRect.left + saveRect.width / 2;
    const saveCenterY = saveRect.top + saveRect.height / 2;
    const distToSave = Math.hypot(e.clientX - saveCenterX, e.clientY - saveCenterY);

    if (distToSave < 65) {
      swapCooldown = true;
      isSwapped = !isSwapped;
      if (window.soundEngine) window.soundEngine.playSwap();

      if (isSwapped) {
        saveBtn.style.order = '2';
        deleteBtn.style.order = '1';
        saveBtn.style.transform = 'scale(0.96)';
        deleteBtn.style.transform = 'scale(1.04)';
      } else {
        saveBtn.style.order = '1';
        deleteBtn.style.order = '2';
        saveBtn.style.transform = 'scale(1)';
        deleteBtn.style.transform = 'scale(1)';
      }

      setTimeout(() => {
        swapCooldown = false;
      }, 300);
    }
  }

  window.addEventListener('mousemove', handleButtonSwap);

  // =========================================================
  // 5. SAVE PROFILE: PRESSURE COOKER WHISTLE + CHAI BREAK ALERT
  // =========================================================
  saveBtn.addEventListener('click', () => {
    // Play loud Indian Pressure Cooker Whistle
    if (window.soundEngine) window.soundEngine.playPressureCooker();

    // Shake card
    profileCard.style.animation = 'input-shake 0.4s ease 3';
    setTimeout(() => { profileCard.style.animation = ''; }, 1200);

    alert(
      "🍲 SERVER STATUS: CHAI-SAMOSA BREAK (1:00 PM to 4:00 PM)!\n\n" +
      "Online profile updating is currently suspended across all zones.\n\n" +
      "Please carry 3 physical photocopies (attested by a Gazetted Officer) " +
      "to Window #4 in Pune branch on Tuesday morning between 10:00 AM and 10:15 AM."
    );
  });

  // =========================================================
  // 6. DELETE DATA: EKTA KAPOOR DRAMATIC SOAP OPERA DHOOM GONG
  // =========================================================
  deleteBtn.addEventListener('click', () => {
    // 1. Play dramatic orchestral triple crash DHOOM DHOOM DHOOM
    if (window.soundEngine) window.soundEngine.playSerialDramaticGong();

    // 2. Ekta Kapoor 3-step dramatic screen zoom
    mainContainer.classList.add('serial-drama-active');

    // 3. Triple color screen flash overlay (Red -> Blue -> Yellow)
    serialFlashOverlay.classList.add('active');

    setTimeout(() => {
      mainContainer.classList.remove('serial-drama-active');
      serialFlashOverlay.classList.remove('active');

      alert(
        "😱 HAYE BHAGWAN! LOG KYA KAHENGE?!\n\n" +
        "Are you out of your mind?! Sharma Ji's son has already saved his profile 4 times and scored 99.8 percentile in CAT!\n\n" +
        "Account deletion has been BLOCKED. An automated alert has been broadcasted to your colony WhatsApp group for community inspection."
      );
    }, 1300);
  });

  // =========================================================
  // 7. IRCTC TATKAL INACTIVITY TIMEOUT COUNTDOWN
  // =========================================================
  let secondsLeft = 9;
  let sessionTimer = setInterval(() => {
    secondsLeft--;
    if (secondsLeft >= 0) {
      countdownEl.textContent = `00:0${secondsLeft}`;
    } else {
      countdownEl.textContent = `-00:0${Math.abs(secondsLeft)}`;
      countdownEl.style.color = '#dc2626';
    }
  }, 1000);

  if (extendBtn) {
    extendBtn.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playAlarm();
      secondsLeft = 2; // Penalty drops time to 2 seconds!
      countdownEl.textContent = `00:02`;
      showToast("IRCTC Tatkal Penalty", "Position in queue: #4,891,029. Payment gateway timed out!");
    });
  }

  // =========================================================
  // 8. AUTO RICKSHAW HORN TEST BUTTON
  // =========================================================
  if (honkHornBtn) {
    honkHornBtn.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playRickshawHorn();
      showToast("Silk Board Flyover", "PAAAA-POM! Rickshaw driver says 'U-turn nahi milega Bhaiya'.");
    });
  }

  // =========================================================
  // 9. VOLUME GRAVITY SLIDER
  // =========================================================
  if (volumeSlider && volumeDisplay) {
    let gravityInterval = null;

    volumeSlider.addEventListener('input', () => {
      volumeDisplay.textContent = `${volumeSlider.value}%`;
      clearInterval(gravityInterval);
    });

    const triggerGravity = () => {
      clearInterval(gravityInterval);
      gravityInterval = setInterval(() => {
        let currentVal = parseInt(volumeSlider.value, 10);
        if (currentVal < 100) {
          currentVal += 5;
          if (currentVal > 100) currentVal = 100;
          volumeSlider.value = currentVal;
          volumeDisplay.textContent = `${currentVal}%`;
        } else {
          clearInterval(gravityInterval);
          if (window.soundEngine) window.soundEngine.playDing();
        }
      }, 30);
    };

    volumeSlider.addEventListener('mouseup', triggerGravity);
    volumeSlider.addEventListener('touchend', triggerGravity);
  }

  // =========================================================
  // 10. SYSTEM TOASTS
  // =========================================================
  function showToast(title, message) {
    if (!rageToast) return;
    toastTitle.textContent = title;
    toastMsg.textContent = message;
    rageToast.classList.add('show');

    setTimeout(() => {
      rageToast.classList.remove('show');
    }, 4500);
  }

  // Periodic random Indian tech toasts
  setTimeout(() => {
    showToast("Aadhaar Notification", "Your profile photo has been forwarded to Municipal Corporation for inspection.");
  }, 3500);

  setTimeout(() => {
    showToast("Silk Board Traffic", "Bangalore GPS Alert: You have moved 2 meters in the last 45 minutes.");
  }, 12000);
});
