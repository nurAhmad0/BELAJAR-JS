let nama = "siti"

if (nama === "budiono") {
    console.log(`nama saat ini adalah ${nama} sireger`)
}
else if(nama === "siti") {
    console.log(`hai ${nama}`)
}
else{
    console.log(`nama saat ini adalah ${nama} tender`)

}

console.log("akhir")




switch (nama) {
    case "budi":
        console.log("hai budi")
        break
    case "siti":
        console.log("hai siti")
        break
    case "budiono":
        console.log("hai budi")
        break
    default:
        console.log("tidak kenal")
        break
}