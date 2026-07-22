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
hasil-spilce





