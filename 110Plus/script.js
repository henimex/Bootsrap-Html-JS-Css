// let d = new Date();

// //set

// let birthDay = new Date(1983, 1, 1);

// let yYear = d.getFullYear() - birthDay.getFullYear();
// let yMonth = d.getMonth() - birthDay.getMonth();
// let yDay = d.getDate() - birthDay.getDate();

// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay()); // haftanın kacıncı gunu 0 pazar 1 ptesi 2 salı ...
// console.log(d.getMonth()); // yılın kacıncı ayı 0 ocak 1 şubat 2 mart ...
// console.log(typeof d);
// console.log(yYear + " yıl", yMonth + ' ay' , yDay + ' gün');

// Yas hesaplama

// var dt = new Date();

// var dtC = new Date("1/1/1991");
// console.log(dtC);

// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth - 1);

// console.log(dtC);

// var start = new Date("1/1/1990");
// var end = new Date("1/1/1992");

// var millisecond = end - start;

// var saniye = millisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gun = saat / 24;

// console.log("MiliSeconds: " + millisecond);
// console.log("Saniye : " + saniye);
// console.log("Dakika: " + dakika);
// console.log("Saat: " + saat);
// console.log("Gün: " + gun);

// var birthday = new Date("2/2/1983");
// var ageDifMs = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDifMs)

// console.log("MS olarak yas farkı " + ageDifMs);
// console.log(ageDate.getUTCFullYear()-1970);

// var annelerGunu = new Date();
// annelerGunu.setHours(0,0,0,0);
// annelerGunu.setFullYear(2019)
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);

// while (annelerGunu.getDay() != 0) {
//     annelerGunu.setDate(annelerGunu.getDate()+1)
// }
// annelerGunu.setDate(annelerGunu.getDate()+7)

// console.log(annelerGunu)

// Numebers

// val = parseInt("10a1");
// val = isNaN("a10");

// var num = 10.1245454541
// val = num.toPrecision(5);

// val = Math.PI;
// val = Math.round(2.4) //0.5 üstü yukarı standart
// val = Math.ceil(2.4) //her zaman yukarı yuvarlama
// val = Math.floor(2.4) //her zaman aşağı yuvarlama

// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-100);
// val = Math.min(2,6,5,4,9,1,5,4,6,7);
// val = Math.max(2,6,5,4,9,1,5,4,6,7);
// val = Math.random();
// val = Math.ceil(Math.random()*100)

// console.log(val);

// var num = 15.123456789;

// console.log(num.toPrecision(3));
// console.log(num.toFixed(3));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.min(1, 2, 10, 56, 20));
// console.log(Math.max(1, 2, 10, 56, 20));

// var userInputMin = 20;
// var userInputMax = 100;

// console.log(
//   Math.round(Math.random() * (userInputMax - userInputMin) + userInputMin),
//   Math.round(userInputMin + Math.random() * (userInputMax - userInputMin))
// );

// var brutMaas = 3700;
// var mesaiUcreti = 10.3;
// var mesaiSuresi = 42;

// var toplamBrutMaas = brutMaas + mesaiUcreti * mesaiSuresi;

// var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

// console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

//String Metodları

const firstName = "Jospeh";
const lastName = "HenimeX";
const age = 35;

let val;

val = firstName + " " + lastName;
val = "Ferhat";
val += " Henimex";

val1 =
  "My Name is : " +
  firstName +
  " " +
  lastName +
  " and my age " +
  age +
  " Eskişehir'de yaşıyorum";

val = firstName.concat(" ", lastName);
//val = val.length;
val = val.toUpperCase();
val = val.toLowerCase();

val = val1[0];

val = val1.indexOf("X");
val = val1.substring(0,10);

val = val1.substring(val1.indexOf("H"),6)

console.log(val);
console.log(typeof val);
