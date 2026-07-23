// ============================================================================
// KODE PRAKTIK: SIMULASI PENDAFTARAN AKUN USER
// Salip / Paste kode ini ke Console Browser (F12) untuk dicoba!
// ============================================================================

function daftarkanUser(dataUser) {
    // 1. INFO: Tanda dimulainya proses pendaftaran
    console.info("ℹ️ [INFO] Menerima data pendaftaran pengguna baru...");

    // 2. TABLE: Menampilkan data calon user dalam bentuk tabel rapi
    console.table(dataUser);

    // 3. DEBUG: Detail teknis mikro (Verbose) untuk melacak isi objek parameter & alokasi memori internal
    // (Pesan ini hanya muncul di Console jika opsi 'Verbose' di menu Default Levels dicentang!)
    console.debug(`🔍 [DEBUG VERBOSE] Parameter dataUser diterima. Tipe data: ${typeof dataUser}`);
    console.debug(`🔍 [DEBUG VERBOSE] Detail struktur object:`, JSON.stringify(dataUser));

    // 4. LOG: Pengecekan teknis biasa untuk developer (cek panjang username)
    console.log(`🔍 [DEBUG LOG] Memeriksa panjang username (${dataUser.username.length} karakter)...`);

    // 5. WARN: Peringatan keamanan password (password lemah, tapi pendaftaran masih diizinkan)
    if (dataUser.password.length < 6) {
        console.warn("⚠️ [WARN] Keamanan Rendah: Password terlalu pendek! Disarankan minimal 6 karakter.");
    }

    // 6. ERROR: Validasi fatal (Email wajib ada)
    try {
        // [DEBUG] Mencatat pengecekan kondisi sebelum validator dijalankan
        console.debug(`🔍 [DEBUG VERBOSE] Menjalankan blok try-catch untuk validasi email...`);

        if (!dataUser.email || dataUser.email === "") {
            throw new Error("Email tidak boleh kosong!");
        }
        
        console.info("ℹ️ [INFO] Akun berhasil dibuat!");
    } catch (err) {
        console.error(`🚨 [ERROR] Gagal mendaftarkan user: ${err.message}`);
    }
}

// === COBA JALANKAN SKENARIO INI ===

console.log("--- UJI COBA SKENARIO 1 (Ada Debug, Warning & Error) ---");
daftarkanUser({
    username: "budi_tech",
    password: "123", // Mengisi password pendek (memicu console.warn)
    email: ""        // Email kosong (memicu console.error)
});