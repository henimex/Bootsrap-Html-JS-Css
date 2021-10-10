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

//Loops

for (let i = 1; i < 10; i++) {
  console.log("Döngü Başı");
  if (i == 3) {
    console.log("Fav Numebr is : " + i);
    continue;
  }

  if (i == 6) {
    console.log("Bad Number " + i, " Breaked");
    break;
  }
  console.log(i);
  console.log("Döngü Sonu");
  console.log(":::::::::::");
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let val = "\n";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i} j : ${j}`);
    val += "* ";
  }
  val += "\n";
}

console.log(val);

let cars = ["Bmw", "Mercedes", "Toyota"];
let people = [
  { firstName: "JK", lastName: "Pole" },
  { firstName: "Jack", lastName: "Holie" },
  { firstName: "Ken", lastName: "Martin" },
];

for (let i = 0; i < cars.length; i++) {
  console.log("Araba : ", cars[i]);
}

//ForIn
for (const key in cars) {
  if (Object.hasOwnProperty.call(cars, key)) {
    const element = cars[key];
    console.log(`${key} ${element}`);
    console.log(
      "Arasında ki farkı cok analayamadım ama burda key yada i degeri index numarasını donuyor."
    );
    console.log("Boş olan fomr arrayde denenebilir.");
  }
}

// For Of
for (const iterator of people) {
  console.log("iterator ", iterator.firstName);
}

cars.forEach(function (item) {
  console.log("ForEach ", item);
});

// Map

let mapVal = people.map(function (person) {
  console.log("Awesome");
  return person.firstName + " " + person.lastName;
});

console.log("Map ", mapVal);

let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function (n) {
  return n * n;
});
5;

console.log(num);

//Demolar

randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
var left = 5;
var guess;
var counter = 0;
var challange = Number(prompt("Kac Defada Bileceksiniz."));

while (left > 0) {
  left--;
  counter++;
  guess = Number(prompt("bir sayı giriniz."));
  if (randomNumber == guess) {
    console.log(`Tebrikler ${counter} defada Bildiniz`);
    console.log(`Puan : ${100 - (100 / challange) * (counter - 1)}`);
    break;
  } else if (randomNumber < guess) {
    console.log("Aşağı");
  } else {
    console.log("Yukarı");
  }
  if (left == 0) {
    console.log("Hakkınız Bitti.");
  }
}


//Functions

function yasHesapla(dogumYili) {
  return 2021 - dogumYili;
}

function emeklilikHesapla(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let emeklilik = 65 - yas;

  if (emeklilik > 0) {
    console.log(`Sayın ${isim}; Emekli Olmanıza ${emeklilik} yıl kaldı`);
  } else {
    console.log(
      `Emekliliği yaş olarak hak etmiş bulunmaktasınız. Prim gün süreniz 160.000 doldurmus iseniz emekli olabilirsiniz.`
    );
  }
  return emeklilik;
}

let val = yasHesapla(1983);
console.log(val);

emeklilikHesapla(1983, "Ferhat");

//Function Declerations Expressions

function sum(a, b) {
  var c = a + b;
  return c;
}

const sumDif = function (a, b) {
  if (typeof a === "undefined") {
    a = 0;
  }

  typeof b === "undefined" ? (b = 0) : false;

  return a + b;
};

const sumDef = function (a = 0, b = 0) {
  return a + b;
};

console.log(sum(10, 5));
console.log(sumDif(10, 5));
console.log(sumDef(20, 90));

function argControl() {
  console.log(arguments);
}

function sumAll() {
  var total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

argControl(10, 50, "55", "ferhat");
console.log(sumAll(10, 10, 5, 6, "ss"));

// Demo

var hesapA = { ad: "Ferhat", hesapNo: "1245451", bakiye: 2000, ekHesap: 1000 };
var hesapB = { ad: "Dilek", hesapNo: "4561561", bakiye: 5000, ekHesap: 10000 };
var hesapc = { ad: "Esila", hesapNo: "2474418", bakiye: 300, ekHesap: 0 };

function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}. ${hesap.hesapNo} nolu hesap için işlem yapıalcaktır.`);
  if (hesap.bakiye >= miktar) {
    hesap.bakiye = hesap.bakiye - miktar;
    console.log(
      `Çekilmek İstenen Tutar : ${miktar} Bakiye : ${
        hesap.bakiye
      } paranızı alabilirsiniz.\n Hesap Bilgisi: ${
        hesap.bakiye - miktar
      } TL \n Ek Hesap : ${hesap.ekHesap}`
    );
  } else {
    console.log(
      `Çekilmek İstenen Tutar : ${miktar} \n Bakiye : ${hesap.bakiye} Ek Hesap Kontrolü Yapılıyor...`
    );
    var toplam = hesap.bakiye + hesap.ekHesap;
    if (toplam >= miktar) {
      var secim = confirm(
        "Kalan Tutarı Ek Hesabınızdan Kullanmak İstermisiniz."
      );
      console.log(secim)
      if (secim) {
        kalan = miktar - hesap.bakiye;
        hesap.bakiye = 0;
        hesap.ekHesap = hesap.ekHesap - kalan;
        console.log(
          `Bakiyenizden ${hesap.bakiye} TL Ek Hesabınızdan ise ${kalan} TL çekilmiştir.`
        );
        console.log(
          `Rapor : \n Bakiye : 0 TL \n Ek Hesap : ${hesap.ekHesap} TL dir.`
        );
      } else if (!secim) {
        console.log(
          `Bakiyeniz : ${hesap.bakiye} TL \n Ek Hesabınız : ${hesap.ekHesap} TL dir. Çekme işlemi iptal edildi. iyi günler dileriz.`
        );
      }
    } else {
      console.log(`Hesaplarınzda Yeterli bakiye bulunmamaktadır. \n 
        Bakiye : ${hesap.bakiye} TL\n
        Ek Hesap : ${hesap.ekHesap} TL \n
        Çekilmek istenene Tutar : ${miktar} TL. İyi Günler Dileriz.`);
    }
  }
}

