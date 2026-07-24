// ============================================================================
// CATATAN BELAJAR: OBJECT vs MAP DI JAVASCRIPT
// ============================================================================

console.log("=== 1. INISIALISASI & CARA MEMBUAT ===");

// --- OBJECT (Cocok untuk data statis / profil) ---
const produkObject = {
  nama: "Kopi Susu",
  harga: 18000,
  101: "Kode Rak A" // Angka 101 akan OTOMATIS diubah JS menjadi String "101"
};

// --- MAP (Cocok untuk data dinamis & key fleksibel) ---
const produkMap = new Map([
  ["nama", "Kopi Susu"],
  ["harga", 18000],
  [101, "Kode Rak A"] // Key angka 101 TETAP murni berjenis Number!
]);

console.log("Isi Object:", produkObject);
console.log("Isi Map:", produkMap);


// ============================================================================
// === 2. OPERASI DASAR: AMBIL, TAMBAH, EDIT, HAPUS, CEK ===
// ============================================================================

console.log("\n=== 2. OPERASI DASAR ===");

// ----------------------------------------------------------------------------
// A. MENGAMBIL DATA (Get)
// ----------------------------------------------------------------------------
const namaObj = produkObject.nama;        // Atau: produkObject["nama"]
const namaMap = produkMap.get("nama");

console.log("Mengambil Data -> Object:", namaObj, "| Map:", namaMap);

// ----------------------------------------------------------------------------
// B. MENAMBAH & MENGUBAH DATA (Add & Update)
// ----------------------------------------------------------------------------
// Object: Pakai Assignment (=)
produkObject.stok = 50;           // Menambah key baru
produkObject.harga = 20000;       // Mengubah nilai key yang ada

// Map: Pakai method .set(key, value)
produkMap.set("stok", 50);        // Menambah key baru
produkMap.set("harga", 20000);    // Mengubah nilai key yang ada

// ----------------------------------------------------------------------------
// C. MEMERIKSA KEBERADAAN KEY (Has / Check)
// ----------------------------------------------------------------------------
// Object: Pakai operator 'in' atau .hasOwnProperty()
const adaStokObj = "stok" in produkObject;

// Map: Pakai method .has(key)
const adaStokMap = produkMap.has("stok");

console.log("Cek 'stok' -> Object:", adaStokObj, "| Map:", adaStokMap);

// ----------------------------------------------------------------------------
// D. MENGETAHUI UKURAN / JUMLAH DATA (Size)
// ----------------------------------------------------------------------------
// Object: TIDAK BISA langsung, harus diubah ke Array dulu!
const ukuranObj = Object.keys(produkObject).length; 

// Map: BISA LANGSUNG pakai properti .size (Sangat Cepat!)
const ukuranMap = produkMap.size;

console.log("Ukuran Data -> Object:", ukuranObj, "| Map:", ukuranMap);

// ----------------------------------------------------------------------------
// E. MENGHAPUS SATU DATA (Delete)
// ----------------------------------------------------------------------------
delete produkObject.stok;        // Object (pakai keyword delete)
produkMap.delete("stok");         // Map (pakai method .delete())

// ----------------------------------------------------------------------------
// F. MENGHAPUS SEMUA DATA (Clear)
// ----------------------------------------------------------------------------
// Object: Harus di-assign ulang dengan object kosong
// produkObject = {}; (jika pakai let) atau hapus manual key-nya.

// Map: Punya method bawaan .clear()
// produkMap.clear();


// ============================================================================
// === 3. MANIPULASI TINGKAT LANJUT (LOOPING & KEY SPESIAL) ===
// ============================================================================

console.log("\n=== 3. EKSPERIMEN OPERASI SPESIAL ===");

// ----------------------------------------------------------------------------
// A. BISAKAH ME-LOOPING LANGSUNG DENGAN for..of?
// ----------------------------------------------------------------------------
// ❌ OBJECT TIDAK BISA di-looping langsung dengan for..of!
// (Akan Error: produkObject is not iterable)
// TAPI Object bisa di-looping pakai for..in ATAU Object.entries():
for (let [key, val] of Object.entries(produkObject)) {
  console.log(`[Object Loop] ${key}: ${val}`);
}

// ✅ MAP BISA DI-LOOPING LANGSUNG!
for (let [key, val] of produkMap) {
  console.log(`[Map Loop] ${key}: ${val}`);
}

