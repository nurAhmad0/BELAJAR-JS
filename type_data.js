// string itu ya seperti nama nama yang dikuruang dengan kutip
// number itu ya seperti angka angka yang tidak dikurung dengan kutip
// boolean itu ya seperti true(1) atau false(2)
// indefined  




//cara mengetahui type data dari sebuah variable

//string
let dataString = "budi";
console.log(dataString);
console.log(typeof dataString); //string

//number
let dataNumber = 10;
console.log(dataNumber);
console.log(typeof dataNumber); //number

//boolean
let dataBoolean = 1;
let dataBoolean2 = 0;
console.log(dataBoolean);
console.log(typeof dataBoolean); //boolean
console.log("ini pembuktian bahwa 1 itu true dan 0 itu false");
console.log(dataBoolean == true); //true
console.log(dataBoolean2 == false); //true
console.log("ini cara mengubah number menjadi boolean");
console.log(Boolean(1)); // Hasilnya: true
console.log(Boolean(0)); // Hasilnya: false


//undefined
let dataUndefined;//ini itu variabel bukan istilah undefined
console.log(dataUndefined);
console.log(typeof dataUndefined); //undefined
dataUndefined = "kiki";
console.log("ini pembuktian bahwa undefined sudah diisi dengan string");
console.log(dataUndefined);
console.log(typeof dataUndefined); //string jadi tidka lagi menjadi undefined karena sudah diisi dengan string


//Nan
//jadi itu seperti bilangan kompleks jadi bukan number dan bukan string jadi itu nan
let dataNan = "budi" / 2;
console.log(dataNan);
console.log(typeof dataNan); //number jadi nan itu termasuk number tapi bukan number yang sebenarnya

//null
let dataNull = null;
console.log(dataNull);
console.log(typeof dataNull); //object jadi null itu termasuk object tapi bukan object yang sebenarnya
//dan nuull itu tidak bisa disamakan dengan undefined karena null itu tidak ada isinya sedangkan undefined itu belum diisi