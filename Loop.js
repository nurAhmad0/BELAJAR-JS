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