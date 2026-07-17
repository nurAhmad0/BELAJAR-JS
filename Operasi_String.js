//operasi string

//1.char at
let DataString = "absdefghi";
let dataChar = DataString.charAt(0);
console.log(`Character at index 0: ${dataChar}`); // Output: Character at index 0: a


let teks = "Agus";

console.log(typeof teks.charAt(100)); // Hasilnya: "string" (Konsisten! dan kosong melompong)
console.log(typeof teks[100]);        // Hasilnya: "undefined"

//2. menyambungkan string
let namaDepan = "Budi";
let namaBelakang = "Santoso";
let namaLengkap = namaDepan.concat(" ", namaBelakang);//atau bisa pakai +
console.log(namaLengkap); // Output: Budi Santoso

//3. mengubah string menjadi huruf besar
let dataString2 = "budi santoso";
let dataUpperCase = dataString2.toUpperCase();
console.log(dataUpperCase); // Output: BUDI SANTOSO

//4. mengubah string menjadi huruf kecil
let dataLowerCase = dataString2.toLowerCase();
console.log(dataLowerCase); // Output: budi santoso

//5. mengambil index dari sebuah string
let dataString3 = "budi santoso";
let indexOfBudi = dataString3.indexOf("budi");
console.log(indexOfBudi); // Output: 0
//dan kalau tidak ada maka hasilnya -1


//6. mengambil index terakhir dari sebuah string
let lastIndexOfSantoso = dataString3.lastIndexOf("santoso");
console.log(lastIndexOfSantoso); // Output: 5
//dan kalau tidak ada maka hasilnya -1





//7. mengambil substring dari sebuah string
let dataString4 = "budi santoso";
let substring = dataString4.substring(0, 4);
console.log(substring); // Output: budi


//8. slice string
let dataString5 = "budi santoso";
let slice = dataString5.slice(0, 4);
console.log(slice); // Output: budi

//9. replace string
let dataString6 = "budi santoso";
let replacedString = dataString6.replace("budi", "agus");
console.log(replacedString); // Output: agus santoso

//10. extract data number dari string
let dataString7 = "12";
console.log(typeof dataString7); // Output: string
let extractedNumber = parseInt(dataString7);
console.log(typeof extractedNumber); // Output: number







let dataString7 = "budi santoso 12345";
let extractedNumber = dataString7.match(/\d+/)[0];
//arti dari match itu tolong mencari di dataSTring7 berdasarakn syarat di match yaitu \d+
//arti dari \d+ itu adalah mencari angka yang ada di dataString7 dan + itu artinya mencari semua angka yang ada di dataString7
//[0] itu artinya mengambil index pertama hasil dari match karena match itu akan menghasilkan array jadi kita ambil index pertama dari array tersebut
//// Hasil asli di latar belakang:
// ["12345", index: 13, input: "budi santoso 12345", groups: undefined]
console.log(extractedNumber); // Output: 12345












//catatan
let teksUtama = "Halo";
let kataTambahan = [" semuanya,", " selamat", " belajar", " JS!"];

// Menggabungkan seluruh isi array sekaligus ke teksUtama
let kalimatLengkap = teksUtama.concat(...kataTambahan);//jadi kegunaan titik 3 itu biar bisa 
// menggabungkan seluruh isi array sekaligus ke teksUtama dengan cara menghilangkan tanda kurung siku 
// dan koma di dalam array

console.log(kalimatLengkap);
// Hasil: "Halo semuanya, selamat belajar JS!"





//perbedaan substring dan slice
//yitu kalau butuh - itu pakai slice 
let nim = "222410101089";
let kodeUnik = nim.slice(-3); // Ambil 3 digit terakhir
console.log(kodeUnik); // Hasil: "089"

//jika posisi indexnya itu bisa bolak-balik itu pakai substring karena kalau 
//(5,0) itu akan menjadi (0,5) jadi hasilnya tetap sama
let teksArtikel = "Belajar JavaScript itu seru sekali!";

// User mem-block terbalik dari kanan ke kiri
let startBlock = 18; // Kata "seru"
let endBlock = 8;    // Kata "JavaScript"

// .substring() otomatis memperbaiki urutan menjadi (8, 18)
let hasilSorot = teksArtikel.substring(startBlock, endBlock);
console.log(hasilSorot); // Hasil: "JavaScript" (Aplikasi anti-bug!)











// console.log(Number("12345"));       // Hasil: 12345
// console.log(Number("123budi"));     // Hasil: NaN  <- (Mogok, karena ada huruf 'budi' di dalam string)
// console.log(Number("12.50"));       // Hasil: 12.5 <- (Lolos, karena dia mendukung angka desimal)
// console.log(Number(""));            // Hasil: 0    <- (Uniknya, string kosong diubah jadi 0)

// dan 

// console.log(parseInt("12345"));       // Hasil: 12345
// console.log(parseInt("123budi"));     // Hasil: 123  <- (Huruf 'budi' dibuang!)
// console.log(parseInt("12.50"));       // Hasil: 12   <- (Koma/Desimal dibuang karena dia cuma nyari Integer/Angka Bulat)
// console.log(parseInt("budi123"));     // Hasil: NaN  <- (Eror, karena karakter pertamanya bukan angka)