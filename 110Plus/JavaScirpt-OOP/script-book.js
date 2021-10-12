function Person(firstName, birthYear, job) {
  this.firstName = firstName;
  // gelen deger  == parametredeki deger
  this.birthYear = birthYear;
  this.job = job;
  this.calculateAge = function () {
    return 2021 - this.birthYear;
  };
}

let yigit = new Person("yigit", 2011, "student");
let emel = new Person("emel", 1999, "assistant");

console.log(yigit.firstName);
console.log(emel.firstName);
console.log(emel.calculateAge());

console.clear();

let Human = function (firstName, birthYear, job) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.job = job;
};

Human.prototype.calculateAge = function () {
  return 2021 - this.birthYear;
};

Human.prototype.getName = function () {
  return this.firstName;
};

Human.prototype.lastName = "OYGUR";

let ali = new Human("ali", 1989, "teacher");

console.log(ali.calculateAge());
console.log(ali);
console.log(ali.getName());
console.log(ali.hasOwnProperty("firstName")); //true kendi ozelligi
console.log(ali.hasOwnProperty("lastName")); // prototype tarafından gelen ozellik

console.clear();

let PersonL1 = function (name, birthDay, job) {
  this.name = name;
  this.birthDay = birthDay;
  this.job = job;
};

PersonL1.prototype.calculateAge = function () {
  return 2021 - this.birthDay;
};

let Teacher = function (name, birthDay, job, subject) {
  PersonL1.call(this, name, birthDay, job);
  this.subject = subject;
};

Teacher.prototype = Object.create(PersonL1.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
  return "Hollo my name is ", this.name;
};

let ss = new PersonL1("dsadsa", 2001, "asd");
let emel = new Teacher("emel", 1988, "tecaher", "Math");
let eredem = new Teacher("eredem", 2001, "testyer", "what the");

console.log(Teacher.prototype.constructor);
console.log(ss.calculateAge());
console.log(emel);
console.log(emel.calculateAge());
console.log(eredem);

String.prototype.repeat = function (n) {
  return new Array(n + 1).join(this);
};

Array.prototype.selfRemove = function (member) {
  var index = this.indexOf(member);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

console.log("henimex ".repeat(4));

//CallBack Functions

function MultipleByTow(a, b, c, callback) {
  let array = [];
  for (let i = 0; i < arguments.length - 1; i++) {
    array[i] = callback(arguments[i] * arguments[i]);
  }

  return array;
}

function addOne(a) {
  return a + 1;
}

//let val = MultipleByTow(2, 11, 4);
let result = MultipleByTow(2, 11, 4, addOne);

// for (let i = 0; i < val.length; i++) {
//   val[i] = addOne(val[i]);
// }

console.log(result);
