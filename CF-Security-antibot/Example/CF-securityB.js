/*!
 * CF - Not Secure Anti-Bot System™
 * Ultra-potato fake captcha. Just a checkbox.
 * Usage:
 *   <div id="cfns"></div>
 *   <script src="cf-not-secure-anti-bot.js"></script>
 *   <script>
 *     CFNotSecure.init({
 *       container: '#cfns',
 *       buttonText: 'Continue',
 *       onVerified: () => alert("Access granted™ (not really)")
 *     });
 *   </script>
 */

const CFNotSecure = (() => {
  function injectCSS(){
    if (document.getElementById('cfns-style')) return;
    const s = document.createElement('style');
    s.id = 'cfns-style';
    s.innerHTML = `
      .cfns-box{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;
        background:#fff;padding:16px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.12);
        max-width:420px;margin:auto;text-align:left}
      .cfns-row{display:flex;align-items:center;gap:8px}
      .cfns-checkbox{width:18px;height:18px;accent-color:#2196f3;cursor:pointer}
      .cfns-btn{margin-top:12px;background:#2196f3;color:#fff;border:none;
        padding:8px 14px;border-radius:8px;font-size:15px;cursor:pointer}
      .cfns-btn[disabled]{background:#cbd5e1;cursor:not-allowed}
      .cfns-foot{font-size:12px;color:#6b7280;margin-top:8px}
    `;
    document.head.appendChild(s);
  }

  function renderInto(root, opts){
    injectCSS();
    root.innerHTML = `
      <div class="cfns-box">
        <div class="cfns-row">
          <input type="checkbox" class="cfns-checkbox" id="cfns-check"/>
          <label for="cfns-check">I am not a bot (I can check a box).</label>
        </div>
        <button class="cfns-btn" disabled>${opts.buttonText||'Verify'}</button>
        <div class="cfns-foot">That's our very advanced security layer™.</div>
      </div>
    `;

    const check = root.querySelector('#cfns-check');
    const btn = root.querySelector('.cfns-btn');

    check.addEventListener('change', () => {
      btn.disabled = !check.checked;
    });

    btn.addEventListener('click', () => {
      if (typeof opts.onVerified === 'function'){
        opts.onVerified({ ts: Date.now() });
      } else {
        alert("Verified (not really)");
      }
      btn.disabled = true;
      btn.innerText = opts.afterText || 'Verified (✓)';
    });
  }

  function init(opts){
    const root = (typeof opts.container === 'string') ? document.querySelector(opts.container) : opts.container;
    if (!root){ console.error('CFNotSecure: container not found'); return; }
    renderInto(root, opts||{});
  }

  return { init };
})();
