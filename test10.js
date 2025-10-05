//Loop กับ Array
let dataArr = [
  111,
  "Somjai",
  true,
  555,
  { name: "Sombat", age: 20 },
  [111, 222, 333],
]
 
//เข้าถึงข้อมูลแต่ละตัวของ Array ใช้ index
console.log(dataArr[1])
console.log(dataArr[5][1])
console.log(dataArr[4].name)
dataArr[1] = "Sommai"
console.log(dataArr[1])
console.log('---------------------')
 
//เข้าถึงข้อมูลทุกตัวใน Array
dataArr.forEach((item, index)=>{
    console.log(item)
    console.log(index)
})
console.log('---------------------')
 
dataArr.map((item, index)=>{
    console.log(item)
    console.log(index)
})
console.log('---------------------')
 
for(let item of dataArr){
    console.log(item)
}
console.log('-----------t----------')
 
for(let index in dataArr){
    console.log(index)
}
 