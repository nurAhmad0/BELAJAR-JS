let angka1, angka2, hasil;

document.getElementById("tombol_jumlah").onclick = function() {
    // Ambil string teks dari input (misal: "1.000.000")
    let stringAngka1 = document.getElementById("angka1").value;
    let stringAngka2 = document.getElementById("angka2").value;

    // PEMBERSIHAN MASKING: Hapus semua tanda titik sebelum di-parse ke Float
    let angkaBersih1 = stringAngka1.replace(/\./g, '');
    let angkaBersih2 = stringAngka2.replace(/\./g, '');

    // Ubah string bersih menjadi tipe data Number secara aman
    angka1 = parseFloat(angkaBersih1);
    angka2 = parseFloat(angkaBersih2);
    
    // Validasi: Jika input kosong atau bukan angka, beri peringatan
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Mohon masukkan kedua angka terlebih dahulu!");
        return;
    }
    
    // Hitung hasilnya
    hasil = angka1 + angka2;
    
    // Tampilkan hasil ke layar menggunakan textContent, beri masking juga agar seragam
    document.getElementById("hasil").textContent = hasil.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatMasking(input) {
    // Ambil value, hapus semua karakter selain angka (dan koma/titik jika ada desimal)
    let value = input.value.replace(/[^0-9]/g, '');
    
    // Ubah menjadi format ribuan dengan titik (.) menggunakan Regex bawaan JS
    if (value !== "") {
        input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        input.value = "";
    }
}