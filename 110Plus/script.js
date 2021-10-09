// // if else

const firstName = "Sena";
const age = 22;
const isStudent = true;
const school = "University";
const id = 26;

if (firstName === "Sena") {
  console.log("Merhaba Sena");
}

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Not Adult");
}

if (typeof id !== "undefined") {
  console.log(`ID : ${id}`);
} else {
  console.log("id is not defined");
}

// // Switch

let category = "telefon";

switch (category) {
  case "telefon":
    console.log("telefon kagetorisi");
    break;

  case "bilgisayar":
    console.log("bilgisayar kagetorisi");
    break;

  default:
    console.log("takipsiz kategori");
    break;
}

let day;
let work;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;

  default:
    day = "Welcome to Hell";
    break;
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    work = "No working today. Its weekend";
    break;

  case 1:
  case 2:
  case 3:
  case 4:
    work = "Keep working. Its work week";
    break;

  default:
    work = "You probably Dead.";
    break;
}

switch (true) {
  case age >= 12 && age < 18:
    console.log(`1 ${firstName} A1 ve A2 grubu sürücü olabilir`);
    break;

  case age >= 18 && age <= 25:
    console.log(`2 ${firstName} A B ve C grubu sürücü olabilir`);
    break;

  case age > 25 && age <= 55:
    console.log(`3 ${firstName} A B C D E F G grubu sürücü olabilir`);
    break;
  case age >= 56 && age < 65:
    console.log(`4 ${firstName} Doktor raporu ile B grubu sürücü olabilir`);
    break;
  case age >= 65:
    console.log(`5 ${firstName} Sürücü olabilme yaşı üstündesiniz.`);
    break;

  default:
    console.log(`0 ${firstName} ehliyet alabilecek yaşa henüz ulaşılmamış`);
    break;
}

console.log(`Today is : ${day}`);
console.log(`Work Staatus : ${work}`);

//Odev

let carExit = new Date("4/20/2017");
let today = Date.now();
let useTimeMS = Date.now() - carExit.getTime();
let useTime = new Date(useTimeMS)
let maintaince;

// var saniye = millisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gun = saat / 24;

console.log(useTime.getUTCFullYear()-1970);

// switch (true) {
//     case today.getDay() - carExit.getFullYear() == 1:
//         maintaince = "1 Yıllık Bakım Süresi Gelmiştir."
//         break;

//     default:
//         break;
// }
