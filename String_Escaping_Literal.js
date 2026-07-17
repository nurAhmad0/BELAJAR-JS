//belajar ini janlup Struktur Anatomi Regex Literal


let dataString = "data string";
console.log(dataString);


// 1. escaping character(\' \" \\ \n \r \t \b \f)
let dataString2 = "data string \"budi\"";//jadi itu seperti menambahkan kutip di dalam string
//atau bisa pakai kutip beda 
let dataString3 = "data string 'budi'";
//ada juag seperti \n itu untuk membuat baris baru
let dataString4 = "budi ke sedang ke pasar \n keren";
//ada juag seperti \t itu untuk membuat tab
let dataString5 = "budi ke sedang ke pasar \t keren";
//ada juga seperti \b itu untuk menghapus karakter sebelumnya
let dataString6 = "budi ke sedang ke pasar \b keren";
console.log(dataString2);
console.log(dataString3);
console.log(dataString4);
console.log(dataString5);
console.log(dataString6);




let caraModern = `Agus berkata, "Hari ini jum'at".
Dan saya sedang belajar koding.`;

console.log(caraModern);
/* Hasil:
Agus berkata, "Hari ini jum'at".
Dan saya sedang belajar koding.
*/




//escaping string itu ada benyak selain ini 








//2. literal string adalah string yang ditulis langsung di dalam kode program tanpa menggunakan variabel. 
// Literal string dapat ditulis dengan menggunakan tanda kutip tunggal (' ') atau tanda kutip ganda (" "). 
// Contoh:
let namaDepan = "Budi";
let namaBelakang = 'Santoso';
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap); // Output: Budi Santoso


let namaSiswa = "Budi";
let nilai = 95;
// Jauh lebih rapi dan bebas campur tipe data
let laporan = `Siswa bernama ${namaSiswa} mendapatkan nilai ${nilai}.`;
console.log(laporan);
// Hasil: "Siswa bernama Budi mendapatkan nilai 95."