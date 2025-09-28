//Operator

//Arithmetic Operators +, -, *, /, %, ++, --
console.log(20 % 2); //หารเอาเศษ = 0
console.log(2 % 20); // = 2
console.log(0 % 500) // = 0

//Comparison Operators เปรียบเทียบค่า ==, ===, !=, !==, >, <, >=, <=
// ==, != ไม่สนใจ data type
console.log(2 == "2"); // เปรียบแค่ค่า ตัวเลข 2 กับ ตัวอักษร "2" เท่ากัน = true
console.log(2 != "2"); // = false
// ===, !== สนใจ data type
console.log(2 === "2"); // เปรียบค่าและชนิดข้อมูลด้วย = false
console.log(2 !== "2"); // = true

// เปรียบเทียบข้อความ
// a กับ z a มาก่อน z = a น้อยกว่า z
// A กับ a A มาก่อน a = A น้อยกว่า a
// 0-9 ตัวเลข มาก่อน A-Z ตัวใหญ่มาก่อน a-z ตัวเล็ก ดังนั้น 0-9 < A-Z < a-z
console.log("Sombat" < "Somjai"); // S กับ S เท่ากัน o กับ o เท่ากัน m กับ m เท่ากัน b กับ j b มาก่อน j = true
console.log("Bangna" >= "Bangpoo"); // B กับ B เท่ากัน a กับ a เท่ากัน n กับ n เท่ากัน g กับ g เท่ากัน n กับ p n น้อยกว่า p = false

//Logical Operators ตรรรกะ ! (not), && (and), || (or)
//ข้อมูลที่ใช้จะมีแค่ true กับ false และผลก็จะออกมาเป็น true กับ false เท่านั้น
console.log(!true); // not true = false
console.log(!false); // not false = true

console.log(true && true); // true and true = true
console.log(true && false); // true and false = false
console.log(false && false); // false and false = false
console.log(false && true); // false and true = false

console.log(true || true); // true or true = true
console.log(true || false); // true or false = true
console.log(false || false); // false or false = false
console.log(false || true); // false or true = true

//*** Ternary Operator เงื่อนไข ? ทำเมื่อเป็นจริง : ทำเมื่อเป็นเท็จ
let data1 = 100 % 30 == '0' ? 'Wow...' : 'Hui...';
console.log(data1);

//Increment ++ เพิ่มตัวมันเองทีละ 1 & Decrement Operators -- ลดตัวมันเองทีละ 1
let data2 = 10;
console.log(data2++); // 10
data2++;
++data2;
data2++;
console.log(data2); // 13