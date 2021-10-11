console.error("Type Order is MATTER !!! Be Careful");
function Person(name) {
  this.name = name;
}

Person.prototype.Introduce = function () {
  console.log("Hello my name is " + this.name);
};

function Teacher(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log("I teach " + this.branch);
};

function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;
Student.prototype.exitClass = function () {
  console.log(this.name + " (" + this.number + ") left the class");
};

function HeadMaster(name, branc) {
  Teacher.call(this, name, branc);
}
HeadMaster.prototype = Object.create(Teacher.prototype);

HeadMaster.prototype.constructor = HeadMaster;
HeadMaster.prototype.beObserver = function () {
  console.log(
    this.name + " Entered the " + this.branch + " Lesson as an Observer"
  );
};

let p1 = new Person("Ali");
let t1 = new Teacher("Esila", "Math");
let s1 = new Student("Dilek", 66);
let h1 = new HeadMaster("Lütfi", "History");

p1.Introduce();
t1.Introduce();
t1.teach();
s1.Introduce();
s1.exitClass();
h1.Introduce();
h1.teach();
h1.beObserver();

/* Person(1:1)  > Teacher(2:1) > HeadMaster(4:1,2) 
*               > Student(3:1)
 *               
 *   (HeadMaster Also takes the prototype of Person and Teacher !)
 *
 */
