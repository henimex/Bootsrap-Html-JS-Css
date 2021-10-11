function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
  this.calculateTax = function () {
    var firstDate = new Date(2021, 0, 1);
    var today = new Date();
    var difference = today.getTime() - firstDate.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    var dailySalary = Math.round(salary / 30);
    var tax = 0;
    var payment = Math.round(dailySalary * days);

    if (payment <= 20000) {
      tax = Math.round((payment * 20) / 100);
    } else if (payment > 20000 && payment <= 30000) {
      tax = Math.round((payment * 25) / 100);
    } else if (payment > 30000) {
      tax = Math.round((payment * 27) / 100);
    }
    return `Maaş ve Vergi Bilgisi v1: 
    \n==============================
    \nÇalışan İsmi : ${name}  
    \nAlınan Aylık : ${salary} TL
    \nÇalışılan Gün: ${days}
    \nGünlük Ücret : ${dailySalary} TL
    \nÖdenen Maaş  : ${payment} TL
    \nVergi        : ${tax} TL
    \n==============================
    \n${name} 'e ${days} günde, günlük ${dailySalary} TL den Toplam ${payment} TL ödenmiş. 
    Bu ödenen tutarın vergisi ${tax} TL olarak hesaplanmıştır.`;
  };
}

Employee.prototype.newCalculation = function () {
  var firstDate = new Date(2021, 0, 1);
  var today = new Date();
  var difference = today.getTime() - firstDate.getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  var dailySalary = Math.round(this.salary / 30);
  var tax = 0;
  var payment = Math.round(dailySalary * days);

  if (payment <= 20000) {
    tax = Math.round((payment * 20) / 100);
  } else if (payment > 20000 && payment <= 30000) {
    tax = Math.round((payment * 25) / 100);
  } else if (payment > 30000) {
    tax = Math.round((payment * 27) / 100);
  }
  return `Maaş ve Vergi Bilgisi v2: 
  \n==============================
  \nÇalışan İsmi : ${this.name}  
  \nAlınan Aylık : ${this.salary} TL
  \nÇalışılan Gün: ${days}
  \nGünlük Ücret : ${dailySalary} TL
  \nÖdenen Maaş  : ${payment} TL
  \nVergi        : ${tax} TL
  \n==============================
  \n${this.name} 'e ${days} günde, günlük ${dailySalary} TL den Toplam ${payment} TL ödenmiş. 
  Bu ödenen tutarın vergisi ${tax} TL olarak hesaplanmıştır.`;
};

let ferhat = new Employee("Ferhat", 4500);
let dilek = new Employee("Dilek", 4500);
let esila = new Employee("Esila", 4500);
let aliAlp = new Employee("Ali Alp", 4500);

var employees = [ferhat, dilek, esila, aliAlp];

employees.forEach(function (item) {
  console.log(item.calculateTax());
});

let test = new Employee("test",1500);
console.log(test.newCalculation());