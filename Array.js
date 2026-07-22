let data_Array = ["budi", "siti", "wowo"]
console.log(data_Array)


//operasi dari array


//indexing
//mengambil data dari array berdasarka index

console.log(`data index ke 1 = ${data_Array[1]}`)//output = siti
console.log(`data index ke 3 = ${data_Array[3]}`)//output = undefined
console.log(data_Array.indexOf("budi")) //output = 0
console.log(data_Array.at(-1)) //output = wowo kalau tidak ada maka undefined
 


//length
//panjang data didalam array
let panjang_data = data_Array.length
console.log(panjang_data)


//tambah dan hapus data array
data_Array.push("farhan")
console.log(`data array terbaru = ${data_Array}`) //output data array terbaru = budi,siti,wowo,farhan

data_Array.unshift("asep")//menambha data di depan
console.log(`data array terbaru = ${data_Array}`) //output data array terbaru = asep,budi,siti,wowo,farhan

let data_hapus1 = data_Array.shift()//menaghpsu data yang ada di depan
console.log(`data array terbaru = ${data_Array}`) //output data array terbaru = budi,siti,wowo,farhan
console.log(`data yang di hapus itu adalah = ${data_hapus1}`) //output data yang di hapus itu adalah = asep


let data_hapus = data_Array.pop()
console.log(`data array terbaru = ${data_Array}`) //output data array terbaru = budi,siti,wowo
console.log(`data yang di hapus itu adalah = ${data_hapus}`) //output data yang di hapus itu adalah = farhan













// manipulasi array (join, split, slice)
//join (separator:string) digunakan untuk menggabungkan array
console.log(`ini data biasa pakai array langsung ${data_Array}`)//output ini data biasa pakai array langsung budi,siti,wowo

let data_join = data_Array.join("-")
console.log(`ini data pakai join array ${data_join}`)//output ini data pakai join array budi-siti-wowo

//splice (index, delete/nodelete, data)
let hasil_splice;


//index dan delete
hasil_splice = data_Array.splice(1, 2) //jadi ini akan mengambil index satu sampai sebanyak 2 setelah itu akan memindahkannya 
//kedalam variabel hasil_splice jadi delete dari array yang asli kesimpulannya mengambil index satu dan 2 data setelahnya lalu delete
console.log(`hasil splice 1,1 = ${hasil_splice}`)//siti,wowo
console.log(hasil_splice)//[siti, wowo]
console.log(data_Array) //output [budi]

hasil_splice = data_Array.splice(1, 2)
console.log(`hasil splice 1,2 = ${hasil_splice}`)//kosong karena sudah di hapus
console.log(data_Array)//output [budi]


//mau menambhakna data dengan splice yaitu pakai 0
hasil_splice = data_Array.splice(1, 0, "asep")
console.log(`hasil splice 1,0,"asep" = ${hasil_splice}`)//kosong karean tidak menghasilkan apa apa
console.log(data_Array)//output ['budi', 'asep'] meletakkan asep di index satu


hasil_splice = data_Array.splice(1, 0, "siti", "agus")
console.log(`hasil splice 1,0,"siti" = ${hasil_splice}`)//kosong karean tidak menghasilkan apa apa
console.log(data_Array)//output ['budi', 'siti', 'agus', 'asep'] meletakkan siti di index satu












//slice
console.log(data_Array.join('-'));
let anak = data_Array.slice(1,3); //mengambil dari index satu smapai index 2 dan kalau llebih itu maka akan ambil sampai akhri kalau lebih
console.log(anak)//output ['siti', 'agus']
console.log(`anak anak = ${anak.join('-')}`)















//menggabungkan dua array
let data_anak1 = ['budi', 'tono', 'sep']
let data_anak2 = ['siti', 'agus', 'wowo']

//menggabungkan dua array
let tim_anak = data_anak1.concat(data_anak2);
console.log(tim_anak) //['budi', 'tono', 'sep', 'siti', 'agus', 'wowo']

//mengecek apakah ada
if (tim_anak.includes("budi")) {
    console.log(`ada didalam array budi`)
}
else {
    console.log('tidak ada anak bernama budi')
}




//mencari index dri suatu data
let posisi_data = tim_anak.indexOf('sep')
console.log(`sep berada di index ke ${posisi_data}`)//output 2 kaau -1 itu tidak ada didalam datanya 



//mengurutkan data berdasarakn value

console.log(`awalnya begini ${tim_anak.join('-')}`)

tim_anak.sort();
console.log(`sortnya begini ${tim_anak.join('-')}`)

tim_anak.reverse();
console.log(`reversenya begini ${tim_anak.join('-')}`)