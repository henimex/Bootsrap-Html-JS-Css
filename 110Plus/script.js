//Local Storage
const firstName = localStorage.setItem("firstName", "Joseph");
const lastName = localStorage.setItem("lastName", "HenimeX");
let hobbies = ['Bisiklet', 'Yüzme', 'Film']

localStorage.setItem("hobbies", JSON.stringify(hobbies))
let lsHobbies = JSON.parse(localStorage.getItem("hobbies"))

let val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");
localStorage.removeItem("lastName")
//localStorage.clear();
console.log(val);
console.log(lsHobbies);
console.log(localStorage);


//Session Storage

const city = sessionStorage.setItem("city", "Eskisehir");
const country = sessionStorage.setItem("country", "Türkiye");

console.log(sessionStorage);
