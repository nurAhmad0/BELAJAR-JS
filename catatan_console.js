// ============================================================================
// PROYEK SIMULASI: SISTEM MANAJEMEN RESTORAN
// ============================================================================

// --- 1. DATA MASTER ---
// Array of Objects untuk menu makanan
const daftarMenu = [
    { id: 1, nama: "Nasi Goreng Spesial", kategori: "Makanan", harga: 25000, stok: 10 },
    { id: 2, nama: "Mie Ayam Bakso", kategori: "Makanan", harga: 20000, stok: 3 }, // Stok tipis
    { id: 3, nama: "Es Teh Manis", kategori: "Minuman", harga: 5000, stok: 0 }     // Stok habis
];


// --- 2. FUNGSI UTAMA SISTEM ---

function jalankanSistemRestoran() {

    // ------------------------------------------------------------------------
    // A. USE CASE: console.info
    // Dikenakan saat sistem/aplikasi berhasil melakukan milestone/proses penting.
    // Ditujukan untuk mencatat alur bisnis bahwa fitur berjalan normal.
    // ------------------------------------------------------------------------
    console.info("[INFO - 10:00 AM]: Aplikasi Kasir Restoran berhasil dimuat dan siap digunakan.");


    // ------------------------------------------------------------------------
    // B. USE CASE: console.table
    // Digunakan saat kita ingin melihat data berstruktur (Array/Object) 
    // agar tampil rapi berkolom-kolom tanpa harus klik dropdown satu per satu.
    // ------------------------------------------------------------------------
    console.info("[INFO]: Menampilkan daftar menu makanan hari ini:");
    console.table(daftarMenu);


    // ------------------------------------------------------------------------
    // C. USE CASE: console.log
    // Digunakan untuk "Quick Debugging" / sekadar mengecek nilai variabel sementara 
    // saat developer sedang menulis atau menguji logika matematika kode.
    // ------------------------------------------------------------------------
    let totalKeranjang = 0;
    let diskon = 5000;
    
    // Developer mengecek apakah perhitungan rumus sementara sudah sesuai
    totalKeranjang = daftarMenu[0].harga + daftarMenu[1].harga;
    console.log("[DEBUG LOG]: Nilai total sementara sebelum diskon =", totalKeranjang);
    
    totalKeranjang -= diskon;
    console.log("[DEBUG LOG]: Nilai total setelah diskon =", totalKeranjang);


    // ------------------------------------------------------------------------
    // D. USE CASE: console.debug
    // Digunakan untuk mencatat detail teknis mikro (Verbose) yang sangat halus/dalam.
    // Secara default disembunyikan browser (butuh centang 'Verbose' di DevTools).
    // Cocok untuk melacak bug rumit tanpa mengotori tampilan console normal.
    // ------------------------------------------------------------------------
    console.debug("[DEBUG VERBOSE]: Memeriksa alokasi memori array daftarMenu... Panjang array:", daftarMenu.length);
    console.debug("[DEBUG VERBOSE]: Tipe data atribut harga ID 1 adalah:", typeof daftarMenu[0].harga);


    // ------------------------------------------------------------------------
    // E. USE CASE: console.warn
    // Digunakan ketika ada kondisi "potensi masalah" (seperti stok menipis), 
    // tetapi program MASIH BISA BERJALAN lancar (tidak sampai crash).
    // ------------------------------------------------------------------------
    console.info("[INFO]: Memeriksa ketersediaan stok menu...");
    
    daftarMenu.forEach(item => {
        if (item.stok > 0 && item.stok <= 3) {
            console.warn(`[WARNING]: Stok untuk "${item.nama}" tersisa ${item.stok} porsi lagi! Segera restok.`);
        }
    });


    // ------------------------------------------------------------------------
    // F. USE CASE: console.error
    // Digunakan ketika terjadi KEGAGALAN FATAL atau proses terhenti (Error)
    // yang membuat transaksi/fitur tidak bisa dilanjutkan.
    // ------------------------------------------------------------------------
    function pemesananMenu(idMenu, jumlahPesan) {
        
        // [DEBUG] Mencatat input internal fungsi sebelum diproses
        console.debug(`[DEBUG VERBOSE]: Memanggil pemesananMenu() dengan argumen -> idMenu: ${idMenu}, jumlahPesan: ${jumlahPesan}`);

        const item = daftarMenu.find(m => m.id === idMenu);

        try {
            if (!item) {
                throw new Error(`Menu dengan ID ${idMenu} tidak ditemukan!`);
            }

            if (item.stok < jumlahPesan) {
                throw new Error(`Stok "${item.nama}" tidak cukup! (Sisa stok: ${item.stok}, Diminta: ${jumlahPesan})`);
            }

            // Jika sukses
            item.stok -= jumlahPesan;
            console.info(`[INFO]: Berhasil memesan ${jumlahPesan}x ${item.nama}. Sisa stok: ${item.stok}`);

        } catch (err) {
            // Menangkap error dan mencetaknya khusus menggunakan console.error
            console.error(`[ERROR TRANSACTION]: Transaksi Gagal! Penyebab: ${err.message}`);
        }
    }

    // --- Uji Coba Pemesanan ---
    console.info("[INFO]: Menerima pesanan pelanggan...");
    
    // Pemesanan 1: Sukses
    pemesananMenu(1, 2); 

    // Pemesanan 2: Gagal karena stok habis (Memicu console.error)
    pemesananMenu(3, 1); 

    // Pemesanan 3: Gagal karena ID tidak ada (Memicu console.error)
    pemesananMenu(99, 1); 
}

// Jalankan fungsi
jalankanSistemRestoran();