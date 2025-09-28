// Switch พิสูจน์หลายครั้ง
// พิสูจน์ได้เฉพาะ เท่ากัน หรือไม่เท่ากัน เท่านั้น

let bus_no = 80;

switch (bus_no) {
  case 84:
    console.log("ไปวัดไร่ขิง");
    break;
  case 57:
    console.log("ไปพาต้า");
    break;
  case 123,80:  
    console.log("ไปสนามหลวง");
    break;
  case 515:
    console.log("ไปอนุสาวรีย์ไชยสมรภูมิ");
    break;
  default: // ไม่มีก็ได้
    console.log("ไม่รู้จักสายรถเมล์นี้"); 
}