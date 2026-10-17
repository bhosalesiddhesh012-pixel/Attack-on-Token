# 🌀 AuraDesk™ Bharat Edition — Prompt & Output Documentation

Welcome to **AuraDesk™ Bharat Edition**, a web application designed to look like a high-end enterprise SaaS platform while delivering psychological frustration, eye-straining luminance, and India-themed ragebait mechanics.

---

## 🚀 Quick Start / How to Run

You can open the application directly in any browser on macOS:

```bash
open /Users/siddheshbhosale/.gemini/antigravity/scratch/ragebait-app/index.html
```

Or run a local HTTP server:

```bash
cd /Users/siddheshbhosale/.gemini/antigravity/scratch/ragebait-app
python3 -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 📜 Development Log: Prompts & Output Implementation

### 🔹 Turn 1: Initial Architecture & Core Ragebait Mechanics

#### 💬 User Prompt 1:
> *"give the most annoying webpage / ragebaiting webpage of only 2 pages 1st login and then profile page add features like in the login page after wrinting username it automaticall gets reverse and some uppercase and some lowercase and in password scetion show 1st invisble password then suddenly make visible and after completing login page and clicking sign up button the button should run from my cursor and if successfully reached the button the show the blank screen for 5 sec then show the profile page and make sure the UI is good and also the profile page should be ragebaiting also pls make"*

#### 🛠️ Output & Implemented Features:
1. **Two-Page Architecture**:
   - `index.html`: Clean enterprise login page with glassmorphism and subtle animations.
   - `profile.html`: Settings dashboard loaded after successful login.
   - `rage-audio.js`: 100% native Web Audio API synthesizer for offline sound effects.
   - `styles.css`: High-end SaaS styling with ragebait layout rules.
   - `login.js` & `profile.js`: Interactive psychological warfare logic.
2. **Username Auto-Reverse & Chaos Casing**:
   - As user finishes typing or pauses, text instantly flips backwards and scrambles into alternating uppercase/lowercase (e.g. `siddhesh` ➔ `hSeHddIs`).
3. **Password Masked ➔ Sudden Public Exposure**:
   - Starts normally masked as `type="password"`.
   - After typing 3+ characters, suddenly swaps to `type="text"`, glows bold neon red with an alarm buzzer, and displays: *"📢 PUBLIC SECURITY NOTICE: Password broadcasting enabled for live shoulder audit."*
4. **The Runaway "Sign In" Button**:
   - When cursor gets within 110px, calculates escape vector and glides away with bouncy physics.
   - Displays animated taunt bubbles: *"Too slow! 🐌"*, *"Missed me! 💨"*, *"Skill issue! 💀"*.
   - Corner detection: Teleports across the screen if pinned.
5. **5-Second Pitch-Black Void Screen**:
   - If the button is clicked (or captured via `Tab` + `Enter`), the entire screen enters a complete blackout with hidden cursor (`cursor: none`) for exactly 5000ms of suspense before loading `profile.html`.
6. **Initial Profile Page Ragebaits**:
   - Realistic drifting monitor screen hair/eyelash that nudges away when mouse gets close.
   - Emergency contact range slider spanning `1000000000` to `9999999999` with step `1`.
   - "Save Profile" and "Delete Account" buttons that swap places on mouse hover.
   - Inverted gravity volume slider that automatically falls back to 100% and rings a chime.

---

### 🔹 Turn 2: Visual Overhaul & India Ragebait Enhancements

#### 💬 User Prompt 2:
> *"the website is good make the colours of the website brighter so that user struggles to see and after the login page the profile add more ragebaiting feature and use india as reference like insert profile photo but photo is coming something else and add in save profile add some sound effects like that furiates user same for permantently deleteing data and in username entering if the user starts entering after few seconds locked it immediately then delete the text he has wrote then unblocked again"*

#### 🛠️ Output & Implemented Features:
1. **Blinding Bright Eye-Strain Theme**:
   - High-luminance background `#ffffec` with jarring neon yellow radial glare and glossy white cards.
   - Intentionally low-contrast faint slate text (`#64748b`, `#94a3b8`, `#cbd5e1`) forcing the user to squint and tilt their monitor to read labels and placeholders.
   - Blinding neon yellow-green action buttons.
