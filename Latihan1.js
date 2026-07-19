let namaDepan, namaBelakang, namaLengkap;

document.getElementById("tombol").onclick = function (){
    namaDepan = document.getElementById("namaDepan").value;
    namaBelakang = document.getElementById("namaBelakang").value;

    if (namaDepan === "" || namaBelakang === "") {
        alert("Mohon isi nama depan dan nama belakang terlebih dahulu!");
        return; // Menghentikan fungsi di sini agar tidak lanjut ke bawah
    }

    namaLengkap = namaDepan + " " + namaBelakang;
    document.getElementById("namaLengkap").innerText = namaLengkap;
}