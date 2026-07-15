//variabel dnegan let
let nama = "agus";

//tampilkan data nama
console.log(nama);//hasilnya agus


//ubah nilai let nama 
nama = "budi";//jadi tidak perlu pakai let
console.log(nama);//hasilnya budi

// variabel dengan var
var namaDepan = "ucup";
console.log(namaDepan);//hasilnya ucup
namaDepan = "budi2"
console.log(namaDepan);//hasilnya budi2

//kelakuan let
let namaBelakang = "budiman";
{
    let namaBelakang = "surotong";
    console.log(namaBelakang);//jadi ini itu scope denagn adanay {} jadi bisa  while,if,loop
    //dan ini itu hasilnay surotong
}
console.log(namaBelakang);//ini hasilnya budiman bukan surucup

let namaBelakang = "budiman";
{
    namaBelakang = "surotong";
    console.log(namaBelakang);//tanpa let di scope maka hasilnay akan surotong
}
console.log(namaBelakang);//ini hasilnya surotong karena tanpa let

//jadi kalau namaBelakang di luar scope maka akan menyebabkan eror pada console log karena tidak tau mau mengambil namaBelakang yang mana 




//kelakuan dari var
var namaTengah = "hehe";
{
    var namaTengah = "wowo";

    console.log(namaTengah);
}
console.log(namaTengah);
