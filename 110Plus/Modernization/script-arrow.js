$("#titleLes").text("Arrow Function Work System");

let welcomeES5 = function () {
  console.log("Welcome ES5");
};

let welcomeES6 = () => {
  console.log("Welcome ES6");
};
let welcomeES6alt = () => console.log("Welcome ES6 Alternative");

welcomeES5();
welcomeES6();
welcomeES6alt();

let multply = function (x, y) {
  return x * y;
};

let multplyAlt = (x, y) => x * y;

multply();
multplyAlt();

const phones = [
  { name: "Samsung A7", price: 2500 },
  { name: "Ericson 556", price: 3500 },
  { name: "Sony 9", price: 1000 },
  { name: "IPhone 7", price: 1750 },
];

let pricese5 = phones.map(function (phone) {
  return phone.price;
});

console.log(pricese5);

let pricese6 = phones.map((phone) => phone.price);

console.log(pricese6);

const arr = [
  1, 2, 3, 6, 5, 4, 17, 5, 23, 94, 45, 4552, 7, 854, 78, 4, 82, 84, 4, 16, 5,
  73723, 14, 9, 0, 63, 26,
];

let evene5 = arr.filter(function (a) {
  return a % 2 == 0;
});

console.log(evene5);

let evene6 = arr.filter((a) => a % 2 == 0);

console.log(evene6);
//

let listES5 = {
  category: "phone",
  names: ["IPhone8", "Samsung S8", "Htc One"],
  call: function () {
    this.names.map(function (name) {
      console.log(`${this.category} ${name}`);
    });
  },
};

listES5.call();

let listES6 = {
  category: "phone",
  names: ["IPhone8", "Samsung S8", "Htc One"],
  call: function () {
    this.names.map((name) => {
      console.log(`${this.category} ${name}`);
    });
  },
};

listES6.call();

function Game5() {
  this.live = 0;
  this.addLive = function () {
    var self = this;
    this.oneUp = setInterval(function () {
      console.log(++self.live);
    }, 1000);
  };
}

let palyer5 = new Game5();
palyer5.addLive();

function Game6() {
    this.live = 0;
    this.addLive = function () {
      this.oneUp = setInterval(() =>{
        console.log(++this.live);
      }, 1000);
    };
  }
  
  let palyer6 = new Game6();
  palyer6.addLive();