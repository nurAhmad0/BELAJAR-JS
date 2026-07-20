//And, OR, Not

let data_bool = true;
console.log(data_bool)


//Not (!)
console.log(!data_bool);//output false
console.log(!!data_bool);//output true
console.log(!1);//output false
console.log(!0);//output true
console.log(!6);//output false jadi kalau bukan 0 maka pasti jadi false




//OR (||)
console.log(`hasil dari A = 0 OR B = 1 adalah ${false||true}`)//output true
console.log(`hasil dari A = 0 OR B = 1 adalah ${0||true}`)//output true
console.log(`hasil dari A = 0 OR B = 1 adalah ${0||1}`)//output 1
console.log(`hasil dari A = 0 OR B = 1 adalah ${false||1}`)//output 1
console.log(`hasil dari A = 0 OR B = 0 adalah ${0||0}`)//output 0




console.log("pemisah")

//And (&&)
console.log(`hasil dari A = 0 And B = 1 adalah ${false && true}`)//output false
console.log(`hasil dari A = 0 And B = 1 adalah ${0 && true}`)//output 0
console.log(`hasil dari A = 0 And B = 1 adalah ${0 && 1}`)//output 0
console.log(`hasil dari A = 0 And B = 1 adalah ${false && 1}`)//output false
console.log(`hasil dari A = 0 And B = 0 adalah ${0 && 0}`)//output 0


