//loop
data_array = [2,4,12,5,1,457,4,9];

//for loop for (inisiasi; kondisi; increment)

for (let i = 1; i<=4; i++) {
    console.log(`nilai i saat ini ${i}`);
}
// output loop diatas
// nilai i saat ini 1
// nilai i saat ini 2
// nilai i saat ini 3
// nilai i saat ini 4

let panjang_data = data_array.length
for (let i = 0; i <= (panjang_data - 1); i++) {
    console.log(`nilai dari list saat ini ${data_array[i]}`)
}
//output diatas seprti ini
// nilai dari list saat ini 2
// Loop.js:17 nilai dari list saat ini 4
// Loop.js:17 nilai dari list saat ini 12
// Loop.js:17 nilai dari list saat ini 5
// Loop.js:17 nilai dari list saat ini 1
// Loop.js:17 nilai dari list saat ini 457
// Loop.js:17 nilai dari list saat ini 4
// Loop.js:17 nilai dari list saat ini 9



//while loop

let angka_mulai = 0;
while (true) {
    angka_mulai++
    console.log(`angka saat ini ${angka_mulai}`)
    if (angka_mulai === 5){
        break
    }
}

//output diatas 
// angka saat ini 1
// angka saat ini 2
// angka saat ini 3
// angka saat ini 4
// angka saat ini 5





let angka_mulai1 = 0;
let status_saat_ini = true;
while (status_saat_ini) {
    angka_mulai1++
    console.log(`angka saat ini ${angka_mulai1}`)
    if (angka_mulai1 === 5){
        status_saat_ini = false
    }
}

//output diatas 
// angka saat ini 1
// angka saat ini 2
// angka saat ini 3
// angka saat ini 4
// angka saat ini 5






const buah = ["Apel", "Pisang", "Mangga"];

buah.forEach((item, index) => {
    console.log(`Indeks ke-${index} berisikan buah: ${item}`);
});

// Hasil:
// Indeks ke-0 berisikan buah: Apel
// Indeks ke-1 berisikan buah: Pisang
// Indeks ke-2 berisikan buah: Mangga




const buah1 = ["Apel", "Pisang", "Mangga"];

buah1.forEach((item, index) => {
    console.log(`Indeks ke-${index} berisikan buah: ${item}`);
});

// Hasil:
// Indeks ke-0 berisikan buah: Apel
// Indeks ke-1 berisikan buah: Pisang
// Indeks ke-2 berisikan buah: Mangga





const buah2 = ["Apel", "Pisang", "Mangga"];

// 1. Menggunakan for...in (Mengambil INDEKS / Key)
console.log("--- Menggunakan for...in ---");
for (const i in buah2) {
    console.log(i); // Yang keluar: "0", "1", "2" (sebagai string)
}

// 2. Menggunakan for...of (Mengambil NILAI / Element)
console.log("\n--- Menggunakan for...of ---");
for (const item of buah2) {
    console.log(item); // Yang keluar: "Apel", "Pisang", "Mangga"
}





let angkaDadu;
let jumlahLemparan = 0;

// 🎲 Menggunakan do...while: Lempar dulu, baru cek nilainya!
do {
    // Generasi angka acak dari 1 sampai 6
    angkaDadu = Math.floor(Math.random() * 6) + 1; 
    jumlahLemparan++;
    
    console.log(`Lemparan ke-${jumlahLemparan}: Mendapat angka ${angkaDadu}`);

} while (angkaDadu !== 6); // Cek: Apakah angkanya BUKAN 6? Jika ya, ulang lempar!

console.log(`🎉 Hore! Mendapat angka 6 setelah ${jumlahLemparan} kali lemparan.`);






//beda

let nama_nama = ["budi", "agus", "asep"]

let nama_cari = "siti"


for(let i = 0; i < nama_nama.length; i++) {
    console.log(`nama saat ini adalah ${nama_nama[i]}`)
    if (nama_nama[i] === nama_cari){
        console.log(`ada nama ${nama_cari} didalam list`)
        break
    }
    else if (i === (nama_nama.length - 1)){
        console.log(`tidak ada nama ${nama_cari} didalam list`)
    }
}