paraCek(hesapA, 2500);
paraCek(hesapA, 2500);
paraCek(hesapA, 1000);

//Window Object

let val;
var a = 10;
val = window;

function abc() {
  return 0;
}

//var b = confirm("Are you sure you want to do this.")
var x = window.scrollX
var y = window.scrollY

console.log(val);
console.log(x , y);

// var location = window.location.href
// window.location.reload(false)
// console.log(location);
let isRedirected = sessionStorage.getItem('isRedirected'); if (!isRedirected) { sessionStorage.setItem('isRedirected', true); window.location.reload(true); }

let browser = window.navigator
let doc = window.document
let header = document.getElementById('header')
console.log(browser)
console.log(doc)
console.log(header)

//DOM - 1 New Things Fresh Information Knowladge Intel... AWESOME

// genel not getElemets e ulasıp islem yapabilmek icin sadece for methodu kullanılabilir getElements bir html collection doner. querySelectorAll NodeList dondugu icin forEach destekliyor

let element = document.getElementById("header");

val = element.className;
element.style.fontSize = "45px";
element.style.color = "red";
element.style.fontWeight = "bolder";
element.innerText = "Service is nOT Runnig <em>";
element.innerHTML = "<em> Service... I dont Know whats going on</em>";

console.log(document.querySelector("#header")); //ıd ye göre secme
console.log(document.querySelector(".selfLi").innerText); //class a gore tekli secme
console.log(document.querySelectorAll(".selfLi")); //class a gore coklu secme NodeList doner foreach atılır
console.log(document.querySelectorAll(".selfLi")[2].innerText); //class a gore NodeList içinden secme

document.querySelector("li").style.color = "red"; //bulunan ilk elemana uygular
document.querySelector("li:last-child").style.color = "blue"; //son elemana uygular
document.querySelector("li:nth-child(3)").style.color = "orange"; //belirtilen indexteki elemana erişir
document.querySelector("li:nth-child(7)").textContent =
  "OO Rubby... im coming for you"; //belirtilen indexteki elemana erişir

document.querySelector("li").classList.add("active"); //var olan classlara ekleme yapmak için
console.log(document.querySelector("li").classList); //mevcut class listesi

//Çoklu Element Seçimleri

