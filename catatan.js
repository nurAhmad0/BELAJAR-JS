/* ==========================================================================
   📚 KITAB PANDUAN JAVASCRIPT EVENT LISTENERS & DOM MANIPULATION
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. ANATOMI & DASAR addEventListener()
// --------------------------------------------------------------------------
// Mengapa pakai addEventListener? Karena ini adalah standar profesional. 
// Memisahkan logika (JS) dari struktur (HTML) dan bisa memasang banyak fungsi.

// Contoh dasar mengambil elemen berdasarkan ID:
const tombolUtama = document.getElementById("tombol");

/*
Struktur Penulisan:
elemen.addEventListener("nama_event", fungsi_yang_dijalankan);
*/


// --------------------------------------------------------------------------
// 2. DAFTAR INTERAKSI (EVENT) POPULER SELAIN "click"
// --------------------------------------------------------------------------
// Browser bisa mendeteksi hampir semua gerakan pengguna. Berikut jenisnya:

// A. Event Mouse (Mouse Events)
tombolUtama.addEventListener("mouseenter", function() {
    // Terjadi saat kursor mouse baru masuk/menyentuh area elemen (seperti :hover)
    console.log("Kursor mouse menyentuh tombol!");
});

tombolUtama.addEventListener("mouseleave", function() {
    // Terjadi saat kursor mouse keluar dari area elemen
    console.log("Kursor mouse meninggalkan tombol!");
});

tombolUtama.addEventListener("dblclick", function() {
    // Terjadi saat elemen diklik 2 kali secara cepat
    console.log("Tombol diklik ganda!");
});

// B. Event Papan Ketik (Keyboard Events) - Dipasang pada kotak input
const inputNama = document.getElementById("namaDepan");

inputNama.addEventListener("keyup", function(event) {
    // Terjadi saat user selesai menekan tombol keyboard dan melepas jarinya.
    // event.key digunakan untuk tahu tombol keyboard apa yang ditekan (misal: 'Enter', 'A')
    console.log("User sedang mengetik huruf: " + event.key);
});

// C. Event Formulir (Form Events)
inputNama.addEventListener("focus", function() {
    // Terjadi saat kotak input diklik/aktif dan siap menerima ketikan
    console.log("Kotak input nama sedang aktif (focused).");
});


// --------------------------------------------------------------------------
// 3. CONTOH SATU TOMBOL DIPASANGI BANYAK FUNGSI (MULTIPLE LISTENERS)
// --------------------------------------------------------------------------
// Keunggulan utama addEventListener adalah tidak saling menimpa fungsi lain.

// Fungsi Pertama: Catat di Console
tombolUtama.addEventListener("click", function() {
    console.log("[Fungsi 1] Aksi berhasil dicatat di sistem.");
});

// Fungsi Kedua: Ambil data input dan gabungkan (Gaya Bootstrap)
tombolUtama.addEventListener("click", function() {
    const depan = document.getElementById("namaDepan").value;
    const belakang = document.getElementById("namaBelakang").value;
    
    document.getElementById("namaLengkap").innerText = depan + " " + belakang;
    console.log("[Fungsi 2] Nama sukses digabungkan!");
});



// value: Digunakan khusus untuk tag input (seperti <input>, <textarea>, <select>). 
// value mengambil atau mengisi teks yang diketik langsung oleh pengguna di dalam 
// kotak tersebut.

// innerText: Digunakan untuk tag non-input/tag teks biasa (seperti <span>, <h1>, <p>, <div>). 
// innerText mengambil atau mengubah teks yang berada di antara tag pembuka dan penutup.

















// --------------------------------------------------------------------------
// 4. CARA MENONAKTIFKAN FUNGSI (removeEventListener)
// --------------------------------------------------------------------------
// Syarat utama untuk menghapus fungsi: Fungsinya TIDAK BOLEH Anonim (tanpa nama).
// Kita harus membuat fungsi yang memiliki nama terlebih dahulu.

// Langkah A: Buat fungsi bernama khusus
function tampilkanPesanSekali() {
    console.log("Pesan ini hanya akan muncul SATU KALI saja saat diklik.");
    
    // Langkah C: Di dalam fungsi, kita perintahkan untuk menghapus dirinya sendiri
    // Jadi setelah klik pertama terjadi, tombol tidak akan merespon fungsi ini lagi
    tombolUtama.removeEventListener("click", tampilkanPesanSekali);
    
    // Opsional: Mengubah visual tombol lewat Bootstrap agar terlihat non-aktif
    tombolUtama.classList.remove("btn-primary");
    tombolUtama.classList.add("btn-secondary");
    tombolUtama.disabled = true; // Tombol fisik terkunci tidak bisa diklik
}

// Langkah B: Pasang fungsi bernama tersebut ke dalam event listener
tombolUtama.addEventListener("click", tampilkanPesanSekali);






// Mencari tag span yang ada di dalam elemen #komentar
const rahasia = document.querySelector("#komentar span").textContent;
console.log(rahasia);
// Output: "(Dan ini teks rahasia yang disembunyikan)"






// Di Python: 7 // 3  -> Hasil: 2
let hasil1 = Math.floor(7 / 3); 
console.log(hasil1); // Output: 2












const harga = 1500000;


console.log(`${harga}`); // "1500000"  (Kurang enak dibaca pengguna)
console.log(String(harga)); // "1500000"

// Format Indonesia
console.log(harga.toLocaleString("id-ID")); 
// Hasil: "1.500.000" (Memakai Titik)

// Format Amerika Serikat (en-US)
console.log(harga.toLocaleString("en-US")); 
// Hasil: "1,500,000" (Memakai Koma)


/* ==========================================================================
   💡 RINGKASAN MEMORI UNTUK KAWAN PROGRAMMER:
   - document : Pintu masuk untuk mengelola isi halaman HTML.
   - querySelector('#id') : Alternatif modern selain getElementById.
   - flex-wrap: wrap : Mengizinkan elemen flex turun ke bawah saat layar HP sempit.
   - placeholder vs aria-placeholder : Placeholder untuk mata (visual), 
     aria-placeholder untuk telinga (alat bantu tunanetra/screen reader).
   ========================================================================== */