//NaN

console.log(`akar dari -1 adalah ${Math.sqrt(-1)}`); // Output: NaN
console.log(`hasil dari nasi/bubur adalah ${"nasi"/"bubur"}`); // Output: NaN selain itu ada 
// perkalian, pembagian, pengurangan,
//  modulus, dan sisa bagi juga akan menjadi NaN kalau ada string di dalamnya



let data = "kg buah 100.2";
console.log(parseInt(data));// Output: NaN
console.log(isNaN(data));// Output: true

console.log(data + 10); //apapun yang ada operasi dengan NaN itu akan menjadi NaN

//undefined
let data2;
console.log(data2);