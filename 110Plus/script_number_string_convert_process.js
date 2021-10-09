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

let carExit = new Date("10/01/2021");
carExit.setHours(0, 0, 0, 0);
let today = Date.now();
let useTimeMS = Date.now() - carExit.getTime();
let useTime = new Date(useTimeMS);
let useTimeDay = useTimeMS / (1000 * 60 * 60 * 24);
let useTimeYear = useTime.getFullYear() - 1970;
let maintainceYear;
let maintaince;

switch (true) {
  case useTimeDay >= 365 && useTimeDay < 365 * 2:
    maintainceYear = 1;
    break;
  case useTimeDay >= 365 * 2 && useTimeDay < 365 * 3:
    maintainceYear = 2;
    break;
  case useTimeDay >= 365 * 3 && useTimeDay < 365 * 4:
    maintainceYear = 3;
    break;
  case useTimeDay >= 365 * 4 && useTimeDay < 365 * 5:
    maintainceYear = 4;
    break;
  case useTimeDay >= 365 * 5 && useTimeDay < 365 * 6:
    maintainceYear = 5;
    break;

  case useTimeDay <= 5:
    maintaince =
      "1 Yıl yada 15.000 KM kadar bakım yaptırmanıza gerek yoktur " +
      useTimeDay;
    break;

  case useTimeDay >= 365 * 15:
    maintaince = "Aracı Değiştiriniz. " + useTimeDay;
    break;

  default:
    maintaince = "Bakım Süreniz Henüz Gelmemiş " + useTimeDay;
    break;
}
maintaince ? console.log(maintaince) : null;
maintainceYear
  ? console.log(
      `${maintainceYear} Yıllık Bakım Süresi Gelmiştir. " + ${useTimeDay}`
    )
  : null;

let userName = "Admin";
let password = "TheMaster";

function login(id, pw) {
  console.log("Please Enter ID and PW");
  if (id !== null) {
    if (id === "admin" && pw === "TheMaster") {
      console.log("Welcome!");
    } else if (id === "admin" && pw !== "TheMaster") {
      console.log(`Sorry ${id} ${pw} is wrong`);
      console.log(`Wrong Password`);
    } else if (id !== "admin") {
      console.log("I Dont Know You");
      return;
    } else {
      console.log("Login Cancelled");
    }
  } else {
    console.log("Cancelled");
    return;
  }
}

function loginv2(id, pw) {
  var id = prompt("Who's there?");
  var pw;
  if (id !== null) {
    if (id === userName) {
      pw = prompt("Password?");
      if (pw !== null) {
        if (pw == password) {
          console.log("Welcome!");
        } else if (pw !== password) {
          console.log("Wrong Password");
        }
      } else {
        console.log("Canceled.");
        return;
      }
    } else if (id !== userName) {
      console.log("I don't know you");
    }
  } else {
    console.log("Canceled.");
    return;
  }
}

loginv2();

// Object Literals

let val;

let person = {
  firstName: "Esila",
  lastName: "Oygur",
  age: 13,
  hobbies: ["Kitap Okumak", "Müzik Dinlemek", "Film İzlemek"],
  adress: {
    city: "Eskişehir",
    country: "Türkiye",
  },

  getBirthday: function () {
    return new Date(Date.now()).getFullYear() - this.age;
  },
};

let people = [
  {
    firstName: "Ali Alp",
    lastName: "Oygur",
    age: 4,
    hobbies: ["Kitap Okumak", "Müzik Dinlemek", "Film İzlemek"],
    adress: {
      city: "Eskişehir",
      country: "Türkiye",
    },

    getBirthday: function () {
      return new Date(Date.now()).getFullYear() - this.age;
    },
  },
  {
    firstName: "Dilek",
    lastName: "Oygur",
    age: 36,
    hobbies: ["Temizlik", "Uyku", "Cep Telefonu"],
    adress: {
      city: "Eskişehir",
      country: "Türkiye",
    },

    getBirthday: function () {
      return new Date(Date.now()).getFullYear() - this.age;
    },
  },
  {
    firstName: "Ferhat",
    lastName: "Oygur",
    age: 37,
    hobbies: ["Yazılım", "Uzay", "Oyun"],
    adress: {
      city: "Eskişehir",
      country: "Türkiye",
    },

    getBirthday: function () {
      return new Date(Date.now()).getFullYear() - this.age;
    },
  },
];

val = person.adress.city;

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(element => {
    console.log(element.firstName)
});

console.log(people)
console.log(person)
console.log(typeof people)
console.log(typeof person)

// Object Literals App

