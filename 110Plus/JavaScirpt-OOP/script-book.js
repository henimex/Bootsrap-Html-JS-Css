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
  
  Human.prototype.lastName = 'OYGUR'
  
  let ali = new Human("ali", 1989, "teacher");
  
  console.log(ali.calculateAge());
  console.log(ali);
  console.log(ali.getName());
  console.log(ali.hasOwnProperty('firstName')); //true kendi ozelligi 
  console.log(ali.hasOwnProperty('lastName')); // prototype tarafından gelen ozellik
  
  console.clear();