// Data Types ชนิดข้อมูล
//String
console.log("object")
console.log('object')
console.log(`object`)

//Number
console.log(100) // integer (int)
console.log(100.50) // float (double)

//Boolean
console.log(true) // 1  หรือมีค่าข้อมูลใดๆ
console.log(false) // 0 หรือไม่มีค่าข้อมูลใดๆ

//Null
console.log(null) // ค่า Null คือ ไม่มีค่า

//object เขียนอยู่ใน {} curly brackets และมีรูปแบบเป็น key:value
console.log({
    name: "Sombat",
    age: 20,
    isStudent : true,
    address : {
        province: "Nonthaburi",
        country: "Thailand"
    },
    food : ["KFC", "McDonald", "Pizza"]
})

// Array เขียนอยู่ใน [] square brackets มีได้หลายข้อมูลคั่นด้วย , comma
// ทุก value ของ Array จะมี index กำกับเริ่มต้นที่ 0
console.log(["Sombat", "Somchai", "Somying"])
console.log([100, 200, 300, 400])
console.log([111, "Sombat", true, 555, {name: "Somchai", age: 20}])

//undefined
// ตัวแปรที่ประกาศขึ้นมา แต่ไม่ได้กำหนดค่าให้กับตัวแปรนั้น จะมีค่าเป็น undefined
let x;
console.log(x) // undefined

