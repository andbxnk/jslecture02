// Identifirer คือ ชื่อที่ Dev ตั้งขึ้นมาเอง (ตัวแปร, ฟังก์ชัน, ค่าคงที่, คลาส, ออบเจ็กต์) ต้องเป็นไปตามกฎของการตั้งชื่อ
// ไม่เว้นวรรค ไม่ขึ้นต้นด้วยตัวเลข ไม่ใช้คำสงวน (reserved words/keywords) เช่น let, const, var, function, if, else, for, while เป็นต้น
// ไม่ใช่สัญลักษณ์พิเศษ ยกเว้น _ (underscore) และ $ (dollar sign)
// ควรตั้งเป็น PascalCase, camelCase, snake_case
// PascalCase คือ MyName, HelloWorld เป็นตัวใหญ่ทุกตัวที่ขึ้นต้นคำ
// camelCase คือ myName, helloWorld เป็นตัวเล็กตัวแรก ตัวต่อไปขึ้นต้นด้วยตัวใหญ่
// snake_case คือ my_name, hello_world เป็นตัวเล็กหมด หรือ ตัวใหญ่หมดก็ได้

// Code Block คือ กลุ่มคำสั่งที่อยู่ใน {}

// Variables ตัวแปร คือ ชื่อที่ Dev ตั้งขึ้นมาเอง เอาไว้เก็บข้อมูลที่เกิดขึ้นในโปรแกรม
// Global ใช้ที่ไหนก็ได้
// Local ใช้ได้เฉพาะที่ที่ประกาศตัวแปรนั้นๆ
var dti01 = "aaa"; // แก้ไขค่าได้ เป็น Global 
let dti02 = "bbb"; // แก้ไขค่าได้ เป็น Local ***
const dti03 = "ccc"; // แก้ไขค่าไม่ได้ เป็น Local ***

dti01 = "111";
dti02 = "222";
// dti03 = "333";
{
    var dti04 = "ddd";
    let dti05 = "eee";
    const dti06 = "fff";
    console.log(dti01, dti02, dti03, dti04, dti05, dti06);
}

console.log(dti01, dti02, dti03, dti04);