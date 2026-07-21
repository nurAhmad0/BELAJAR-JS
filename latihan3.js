let angaka1, angka2, operasiAritmatika, hasil;
hasil = document.getElementById("hasil");

document.getElementById("buttonAritmatika").onclick = function () {
    angka1 = parseFloat(document.getElementById("aritmatika1").value)
    angka2 = parseFloat(document.getElementById("aritmatika2").valueAsNumber)
    operasiAritmatika = document.getElementById("operatorAritmatika").value

    if(isNaN(angka1)||isNaN(angka2)){
        hasil.textContent = "masukkan angka yang benar"
        return
    }

    if(operasiAritmatika === "operatorAritmatika"){
        hasil.textContent = "sialhkan pilih dulu operasinya"
        return
    }

    hasilOperasi = 0
    switch (operasiAritmatika) {
        case "+":
            hasilOperasi = angka1 + angka2;
            break;
        case "-":
            hasilOperasi = angka1 - angka2;
            break;
        case "*":
            hasilOperasi = angka1 * angka2;
            break;
        case "/":
            // Mencegah pembagian dengan angka 0
            if (angka2 === 0) {
                hasil.innerText = "Error: Tak terhingga (÷0)";
                return;
            }
            hasilOperasi = angka1 / angka2;
            break;
        case "%":
            hasilOperasi = angka1 % angka2;
            break;
        default:
            hasil.innerText = "Operator tidak valid";
            return;
    }

    hasil.textContent = hasilOperasi
}