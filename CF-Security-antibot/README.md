# CF-Not-Secure Anti-Bot System™

> **Tagline:** the checkbox that thinks it’s a firewall.  
> ⚠️ **Warning:** This is not security. It is comedy. Do not use this on your billion-dollar Silicon Valley startup.

---

## What is this?
This repo contains the most advanced anti-bot system ever shipped in the trash.  
It is literally a checkbox. You tick it → the button unlocks → boom, you are “verified.”  

Bots can bypass it in 0.0001 seconds. Humans will laugh for longer.

---

## Features (if we can call them that)
- ✅ One file (`cf-not-secure-anti-bot.js`) — drop-in widget  
- ✅ Checkbox with proud label: *“I am not a bot (I can check a box).”*  
- ✅ Unlocks any form button when checked  
- ✅ Optional dice gag for dramatic verification (roll ≥ 4 = auto-checks the box)  
- ✅ Client-side “rate limit” (localStorage hack, trivially bypassed)  
- ✅ UI so clean you might almost trust it  
- ❌ Does not actually block bots. At all.  

---

## Flowchart of the "System"

```
[User sees checkbox]
        ↓
[Clicks it proudly]
        ↓
[Form unlocks]
        ↓
[Bot laughs, bypasses instantly]
        ↓
[You laugh, they cry]
```

---

## Demo (signup flow)
1. User fills in username + password  
2. User must check the “I am not a bot” box  
3. Submit button unlocks  
4. Backend appends the user to `database.txt` (for demo purposes only)  

That’s it. Security = 0/10. Comedy = 10/10.

---

## Quick usage
```html
<div id="cfns-root"></div>
<script src="cf-not-secure-anti-bot.js"></script>
<script>
  CFNotSecure.init({
    container: '#cfns-root',
    buttonText: 'Verify I am human',
    afterText: 'Verified™',
    onVerified: () => {
      document.querySelector('#submitBtn').disabled = false;
    }
  });
</script>
```
---

## Why does this exist?

Because reCAPTCHA is boring. Because “anti-bot” systems are usually overkill.
Because sometimes all you want is a checkbox that looks serious but isn’t.
Because comedy > security.

---

## Security warning (serious for 20 seconds)

This is client-side only → bots can skip it instantly.

Do not rely on this for production auth or anti-spam.

Never put secrets in client-side JS.

This repo is a joke. Treat it as such.

If you run this in production, your logs will look like a bot party in under 5 minutes.