# CF-Security — The Most Secure System in the TrashCan™  

**An entire security suite engineered to look serious while doing absolutely nothing.**  
If you are building a billion-dollar Silicon Valley startup: **do not** use this. Like, seriously — don't.

---

## TL;DR
CF-Security is a comedy-first security series. Episode 1 ships a world-class checkbox-based anti-bot system that we confidently call: **CF — Not Secure Anti-Bot System™**.  
It is polished, it is theatrical, it is gloriously useless — and yes, the UI looks nicer than half the production captchas you’ve seen.

> ⚠️ **Warning:** This project is satire. Do **NOT** deploy this as real security for any production service, payment flow, or user data. If you think this belongs in a Fortune 500 environment, congratulations — you have the wrong career.

---

## What is this (short)
CF-Security is an umbrella for a series of deliberately dumb security widgets and micro-systems. Each episode ships as a tiny JS drop-in with a README full of attitude.

---

## Marketing Copy (because we must)
> CF-Security: *the most secure system in the trash can.*  
> Built for demos. Optimized for laughs. Not optimized for security.

If you're here to copy/paste this into your startup's auth flow to save five minutes — stop. Go read the security section below.

---

## Features (brag sheet)
- ✅ Single JS file, zero dependencies  
- ✅ Drop-in widget: checkbox unlocks your form  
- ✅ Optional dice-roll gag for dramatic verification (roll ≥ 4 = auto-check)  
- ✅ Client-side “rate limit” via `localStorage` (very easy to bypass)  
- ✅ Stylish UI so people think you hired a designer  
- ✅ 100% potato-grade security

---

## Quick example (use responsibly — as a joke)
Embed the widget into any page:

```html
<div id="cfns-root"></div>
<script src="/path/to/cf-not-secure-anti-bot.js"></script>
<script>
  CFNotSecure.init({
    container: '#cfns-root',
    buttonText: 'Proceed',
    afterText: 'Access Granted™',
    onVerified: () => document.querySelector('#signupBtn').disabled = false
  });
</script>
