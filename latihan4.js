//menyimpan data makanan ke dalam array
let data_makanan = []

//inisiasi / menangkap element dari html
let tombolTambah = document.getElementById("ButtonTambah");
let dataInput = document.getElementById("InputMenu");
let areaMenu = document.getElementById("areaHasil");


//event klik tombol tambah
tombolTambah.onclick = function () {
    let tugasBaru = dataInput.value;

    if (tugasBaru === ""){
        alert("tugas tidak boleh kosong!")
        return
    }


    data_makanan.push(tugasBaru);
    dataInput.value = "";



    let isiHtml = "<ul class='list-group'>"
    for(let i = 0; i < data_makanan.length; i++) {
        isiHtml += "<li class='list-group-item list-group-item-primary mb-2 rounded'>" + data_makanan[i] + "</li>";
    }


    isiHtml += "</ul>"
    areaMenu.innerHTML = isiHtml
}