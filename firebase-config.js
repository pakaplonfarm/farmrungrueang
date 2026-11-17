// ===== ตั้งค่าคลาวด์ Firebase =====
// คัดลอกค่า firebaseConfig จาก Firebase Console › ⚙️ Project settings › General › Your apps (Web) มาวางแทน null
// ตัวอย่าง:
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza....",
//   authDomain: "farmrungrueang.firebaseapp.com",
//   projectId: "farmrungrueang",
//   storageBucket: "farmrungrueang.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abcdef"
// };
window.FIREBASE_CONFIG = null;

// ชื่อพื้นที่เก็บข้อมูลของฟาร์ม (ต้องตรงกับในกฎ Firestore)
window.FARM_ID = 'rungrueang';