// ----------------------------------------------------------------------------
// B. BISAKAH MENGGUNAKAN OBJECT / ELEMENT LAIN SEBAGAI KEY?
// ----------------------------------------------------------------------------
const objKey1 = { id: 1 };
const objKey2 = { id: 2 };

// ❌ OBJECT BISA GAGAL/OVERWRITE Jika Key-nya Objek Lain!
const wadahObject = {};
wadahObject[objKey1] = "Data User 1";
wadahObject[objKey2] = "Data User 2"; // WARN: Ini akan MENIMPA Data User 1!
console.log("Object dengan Key Objek (Gagal):", wadahObject);
// Hasilnya: {[object Object]: 'Data User 2'} -> Karena key diubah jadi string "[object Object]"

// ✅ MAP BISA MEMAKAI OBJEK LAIN SEBAGAI KEY DENGAN AMAN!
const wadahMap = new Map();
wadahMap.set(objKey1, "Data User 1");
wadahMap.set(objKey2, "Data User 2"); // Sukses tersimpan terpisah!
console.log("Map dengan Key Objek (Sukses):", wadahMap.get(objKey1)); // "Data User 1"
















//operasi map
// Operasi     	    Bisa / Tidak    	Cara Penulisan / Keterangan
// Tambah / Edit	    ✅ Bisa	           map.set(key, val)
// Ambil Data	        ✅ Bisa	           map.get(key)
// Hapus 1 Data	        ✅ Bisa	           map.delete(key)
// Hapus Semua	        ✅ Bisa	           map.clear()
// Cek Key Ada	        ✅ Bisa	           map.has(key)
// Cek Ukuran	        ✅ Bisa	           Langsung via map.size
// Key selain String	✅ Bisa	           Boleh Angka, Boolean, Array, bahkan Objek!
// Looping for..of	    ✅ Bisa	           for (let [k, v] of map) bisa langsung jalan.



//operasi Objek
// Operasi             Bisa / Tidak        Cara Penulisan / Keterangan
// Tambah / Edit       ✅ Bisa             obj.key = val atau obj["key"] = val
// Ambil Data          ✅ Bisa             obj.key atau obj["key"]
// Hapus 1 Data        ✅ Bisa             delete obj.key
// Hapus Semua         ⚠️ Terbatas         Tidak ada method bawaan (harus assign {} baru).
// Cek Key Ada         ✅ Bisa             "key" in obj atau obj.hasOwnProperty("key")
// Cek Ukuran          ❌ Tidak Langsung   Harus via Object.keys(obj).length
// Key selain String   ❌ Tidak Bisa       Key angka/boolean akan dipaksa jadi String.
// Looping for..of     ❌ Tidak Bisa       Error Not Iterable. Harus via Object.entries(obj).










//objek
const produkObject = {
  nama: "Kopi Susu",
  "harga produk": 18000, // Key pakai spasi
  101: "Rak A"            // Key berupa angka
};

// --- 1. Akses Biasa ---
console.log(produkObject.nama);      // "Kopi Susu" (Dot Notation)
console.log(produkObject["nama"]);    // "Kopi Susu" (Bracket Notation)

// --- 2. Kasus Key Mengandung Spasi / Karakter Khusus ---
// console.log(produkObject.harga produk); // ❌ SYNTAX ERROR!
console.log(produkObject["harga produk"]); // ✅ "18000" (Wajib pakai Bracket Notation)

// --- 3. Kasus Mengakses Menggunakan Variabel (Dinamis) ---
const kriteriaInput = "nama";

console.log(produkObject.kriteriaInput); 
// ❌ Hasil: undefined! (JS mencari key bernama "kriteriaInput", bukan variabelnya)

console.log(produkObject[kriteriaInput]); 
// ✅ Hasil: "Kopi Susu" (JS mengevaluasi nilai variabel kriteriaInput -> "nama")

// Gunakan Dot Notation (.nama) sebagai pilihan utama karena simpel. 
// Gunakan Bracket Notation (["nama"]) HANYA KETIKA nama key-nya ada di dalam variabel atau punya spasi/karakter khusus.




//map
const myMap = new Map();

