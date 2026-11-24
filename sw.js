// เก็บไฟล์แอปไว้ในเครื่อง เพื่อเปิดได้แม้สัญญาณอ่อน (ภาพดาวเทียมยังต้องใช้เน็ต)
const CACHE='drone-ledger-v34';
const FILES=['./','index.html','leaflet.js','thgeo.js','chart.umd.js','firebase-config.js','firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return; // ภาพแผนที่/ฟอนต์ ปล่อยให้โหลดจากเน็ตตามปกติ
  // หน้าเว็บ: ลองโหลดใหม่ก่อน (ได้เวอร์ชันล่าสุด) ถ้าไม่มีเน็ตใช้ของในเครื่อง
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
