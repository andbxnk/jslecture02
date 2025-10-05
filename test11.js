//Loop กับ Object
let dataObj = {
  name: "Sombat",
  age: 20,
  isStudent: true,
  address: {
    province: "Nonthaburi",
    contry: "Thailand",
  },
  food: ["KFC", "Pizza", "Burger"],
}
 
//เข้าถึงข้อมูลแต่ละตัวของ Object ใช้ key
console.log(dataObj.age)
console.log(dataObj.address.province)
console.log(dataObj.food[2])
dataObj.address.contry = "USA"
console.log(dataObj.address.contry)
console.log('---------------------')
console.log(dataObj)
 
//เข้าถึงทุกข้อมูลใน Object
for ( let key in dataObj ) {
    console.log(key)
}
console.log('---------------------')
 
for( let [key, value] of Object.entries(dataObj) ){
    console.log(key)
    console.log(value)
}
console.log('---------------------')
 
for(let value of Object.values(dataObj)){
    console.log(value)
}
console.log('---------------------')
 
for(let key of Object.keys(dataObj)){
    console.log(key)
}