let el1 = document.getElementsByClassName("selfLi");
let tagName = document.getElementsByTagName("li");
let el2 = (el1[1].style.fontSize = "25px"); // yukardaki tip ve icerik degistirme islemlerinin tamamı getten sonra index numarası ile elemente ulasarakta yapılabilir.
let aChildCard = document.getElementById("alinacakBelirlenmisAlan") //dıdısının dıdısına erişmek için sayfadaki tüm a lara degilde card altındaki a lara ornegin ıd yerine class vs de olabilir.
//let aChildCardChild = aChildCard.getElementsByTagName('a')

let tekilOlanLiler = document.querySelectorAll("li:nth-child(odd)") //farklı garip değişik olarakta çevrilir odd
let qall = document.querySelectorAll("li");
console.log(qall)

qall.forEach((element,index)=> {
    element.textContent = `${index} - test`
});


console.log(el1);
console.log(el2);

for (let i = 0; i < el1.length; i++) {
  el1[i].style.fontSize = "45px";
  el1[i].textContent =
    el1[i].textContent + " for dongusu ile degistirildi. " + i;
  el1[i].style.fontSize = "20px";
}

console.log("Id ile alınan element :" , element);
console.log("Yukardaki elementin class adı :" , val);
console.log("Tag name e gore alınmıs elementler : " , tagName);


//DOM - 2

let val;

let list = document.querySelectorAll("li");

val = list.childNodes; //:nodelist
val = list.children; //:html collection
val = list.parentElement;
val = list.parentNode;
val = list.childElementCount;

list.children[0].nextSibling;
list.children[0].nextElementSibling;

list.children[0].previousSibling;
list.children[0].previousElementSibling;


for (let i = 0; i< list.length; i++) {
  const element = array[i];
    }

val = list

for (let i = 0; i < list.length; i++) {
    console.log(list[i].nodeType)
    
}
console.log(val);
/*
Node Types:
1	Element	        Represents an element
2	Attr	        Represents an attribute
3	Text	        Represents textual content in an element or attribute
4	CDATASection	Represents a CDATA section in a document (text that will NOT be parsed by a parser)
*/

//DOM - 3

const taskList = document.querySelector("#ol1");
//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[1].removeAttribute('class');
// const h2 = document.createElement('h2');
// h2.setAttribute('class', 'card-header');
// h2.appendChild(document.createTextNode('New Text'));

let classlist = taskList.classList
classlist.add('newTestList')
classlist.remove('newTestList')

let att2 = document.querySelectorAll("li");
//let attribute = att2[0].children.getAttribute('href')


console.log(taskList);
console.log(classlist);
console.log(att2[0].childNodes[1].getAttribute('href'));
//console.log(attribute);


//Event - Mouse

const btn = document.querySelector("#btnDeleteAll");
const btnAdd = document.querySelector("#btnAdd");
const btnEventTester = document.querySelector("#btnEventTester");
const liler = document.querySelector("#ol1");

btn.addEventListener("click", () => {
  console.log("Delete All Clicked");
});

//btnAdd.addEventListener

btn.addEventListener("click", btnCl);
btn.addEventListener("mouseenter", eventHandler);
btn.addEventListener("mouseleave", eventHandler);
btnAdd.addEventListener("mouseover", hover);
btnEventTester.addEventListener("click", eventHandler);
btnEventTester.addEventListener("dblclick", eventHandler);
btnEventTester.addEventListener("mousedown", eventHandler);
liler.addEventListener("click", eventHandler);
liler.addEventListener("mousemove", eventHandler);

function btnCl() {
  console.log("Method : Delete All Clicked");
  //e.preventDefault();
}

function hover(e) {
  console.log("Method : Butonun Üzerine Gelindi");
  console.log(e);
  console.log(e.offsetX, e.offsetY);
  e.preventDefault();
}

function eventHandler(event) {
  console.log(`Event Type : ${event.type}`);
  
}

//Event - Keyboard

const input = document.querySelector('#nameInput');

input.addEventListener('keydown',eventHandler);
input.addEventListener('keyup',eventHandler);
input.addEventListener('focus',eventHandler);

function eventHandler(e){
    console.log(`Event Type : ${e.type}`);
    // console.log(`KeyKode : ${e.keyCode}`);
    // console.log(`KeyKode : ${e.target.value}`);
    e.target.style.backgroundColor = 'cyan';
}
