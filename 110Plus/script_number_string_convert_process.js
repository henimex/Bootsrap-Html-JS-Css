let d = new Date();

//set

let birthDay = new Date(1983, 1, 1);

let yYear = d.getFullYear() - birthDay.getFullYear();
let yMonth = d.getMonth() - birthDay.getMonth();
let yDay = d.getDate() - birthDay.getDate();

console.log(d);
console.log(d.getDate());
console.log(d.getDay()); // haftanın kacıncı gunu 0 pazar 1 ptesi 2 salı ...
console.log(d.getMonth()); // yılın kacıncı ayı 0 ocak 1 şubat 2 mart ...
console.log(typeof d);
console.log(yYear + " yıl", yMonth + ' ay' , yDay + ' gün');

//Yas hesaplama

var dt = new Date();

var dtC = new Date("1/1/1991");
console.log(dtC);

var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);

console.log(dtC);

var start = new Date("1/1/1990");
var end = new Date("1/1/1992");

var millisecond = end - start;

var saniye = millisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("MiliSeconds: " + millisecond);
console.log("Saniye : " + saniye);
console.log("Dakika: " + dakika);
console.log("Saat: " + saat);
console.log("Gün: " + gun);

var birthday = new Date("2/2/1983");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs)

console.log("MS olarak yas farkı " + ageDifMs);
console.log(ageDate.getUTCFullYear()-1970);

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019)
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7)

console.log(annelerGunu)

Numebers

val = parseInt("10a1");
val = isNaN("a10");

var num = 10.1245454541
val = num.toPrecision(5);

val = Math.PI;
val = Math.round(2.4) //0.5 üstü yukarı standart
val = Math.ceil(2.4) //her zaman yukarı yuvarlama
val = Math.floor(2.4) //her zaman aşağı yuvarlama

val = Math.sqrt(64);
val = Math.pow(2,4);
val = Math.abs(-100);
val = Math.min(2,6,5,4,9,1,5,4,6,7);
val = Math.max(2,6,5,4,9,1,5,4,6,7);
val = Math.random();
val = Math.ceil(Math.random()*100)

console.log(val);

var num = 15.123456789;

console.log(num.toPrecision(3));
console.log(num.toFixed(3));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.min(1, 2, 10, 56, 20));
console.log(Math.max(1, 2, 10, 56, 20));

var userInputMin = 20;
var userInputMax = 100;

console.log(
  Math.round(Math.random() * (userInputMax - userInputMin) + userInputMin),
  Math.round(userInputMin + Math.random() * (userInputMax - userInputMin))
);

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + mesaiUcreti * mesaiSuresi;

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

//String Metodları

const firstName = "Jospeh";
const lastName = "HenimeX";
const age = 35;
let hobbies = "sinema,spor,kitap,yazilim";

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
val = val1.substring(0, 10);

val = val1.substring(val1.indexOf("H"), 6);
val = val1.slice(10);

val = val1.replace("HenimeX", "Shenimex");
val = hobbies.split(',');

console.log(val);
console.log(typeof val);

//String Ornekleri

var sentence =
  "   Template Literals or template strings is the ability Have multi-line string without any funny business.   ";
var url = "http://sadikturan.com/ModernJavascipt KURSU sıfırdan ileri seviye";

console.log(sentence.length);
console.log(sentence.toLocaleLowerCase());
console.log(sentence.trim());
console.log(sentence.trim().split(" ").length);
console.log(sentence.replace("-", ""));

console.log(url.substring(url.indexOf("/") + 2));
console.log(url.substring(0, url.indexOf(":")));
console.log(url.startsWith('http'));

console.log(url.split(" ").length);
console.log(
  url.replace('Javascipt','JavaScript')
  .replaceAll(' ','/')
  .toLocaleLowerCase()+'.html'
  );

  console.log(
    url.replace('Javascipt','JavaScript')
    .replace(/ /g,'-')
    .replace(/ı/g,'i' )
    .toLocaleLowerCase()+'.html'
    );

console.log("Link Com İçeriyor mu ? " , url.indexOf('.com'))

//Template Literals

const fullName = 'Ahmet Turan';
const city = 'Eskişehir';
const birthday = 2005; 

let val;

val = `my name is ${fullName} ${ 2021-birthday} years old and I Live in ${city}. Adult State : ${2021-birthday > 18 ? 'Over 18':'Under 18'}`

console.log(val)
console.log(typeof val)

// Arrays Important Like Hell

let names = ["çınar", "sena", "ada", "yigit"];
let years = [2017, 1999, 2012, 2010];
let mix = [
  "test",
  "name",
  1983,
  null,
  undefined,
  ["sinema", "kitap okumak"],
  666,
];

names[0] = "ahmet";
names[6] = "cem";
names[names.length] = "ferhat";

years.push(1986);
years.unshift(1987);
mix.pop(); // Son elemanı siler
mix.shift(); // ilk elemanı siler
names.reverse(); //ters çevirme
years.sort();
let index = names.indexOf("ada");
let val = years.concat(names);

names.splice(2, 0, "seda"); //ikinci indexten sonra 0 eleman sil sonra 'seda' elemanını ekle

console.log(val)
console.log("Index : " + index);
console.log(names[0]);
console.log(typeof names);
console.log(years);
console.log(mix);

function over18(year) {
  let age = 2021 - year;
  return age >= 18;
}

let val3 = years.filter(over18)
let val2 = years.find(over18)
console.log(val2);
console.log(val3);

console.log(over18(2010));

console.log(names);

// Array Odev

let brands = ["Bmw", "Mercedes", "Opel", "Mazda"];
let numbers = [11, 2, 99, 5, 6, 24, 16];
var str = "Chavrolet,Dacia";
var strArr = str.split(",");
let val = numbers.sort((a, b) => a - b);

console.log(brands.length);
console.log(brands[0]);
console.log(brands[brands.length - 1]);

brands[brands.length] = "Renault"; //dizinin index numarasına göre ekleme
brands.splice(0, 0, "Toyota"); //yer degistirme indexten sonra ekleme yada silme 0. indexten sonra 1. indexi sil gonderileni ekle
brands.push("Fiat"); //standart ekleme
brands.unshift("Wolkswagen"); // en basa ekleme
brands.reverse();

brands.pop(); //son indexi silme
brands.shift(); // bas indexi silme
let newList = brands.concat(strArr);
console.log(newList.splice(newList.length - 3, 2));
console.log(newList.slice(6, 8)); //yazılan degerler arasını alır. 6 ve 7 gelir 8 almaz

console.log(brands.sort());
console.log("unordered " + numbers);
console.log("ordered numbers " + val);
console.log(brands.includes("Opel"));
console.log(strArr);
console.log(brands);
console.log(newList);

stdA = ["Esila", "Oygur", 2009];
stdB = ["Ali Alp", "Oygur", 2016];
stdC = ["Dilek", "Oygur", 1984];

students = [stdA, stdB, stdC];

console.log(students);

console.log(students[0][0])
console.log(students[0][1])
console.log(students[0][2])
