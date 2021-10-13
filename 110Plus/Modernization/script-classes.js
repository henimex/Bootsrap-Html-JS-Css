$("#titleLes").text("Classes & Static Methods & Sub Classes");

//ES5

var PersonES5 = function (name, job, birth) {
  this.name = name;
  this.job = job;
  this.birth = birth;
};

PersonES5.prototype.ageCalc = function () {
  return new Date().getFullYear() - this.birth;
};

var test = new PersonES5("tst", "student", 1983);

console.log(test.ageCalc());

//ES6 constructor in js ? wierd

class PersonES6 {
  constructor(name, job, birth) {
    this.name = name;
    this.job = job;
    this.birth = birth;
  }

  ageCalc() {
    return new Date().getFullYear() - this.birth;
  }

  static sayHi() {
    console.log("hello there");
  }
  static sayHiWithP(parameter = "Default Params") {
    console.log("hello there", parameter);
  }
}

let ali = new PersonES6("ali", "teacher", 2001);
console.log(ali.ageCalc());

console.log(test);
console.log(ali);

//Proto da olusturulan method tek instance olusturur ve bu methodu 1000 tane obje referansı "class yada constructor function objeleri" nin her biri ayrı ayrı tek instance üzerinden methodu kullanır.

//Static Methods

//ali.sayHi() // Error !! Uncaught TypeError: ali.sayHi is not a function at script-classes.js:47
// Statik metodlar ana class yada cons ta olusturulan obje referanslarından degil direk objenin kendisinden cagrılmalıdır.
// ali  bir PersonES6 objesi yani bu objeden classtan türemis bir obje ben sayHi() methoduna ulasmak istiyorsam objenin ana referansını cagırmalıyım yani PersonES6.sayHi()
PersonES6.sayHiWithP("From Base Object");
PersonES6.sayHiWithP();
PersonES6.sayHi();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    //burdaki a.x ve b.y olayını tam anlamadım
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    console.log("a.x", a.x);
    console.log("b.x", b.x);
    console.log("a.y", a.y);
    console.log("b.y", b.y);

    console.log("a", a);
    console.log("b", b);
    //console.log("x",x) //x is not defined error
    //console.log("y",y) //y is not defined error
    return Math.hypot(dx, dy);
  }
}

const d1 = new Point(11, 12, 13, 14);
const d2 = new Point(21, 22);

let result = Point.distance(d1, d2);
console.log(result);

//Sub Classes ES6

class SubPersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi IM ${this.firstName}`;
  }
}

class Customer extends SubPersonES6 {
  constructor(firstName, lastName, phone, userName) {
    super(firstName, lastName);
    this.phone = phone;
    this.userName = userName;
  }

  static getTotal() {
    return 1000;
  }
}

let customerES6 = new Customer("joseph", "henimex", "156454564", "jhenimex");

console.log(customerES6);
console.log(customerES6.sayHi());
//console.log(customerES6.getTotal()); //error
console.log(Customer.getTotal());