var aracBilgileri = [
  {
    id: "bmw116d_123",
    model: "bmw 116d",
    yil: 2015,
    renk: "Beyaz",
    servisKayitlari: [
      {
        id: this.id + "_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 900,
        detay: [
          {
            id: "bmw116d_123_1",
            aciklama: "yag degisimi",
            ucret: 300,
          },
          {
            id: "bmw116d_123_2",
            aciklama: "filtre degisimi",
            ucret: 300,
          },
          {
            id: "bmw116d_123_3",
            aciklama: "hidrolik degisimi",
            ucret: 300,
          },
        ],
      },
      {
        id: this.id + "_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,
        detay: [
          {
            id: "bmw116d_123_2_1",
            aciklama: "cam degisimi",
            ucret: 600,
          },
          {
            id: "bmw116d_123_2_2",
            aciklama: "benzin pompası degisimi",
            ucret: 500,
          },
          {
            id: "bmw116d_123_2_3",
            aciklama: "kışlık lastik degisimi",
            ucret: 300,
          },
          {
            id: "bmw116d_123_2_4",
            aciklama: "baskı balata degisimi",
            ucret: 400,
          },
        ],
      },
      {
        id: this.id + "_3",
        tarih: "15.01.2018",
        km: "13000",
        ucret: 600,
        detay: [
          {
            id: "bmw116d_123_3_1",
            aciklama: "hava filtresi degisimi",
            ucret: 150,
          },
          {
            id:  "bmw116d_123_3_2",
            aciklama: "kapı kolu degisimi",
            ucret: 200,
          },
          {
            id:  "bmw116d_123_3_3",
            aciklama: "koltuk kılfı takıldı",
            ucret: 250,
          },
        ],
      },
    ],
  },
  {
    id: "ww_p_16_555",
    model: "wolkswagen",
    yil: 2001,
    renk: "Gri",
    servisKayitlari: [
      {
        id: this.id + "_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 600,
        detay: [
          {
            id:  "ww_p_16_555_1_1",
            aciklama: "yag degisimi",
            ucret: 100,
          },
          {
            id:  "ww_p_16_555_1_2",
            aciklama: "filtre degisimi",
            ucret: 100,
          },
          {
            id: "ww_p_16_555_1_3",
            aciklama: "hidrolik degisimi",
            ucret: 100,
          },
        ],
      },
      {
        id: this.id + "_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,
        detay: [
          {
            id: "ww_p_16_555_2_1",
            aciklama: "cam degisimi",
            ucret: 600,
          },
          {
            id:"w_p_16_555_2_2",
            aciklama: "benzin pompası degisimi",
            ucret: 500,
          },
          {
            id:  "w_p_16_555_2_3",
            aciklama: "kışlık lastik degisimi",
            ucret: 300,
          },
          {
            id: "w_p_16_555_2_4",
            aciklama: "baskı balata degisimi",
            ucret: 400,
          },
        ],
      },
      {
        id: this.id + "_3",
        tarih: "15.01.2018",
        km: "13000",
        ucret: 600,
        detay: [
          {
            id:  "w_p_16_555_3_1",
            aciklama: "hava filtresi degisimi",
            ucret: 150,
          },
          {
            id:  "w_p_16_555_3_2",
            aciklama: "kapı kolu degisimi",
            ucret: 200,
          },
          {
            id:  "w_p_16_555_3_3",
            aciklama: "koltuk kılfı takıldı",
            ucret: 250,
          },
        ],
      },
    ],
  },

  {
    id: "opelastra01_123",
    model: "opel_astra 116d",
    yil: 2005,
    renk: "Mavi",
    servisKayitlari: [
      {
        id: this.id + "_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 900,
        detay: [
          {
            id: "w_p_16_555_4_1",
            aciklama: "yag degisimi",
            ucret: 300,
          },
          {
            id: "w_p_16_555_4_2",
            aciklama: "filtre degisimi",
            ucret: 300,
          },
          {
            id: "w_p_16_555_4_3",
            aciklama: "hidrolik degisimi",
            ucret: 300,
          },
        ],
      },
      {
        id: this.id + "_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,
        detay: [
          {
            id: "w_p_16_555_5_1",
            aciklama: "cam degisimi",
            ucret: 600,
          },
          {
            id: "w_p_16_555_5_2",
            aciklama: "benzin pompası degisimi",
            ucret: 500,
          },
          {
            id: "w_p_16_555_5_3",
            aciklama: "kışlık lastik degisimi",
            ucret: 300,
          },
          {
            id: "w_p_16_555_5_4",
            aciklama: "baskı balata degisimi",
            ucret: 400,
          },
        ],
      },
      {
        id: this.id + "_3",
        tarih: "15.01.2018",
        km: "13000",
        ucret: 600,
        detay: [
          {
            id: "w_p_16_555_4_1",
            aciklama: "hava filtresi degisimi",
            ucret: 150,
          },
          {
            id: "w_p_16_555_4_2",
            aciklama: "kapı kolu degisimi",
            ucret: 200,
          },
          {
            id: "w_p_16_555_4_3",
            aciklama: "koltuk kılfı takıldı",
            ucret: 250,
          },
        ],
      },
    ],
  },
];
console.log("trest")
console.log(aracBilgileri)