let nilai = 50;
console.log(`Nilai = ${nilai}`);
let hasil;

if (nilai >= 75){
    hasil = "lulus"
}
else{
    hasil = "gagal"
}

console.log(`hasil = ${hasil}`)



//ternary operator

// rumus
//variabel hasil = (kondisi) ? true : false

let hasil_ternary = (nilai >= 75) ? "lulus" : "gagal";
console.log(`hasil ternary = ${hasil_ternary}`)