function Employee(name, salary) {
  if (!(this instanceof Employee)) {
    return new Employee(name, salary);
  }
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
    var net = 0;

    if (payment <= 20000) {
      tax = Math.round((payment * 20) / 100);
      net = Math.round(payment - tax);
    } else if (payment > 20000 && payment <= 30000) {
      tax = Math.round((payment * 25) / 100);
      net = Math.round(payment - tax);
    } else if (payment > 30000) {
      tax = Math.round((payment * 27) / 100);
      net = Math.round(payment - tax);
    }
    return `Maaş ve Vergi Bilgisi v1: 
    \n==============================
    \nÇalışan İsmi : ${name}  
    \nAlınan Aylık : ${salary} TL
    \nÇalışılan Gün: ${days}
    \nGünlük Ücret : ${dailySalary} TL
    \nÖdenen Maaş  : ${payment} TL
    \nVergi        : ${tax} TL
    \nNet Ödenen   : ${net} TL
    \n==============================
    \n${name} 'e ${days} günde, günlük ${dailySalary} TL den Toplam ${payment} TL hesaplanmış, 
    Bu tutarın vergisi ${tax} TL olarak belirlenmiş ve ${net} TL Net olarak ödenmiştir.`;
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
  var net = 0;

  if (payment <= 20000) {
    tax = Math.round((payment * 20) / 100);
    net = Math.round(payment - tax);
  } else if (payment > 20000 && payment <= 30000) {
    tax = Math.round((payment * 25) / 100);
    net = Math.round(payment - tax);
  } else if (payment > 30000) {
    tax = Math.round((payment * 27) / 100);
    net = Math.round(payment - tax);
  }
  return {
    message: `Maaş ve Vergi Bilgisi v2: 
  \n==============================
  \nÇalışan İsmi : ${this.name}  
  \nAlınan Aylık : ${this.salary} TL
  \nÇalışılan Gün: ${days}
  \nGünlük Ücret : ${dailySalary} TL
  \nÖdenen Maaş  : ${payment} TL
  \nVergi        : ${tax} TL
  \nNet Ödenen   : ${net} TL
  \n==============================
  \n${this.name} 'e ${days} günde, günlük ${dailySalary} TL den Toplam ${payment} TL hesaplanmış, 
  Bu tutarın vergisi ${tax} TL olarak belirlenmiş ve ${net} TL Net olarak ödenmiştir.`,
    data: {
      days: days,
      dailySalary: dailySalary,
      tax: tax,
      payment: payment,
      net: net,
    },
  };
};

let ferhat = new Employee("Ferhat", 4500);
let dilek = Employee("Dilek", 4500);
let esila = new Employee("Esila", 4500);
let aliAlp = Employee("Ali Alp", 4500);

var employees = [ferhat, dilek, esila, aliAlp];

employees.forEach(function (item) {
  console.log(item.calculateTax());
});

let test = new Employee("test", 1500);
console.log(test.newCalculation().message);
console.log(test.newCalculation().data.days);
console.log(test.newCalculation().data.dailySalary);
console.log(test.newCalculation().data.tax);
console.log(test.newCalculation().data.payment);
console.log(test.newCalculation().data.net);
