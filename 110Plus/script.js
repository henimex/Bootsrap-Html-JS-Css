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