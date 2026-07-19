//data number

let data_int = 10; //ini adalah data number integer jadi tidak ada koma di belakangnya
let data_float = 10.5; //ini adalah data number float jadi ada koma di belakangnya
let data_big_int = 9007199254740991n; //ini adalah data number big int jadi ada n di belakangnya

//mengubah data number
let angka1 = 10;
console.log(parseInt(angka1)); // Output: 10
let angka2 = 10.5;
console.log(parseFloat(angka2)); // Output: 10.5    

//menubah data string ke number
let dataString = "10";
console.log(parseInt(dataString));//output: 10
console.log(parseFloat(dataString));//output: 10

let datastring2 = "10.5";
console.log(parseFloat(datastring2));// Output: 10.5
console.log(parseInt(datastring2));// Output: 10 jadi kalau pakai parseInt maka akan dibulatkan ke bawah


let data = "100.2 kg buah";
console.log(parseFloat(data));// Output: 100.2
console.log(parseInt(data));// Output: 100 jadi kalau pakai parseInt maka akan dibulatkan ke bawah

//kalau pakai Number maka akan menjadi NaN karena ada string di belakangnya
let data2 = "100.2 kg buah";
console.log(Number(data2));// Output: NaN


//kalau angkanya itu dibelakang dan string didepan maka akan menjadi NaN juga
let data3 = "kg buah 100.2";
console.log(parseFloat(data3));// Output: NaN
//dan NaN === NaN itu false jadi kalau mau ngecek apakah itu NaN atau bukan maka pakai isNaN()
console.log(isNaN(data3));// Output: true

