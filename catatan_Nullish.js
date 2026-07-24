// Skenario: User memilih stok = 0 (Angka 0 adalah nilai sah/valid)
let stokUser = 0;

// ❌ PAKAI CARA LAMA (||) - BERMASALAH!
let stok1 = stokUser || 10;
console.log(stok1); // Output: 10  <-- SALAH! Padahal user sengaja mengeset stok = 0.

// ✅ PAKAI NULLISH COALESCING (??) - AMAN!
let stok2 = stokUser ?? 10;
console.log(stok2); // Output: 0   <-- BENAR! Angka 0 tetap dipertahankan.



let catatanUser = ""; // User sengaja mengosongkan catatan

// ❌ Pakai || (Malah dianggap data kosong/falsy)
let hasil1 = catatanUser || "Tidak ada catatan";
console.log(hasil1); // Output: "Tidak ada catatan" (SALAH! Mengabaikan pilihan user)

// ✅ Pakai ?? (Mempertahankan string kosong)
let hasil2 = catatanUser ?? "Tidak ada catatan";
console.log(hasil2); // Output: "" (BENAR! String kosong milik user tetap dipertahankan)





let statusNotifikasi = false; // User sengaja MEMATIKAN notifikasi

// ❌ Pakai || (Malah menganggap false itu kosong)
let isAktif1 = statusNotifikasi || true;
console.log(isAktif1); // Output: true (SALAH! Notifikasi malah jadi aktif)

// ✅ Pakai ?? (Mempertahankan nilai false)
let isAktif2 = statusNotifikasi ?? true;
console.log(isAktif2); // Output: false (BENAR! Pilihan user tetap dihormati)



let parameter;
let data = parameter ?? "nilai default";
console.log(data)

parameter;
if (parameter === undefined || parameter === null) {
    data = "nilai default"
}
console.log(data)








// Data dari API (Misal user belum memasukkan foto profil)
const responseAPI = {
  user: {
    nama: "Budi"
    // fotoProfil tidak ada / undefined
  }
};

// Cek apakah foto profil ada? Jika tidak (null/undefined), pakai gambar avatar default
const foto = responseAPI.user?.fotoProfil ?? "default-avatar.png";
//?ini digunakan untuk mengecek apakah ada user kalau tidak ada maka undefined kalau ada maka lanjut ke pengecekan fotoprofil
//?untuk cek apakah null atau undefined kalau tidak ada maka mengambil "default-avatar.png"

console.log(foto); // Output: "default-avatar.png"











// false       Boolean         Nilai boolean salah itu sendiri.
// 0 dan -0    Number          Angka nol. Dalam logika, $0$ dianggap tidak ada/kosong.
// "", '', \`  String          String kosong (teks tanpa karakter sama sekali).
// null        Null            Nilai sengaja diset "kosong" atau "tidak ada data".
// undefined   Undefined       Variabel yang sudah dideklarasikan tapi belum diberi nilai.
// NaN         Number          Not a Number (hasil dari operasi matematika yang gagal/invalid, misal "abc" / 2).