2. **Username Lockout & Progressive Text Wipe**:
   - The moment typing begins in the username field, a 2.5s timer starts.
   - If typing isn't completed immediately, the input **locks red (`cursor: not-allowed`)**, an alarm sounds, and a banner alerts:
     > *"⛔ SECURITY LOCKOUT: Keystroke buffer timeout. Sanitizing text..."*
   - Text is **progressively deleted character-by-character** before their eyes.
   - Remains locked for 1.2s, then unlocks with a taunt pill: *"Buffer wiped due to keystroke latency. Try typing faster!"*
3. **India Reference: Profile Photo Switcheroo**:
   - Selecting/uploading any photo discards the user's file and cycles through 4 authentic Indian memes:
     1. **Sarkari Blue-Background Passport Photo**: Parted oiled hair, stern mustache, red stamp: *"REJECTED: EARS NOT VISIBLE AT 90° ANGLE"*.
     2. **Auto-Rickshaw Meter**: Showing red digital **₹9,999.00** with *"METER KHARAB HAI (Double night charge)"*.
     3. **Govt Gomata Aadhaar Card**: Official UID card with marigold garland.
     4. **Canteen Samosa & Jalebi Plate**: *"Identity verified via Govt Canteen Token #42"*.
4. **Save Profile: Indian Pressure Cooker Whistle**:
   - Clicks trigger synthesized steam whistle (`playPressureCooker()`) ramping into an ear-splitting `shhhhh-WHEEEEEEEEEE-shhh` while shaking the card.
   - Alert: *"🍲 SERVER STATUS: CHAI-SAMOSA BREAK (1:00 PM to 4:00 PM)! Online submissions suspended. Please bring 3 physical Xerox copies attested by a Gazetted Officer to Room #304 in Pune branch on Tuesday morning between 10:00 AM and 10:15 AM."*
5. **Permanently Delete Data: Ekta Kapoor Daily Soap Opera Drama**:
   - Clicking Delete triggers an orchestral crash: **DHOOM! ... DHOOM! ... DHOOM!** (`playSerialDramaticGong()`).
   - Full-screen **triple color strobe flash** (Red ➔ Blue ➔ Yellow).
   - **3-step dramatic camera zoom** on the screen.
   - Alert: *"😱 HAYE BHAGWAN! LOG KYA KAHENGE?! Sharma Ji's son has already saved his profile 4 times and scored 99.8 percentile in CAT! Your colony WhatsApp group has been notified."*
6. **Linked 12-Digit Aadhaar Slider**:
   - Single continuous slider spanning `1000 0000 0000` to `9999 9999 9999` with step `1`.
   - Notice: *"OTP will be sent to BSNL mobile number registered in Year 2004."*
7. **Indian City & Traffic GPS Lock**:
   - Dropdown with Silk Board Flyover (4 hr wait), Virar Fast Local footboard hanging, Pune afternoon nap (1–4 PM), Delhi AQI 999+, and cancelled Goa trip.
8. **Test Auto-Rickshaw Horn**:
   - Dedicated button playing dual-tone `PAAAA-POM!` rickshaw horn audio.

---

## 📂 Project Structure

```
ragebait-app/
├── index.html        # Page 1: Blinding login page, username wipe, runaway button, 5s blackout
├── profile.html      # Page 2: Bharat citizen profile, Indian memes, Aadhaar slider, serial drama
├── styles.css        # Searing high-luminance eye-strain theme & soap opera animations
├── login.js          # Username lock/erase timer, password reveal, runaway button physics
├── profile.js        # Indian photo switcher, pressure cooker whistle, button swap, soap drama
├── rage-audio.js     # Web Audio API synthesizer (pressure cooker, auto horn, serial gongs)
└── README.md         # Full prompt history, output implementation log, and setup instructions
```
