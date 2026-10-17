/**
 * Login Page Interaction Controller
 * Features:
 * 1. Username auto-reverse & chaotic alternating casing
 * 2. Password starts invisible, suddenly switches to visible with loud alert
 * 3. Runaway sign in/sign up button that flees cursor
 * 4. 5-second pitch black screen on catch before redirecting to profile.html
 */

document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const togglePassBtn = document.getElementById('toggle-password');
  const passwordBanner = document.getElementById('password-banner');
  const usernameNotice = document.getElementById('username-notice');
  const runawayBtn = document.getElementById('runaway-btn');
  const tauntBubble = document.getElementById('taunt-bubble');
  const blankOverlay = document.getElementById('blank-overlay');
  const rememberCheckbox = document.getElementById('remember-me');
  const forgotLink = document.getElementById('forgot-link');

  // Taunt phrases for runaway button
  const taunts = [
    "Too slow! 🐌",
    "Missed me! 💨",
    "Nice try! 🤡",
    "Almost had it! 🤏",
    "Keep chasing! 🏃‍♂️",
    "Over here! 👋",
    "Reflexes: 2/10 📉",
    "Skill issue! 💀",
    "Physics says no! ⚛️",
    "Catch me if you can! 🏎️"
  ];

  let escapeCount = 0;
  let hasRevealedPassword = false;
  let usernameDebounceTimer = null;
  let isManipulatingUsername = false;

  // =========================================================
  // 1. USERNAME REVERSE & CHAOS CASING
  // =========================================================
  function reverseAndChaoticCase(str) {
    if (!str) return '';
    return str
      .split('')
      .reverse()
      .map((char, index) => {
        // Alternating uppercase and lowercase
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join('');
  }

  let lastTransformedUsername = '';
  let typingLockTimer = null;
  let isWipingUsername = false;
  const usernameLockBanner = document.getElementById('username-lock-banner');

  function triggerUsernameLockAndPurge() {
    if (isWipingUsername || usernameInput.value.length === 0) return;
    isWipingUsername = true;
    clearTimeout(usernameDebounceTimer);

    // 1. Lock immediately
    usernameInput.disabled = true;
    usernameInput.classList.add('input-locked');
    if (usernameLockBanner) usernameLockBanner.classList.add('show');
    if (window.soundEngine) window.soundEngine.playLockPurge();

    // 2. Erase the text character-by-character rapidly
    const eraseInterval = setInterval(() => {
      const current = usernameInput.value;
      if (current.length > 0) {
        usernameInput.value = current.slice(0, -1);
      } else {
        clearInterval(eraseInterval);
        
        // 3. Keep locked for 1.2 seconds, then unlock again
        setTimeout(() => {
          usernameInput.classList.remove('input-locked');
          usernameInput.disabled = false;
          if (usernameLockBanner) usernameLockBanner.classList.remove('show');
          usernameInput.focus();

          usernameNotice.textContent = "⚠️ Buffer wiped due to keystroke latency. Try typing faster!";
          usernameNotice.classList.add('active');

          setTimeout(() => {
            usernameNotice.classList.remove('active');
          }, 3000);

          isWipingUsername = false;
          typingLockTimer = null;
          lastTransformedUsername = '';
        }, 1200);
      }
    }, 45);
  }

  function applyUsernameScramble() {
    const val = usernameInput.value;
    if (val.length >= 2 && val !== lastTransformedUsername && !isWipingUsername) {
      isManipulatingUsername = true;
      const transformed = reverseAndChaoticCase(val);
      usernameInput.value = transformed;
      lastTransformedUsername = transformed;

      // Play glitch sound
      if (window.soundEngine) window.soundEngine.playGlitch();

      // Show annoying pill
      usernameNotice.textContent = "✨ Auto-Scramble & Reversible Case-Inversion Applied!";
      usernameNotice.classList.add('active');

      setTimeout(() => {
        usernameNotice.classList.remove('active');
      }, 2400);

      isManipulatingUsername = false;
    }
  }

  usernameInput.addEventListener('input', () => {
    if (isManipulatingUsername || isWipingUsername) return;

    // Start the lock timer if not already running (locks after 2.5 seconds of typing)
    if (!typingLockTimer && usernameInput.value.length > 0) {
      typingLockTimer = setTimeout(() => {
        triggerUsernameLockAndPurge();
      }, 2600);
    }

    clearTimeout(usernameDebounceTimer);
    // Trigger after user pauses typing (after 450ms)
    usernameDebounceTimer = setTimeout(() => {
      applyUsernameScramble();
    }, 450);
  });

  usernameInput.addEventListener('blur', () => {
    clearTimeout(usernameDebounceTimer);
    applyUsernameScramble();
  });

  // =========================================================
  // 2. PASSWORD: START INVISIBLE -> SUDDENLY VISIBLE
  // =========================================================
  passwordInput.addEventListener('input', () => {
    const len = passwordInput.value.length;

    // When password reaches 4+ characters and hasn't been revealed yet:
    if (len >= 3 && !hasRevealedPassword) {
      setTimeout(() => {
        hasRevealedPassword = true;
        passwordInput.type = 'text';
        passwordInput.parentElement.parentElement.classList.add('password-exposed');
        passwordBanner.classList.add('show');

        // Play alarm sound
        if (window.soundEngine) window.soundEngine.playAlarm();

        // Update criteria list
        const criteria = document.getElementById('pass-criterion');
        if (criteria) {
          criteria.textContent = "⚠️ Password made visible for bystander verification";
          criteria.classList.add('bad');
        }
      }, 350);
    }
  });

  passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.length >= 1 && !hasRevealedPassword) {
      hasRevealedPassword = true;
      passwordInput.type = 'text';
      passwordInput.parentElement.parentElement.classList.add('password-exposed');
      passwordBanner.classList.add('show');
      if (window.soundEngine) window.soundEngine.playAlarm();
    }
  });

  // Toggle password visibility button troll
  if (togglePassBtn) {
    togglePassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.soundEngine) window.soundEngine.playDing();
      alert("🔒 Error 402: Password Masking is an Enterprise Premium feature ($499/mo). Please upgrade your tier.");
      // Temporarily mask for 0.4s then unmask again
      passwordInput.type = 'password';
      setTimeout(() => {
        passwordInput.type = 'text';
      }, 400);
    });
  }

  // =========================================================
  // 3. RUNAWAY SIGN IN / SIGN UP BUTTON
  // =========================================================
  let btnOffsetX = 0;
  let btnOffsetY = 0;

  function moveButtonAway(mouseX, mouseY) {
    const rect = runawayBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const diffX = mouseX - btnCenterX;
    const diffY = mouseY - btnCenterY;
    const distance = Math.hypot(diffX, diffY);

    const triggerRadius = 110; // Trigger distance in pixels

    if (distance < triggerRadius) {
      escapeCount++;

      // Direction away from mouse
      let angle = Math.atan2(diffY, diffX) + Math.PI; // Opposite direction
      // Add slight random deviation to make it erratic
      angle += (Math.random() - 0.5) * 0.6;

      const jumpDistance = 140 + Math.random() * 80;
      let newX = btnOffsetX + Math.cos(angle) * jumpDistance;
      let newY = btnOffsetY + Math.sin(angle) * jumpDistance;

      // Keep button reasonably on screen
      const screenPadding = 80;
      const proposedScreenX = btnCenterX + Math.cos(angle) * jumpDistance;
      const proposedScreenY = btnCenterY + Math.sin(angle) * jumpDistance;

      if (
        proposedScreenX < screenPadding ||
        proposedScreenX > window.innerWidth - screenPadding ||
        proposedScreenY < screenPadding ||
        proposedScreenY > window.innerHeight - screenPadding
      ) {
        // Teleport to opposite side
        newX = -btnOffsetX * 0.8 + (Math.random() - 0.5) * 60;
        newY = -btnOffsetY * 0.8 + (Math.random() - 0.5) * 60;
      }

      btnOffsetX = newX;
      btnOffsetY = newY;

      runawayBtn.style.transform = `translate(${btnOffsetX}px, ${btnOffsetY}px)`;

      // Taunt speech bubble
      tauntBubble.textContent = taunts[Math.floor(Math.random() * taunts.length)];
      tauntBubble.classList.add('visible');

      // Play boing sound
      if (window.soundEngine) window.soundEngine.playBoing();

      clearTimeout(window.tauntHideTimer);
      window.tauntHideTimer = setTimeout(() => {
        tauntBubble.classList.remove('visible');
      }, 1000);
    }
  }

  window.addEventListener('mousemove', (e) => {
    // Only run away if not currently transitioning
    if (!blankOverlay.classList.contains('active')) {
      moveButtonAway(e.clientX, e.clientY);
    }
  });

  // =========================================================
  // 4. CLICKING THE BUTTON -> 5-SECOND BLANK SCREEN -> PROFILE
  // =========================================================
  function executeLoginSuccess() {
    if (blankOverlay.classList.contains('active')) return;

    // Show 5-second completely pitch black screen
    blankOverlay.classList.add('active');

    // Mute or silence
    if (window.soundEngine) window.soundEngine.playDing();

    // Exactly 5000 milliseconds (5 seconds) of pure void
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 5000);
  }

  runawayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    executeLoginSuccess();
  });

  // Handle Tab key focus + Enter
  runawayBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      executeLoginSuccess();
    }
  });

  // =========================================================
  // 5. EXTRA LOGIN RAGEBAIT DETAILS
  // =========================================================
  // "Remember Me" unchecks itself
  if (rememberCheckbox) {
    rememberCheckbox.addEventListener('change', () => {
      if (rememberCheckbox.checked) {
        setTimeout(() => {
          rememberCheckbox.checked = false;
          if (window.soundEngine) window.soundEngine.playBuzzer ? window.soundEngine.playBuzzer() : window.soundEngine.playDing();
          alert("We tried to remember you, but your profile was deemed unmemorable.");
        }, 500);
      }
    });
  }

  // Forgot Password Link
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Have you tried simply remembering your password? It is much faster.");
    });
  }

  // Cheat key for development or when user is tested: press Escape 3 times quickly
  let escPresses = 0;
  let escTimer = null;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      escPresses++;
      clearTimeout(escTimer);
      escTimer = setTimeout(() => { escPresses = 0; }, 1000);
      if (escPresses >= 3) {
        alert("🤫 Dev Cheat Triggered: 3x Escape detected. Starting 5-second blank screen...");
        executeLoginSuccess();
      }
    }
  });
});
