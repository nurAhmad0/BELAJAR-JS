let passwordUser = "";

do {
    // 1. Minta input password via pop-up
    passwordUser = prompt("Masukkan password (petunjuk: admin):");

// 2. Jika isi passwordUser BUKAN "admin", maka ulang (pop-up akan muncul lagi!)
} while (passwordUser !== "admin"); 

alert("Selamat datang!");