// Map bisa pakai Objek / Array sebagai KEY! (Python dict tidak bisa pakai List/Dict sebagai key)
const arrayKey = [1, 2, 3];
myMap.set(arrayKey, "Data Array");

console.log(myMap.get(arrayKey)); // "Data Array"
console.log(myMap.size);         // 1 (Setara len() di Python)




// ✅ REKOMENDASI: Menggunakan Map
const logAktivitas = new Map();

logAktivitas.set("10:00", "User Login");
logAktivitas.set("10:05", "Beli Produk A");

// Cek jumlah log langsung:
console.log(logAktivitas.size); // 2

// Looping langsung tanpa perlu Object.entries():
for (let [waktu, aksi] of logAktivitas) {
  console.log(`[${waktu}] - ${aksi}`);
}









//cek key dan value di map


const userMap = new Map();
userMap.set("nama", "Budi");
userMap.set("role", "Admin");

// Cek apakah KEY "nama" ada di Map?
console.log(userMap.has("nama")); // ✅ true
console.log(userMap.has("umur")); // ❌ false



// Cek apakah VALUE "Budi" ada di dalam Map?
const adaBudi = Array.from(userMap.values()).includes("Budi");
console.log(adaBudi); // ✅ true












//cek key dan nilai objek
const userObj = {
  nama: "Budi",
  role: "Admin"
};

// --- Cara 1: Pakai operator 'in' ---dan juag in itu juagakan cek method dalam objek dan juga method yang ada didalam warisan juga
console.log("nama" in userObj); // ✅ true
console.log("umur" in userObj); // ❌ false

// --- Cara 2: Pakai Object.hasOwn() (Rekomendasi Modern) ---
console.log(Object.hasOwn(userObj, "nama")); // ✅ true


// Cek apakah VALUE "Admin" ada di Object?
const adaAdmin = Object.values(userObj).includes("Admin");
console.log(adaAdmin); // ✅ true







//map
// Memiliki 2 Elemen Tombol di HTML
const tombolLogin = document.getElementById("btnLogin");
const tombolRegister = document.getElementById("btnRegister");

// ✅ PAKAI MAP: Menjadikan Elemen HTML sebagai KEY!
const statusTombol = new Map();
statusTombol.set(tombolLogin, { dibekukan: false, klikCount: 5 });
statusTombol.set(tombolRegister, { dibekukan: true, klikCount: 0 });

// Mengambil data status tombolLogin secara instan:
console.log(statusTombol.get(tombolLogin));





// --- Cara 1: Langsung ubah propertinya (Paling Ringkas) ---
// Ambil objeknya, lalu ubah klikCount-nya
statusTombol.get(tombolLogin).klikCount = 6; 

// --- Cara 2: Ambil ke variabel dulu, ubah, lalu set ulang ---
const dataLogin = statusTombol.get(tombolLogin);
dataLogin.klikCount = 7;
statusTombol.set(tombolLogin, dataLogin);

console.log(statusTombol.get(tombolLogin).klikCount); // Output: 7






//mengubah dari map ke objek
// Data awal berbentuk MAP (Hasil olahan di Frontend)
const keranjangMap = new Map();
keranjangMap.set("makanan", "Nasi Goreng");
keranjangMap.set("harga", 25000);

// 🔄 KONVERSI KE OBJECT (Siap dikirim ke Database / JSON.stringify):
const keranjangObj = Object.fromEntries(keranjangMap);

// Cek Hasilnya:
console.log(keranjangObj);
// Output: { makanan: 'Nasi Goreng', harga: 25000 }

// Sekarang aman untuk dijadikan string JSON:
const jsonSiapKirim = JSON.stringify(keranjangObj);
console.log(jsonSiapKirim); 
// Output: '{"makanan":"Nasi Goreng","harga":25000}'




//mengubah dari objek ke map
// Data awal berbentuk OBJECT (Misal dari Database / JSON)
const dataUserObj = {
  id: 101,
  nama: "Budi",
  role: "Admin"
};

// 🔄 KONVERSI KE MAP:
const dataUserMap = new Map(Object.entries(dataUserObj));

// Cek Hasilnya:
console.log(dataUserMap);
// Output: Map(3) { 'id' => 101, 'nama' => 'Budi', 'role' => 'Admin' }

// Sekarang kamu bisa pakai fitur Map!
console.log(dataUserMap.size); // 3