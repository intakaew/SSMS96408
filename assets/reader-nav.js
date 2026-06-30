/* ════════════════════════════════════════════════════════════
   reader-nav.js — ปุ่มลอยสำหรับสลับวิชา/กลับห้องสมุด (ใช้ในหน้าหนังสือ)
   ต้องโหลดคู่กับ catalog.js  เช่น:
     <script src="../assets/catalog.js"></script>
     <script src="../assets/reader-nav.js"></script>
   ════════════════════════════════════════════════════════════ */
(function () {
  if (typeof BOOKS === 'undefined' || !Array.isArray(BOOKS)) return;

  var base = function (p) { return (p || '').split('/').pop(); };
  var here = base(location.pathname);
  // หาเล่มปัจจุบันจากชื่อไฟล์
  var current = BOOKS.filter(function (b) { return base(b.file) === here; })[0];

  var css = '' +
    '#rn-wrap{position:fixed;right:18px;bottom:18px;z-index:99999;font-family:"Segoe UI",system-ui,sans-serif}' +
    '#rn-btn{display:flex;align-items:center;gap:8px;background:#1F6FEB;color:#fff;border:none;cursor:pointer;' +
      'font-family:inherit;font-size:13.5px;font-weight:700;padding:11px 16px;border-radius:30px;' +
      'box-shadow:0 6px 20px rgba(0,0,0,.35);transition:background .15s,transform .15s}' +
    '#rn-btn:hover{background:#388BFD;transform:translateY(-2px)}' +
    '#rn-panel{position:absolute;right:0;bottom:56px;width:300px;max-width:78vw;background:#161B22;' +
      'border:1px solid #30363D;border-radius:14px;box-shadow:0 16px 44px rgba(0,0,0,.55);overflow:hidden;' +
      'opacity:0;visibility:hidden;transform:translateY(10px);transition:all .18s}' +
    '#rn-wrap.open #rn-panel{opacity:1;visibility:visible;transform:translateY(0)}' +
    '#rn-wrap.open #rn-btn{background:#388BFD}' +
    '.rn-home{display:flex;align-items:center;gap:9px;padding:13px 16px;background:rgba(31,111,235,.12);' +
      'color:#79C0FF;text-decoration:none;font-size:13px;font-weight:700;border-bottom:1px solid #30363D}' +
    '.rn-home:hover{background:rgba(31,111,235,.22)}' +
    '.rn-sec{padding:9px 16px 5px;font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#8B949E}' +
    '.rn-list{max-height:46vh;overflow-y:auto;padding-bottom:6px}' +
    '.rn-item{display:flex;align-items:center;gap:10px;padding:9px 16px;text-decoration:none;color:#E6EDF3;' +
      'font-size:12.5px;line-height:1.35;transition:background .12s;border-left:3px solid transparent}' +
    '.rn-item:hover{background:rgba(255,255,255,.05)}' +
    '.rn-item.cur{background:rgba(31,111,235,.1);border-left-color:#79C0FF}' +
    '.rn-ic{width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;' +
      'font-size:16px;flex-shrink:0;color:#fff}' +
    '.rn-tt{flex:1;min-width:0}.rn-tt b{display:block;font-weight:700;font-size:12.5px;' +
      'white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.rn-tt span{font-size:10.5px;color:#8B949E}' +
    '.rn-cur-tag{font-size:9.5px;font-weight:700;color:#56D364;flex-shrink:0}' +
    '.rn-list::-webkit-scrollbar{width:7px}.rn-list::-webkit-scrollbar-thumb{background:#30363D;border-radius:4px}' +
    '@media(max-width:560px){#rn-wrap{right:12px;bottom:12px}#rn-btn span.rn-lbl{display:none}#rn-btn{padding:13px}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var items = BOOKS.map(function (b) {
    var isCur = current && b.id === current.id;
    return '<a class="rn-item' + (isCur ? ' cur' : '') + '" href="../' + b.file + '">' +
      '<span class="rn-ic" style="background:' + (b.gradient || '#1F6FEB') + '">' + (b.emoji || '📘') + '</span>' +
      '<span class="rn-tt"><b>' + (b.title || '') + '</b><span>' + (b.code ? 'รหัส ' + b.code : '') + '</span></span>' +
      (isCur ? '<span class="rn-cur-tag">● กำลังอ่าน</span>' : '') +
      '</a>';
  }).join('');

  var wrap = document.createElement('div');
  wrap.id = 'rn-wrap';
  wrap.innerHTML =
    '<div id="rn-panel">' +
      '<a class="rn-home" href="../index.html">← กลับสู่ห้องสมุด</a>' +
      '<div class="rn-sec">เปิดวิชาอื่น (' + BOOKS.length + ' เล่ม)</div>' +
      '<div class="rn-list">' + items + '</div>' +
    '</div>' +
    '<button id="rn-btn" aria-label="เปิดวิชาอื่น">📚 <span class="rn-lbl">เปิดวิชาอื่น</span></button>';
  document.body.appendChild(wrap);

  var btn = wrap.querySelector('#rn-btn');
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') wrap.classList.remove('open');
  });
})();
