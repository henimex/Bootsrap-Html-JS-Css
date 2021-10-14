$("#titleLes").text("Ajax & XHR-Json & XML");

document.querySelector("#getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {
  var loadImage = document.querySelector("#loading");
  loadImage.style.display = "block";
  const token = "5xp32taznm1lnaxdl4d6odbbbi616v5d9ulnomn8";
  const apiUrl =
    "https://api.json-generator.com/templates/4dZX5JArkGEa/data?delay=4";
  const localFile = "data.json";

  setTimeout(() => {}, 1500);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  //xhr.send();
  xhr.onload = function () {
    if (this.status === 200) {
      loadImage.style.display = "none";
      let employees = JSON.parse(this.responseText);
      let html = "";
      employees.forEach((employee) => {
        html += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.phone}</td>
                <td>${employee.email}</td>
                <td>${employee.country}</td>
                <td>${employee.numberrange}</td>
                <td>${employee.postalZip}</td>
            </tr>
            `;
      });
      document.querySelector("#employees").innerHTML = html;
      console.log(this.status);
    }
  };
  xhr.send();
}

//Callback
var products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "GPU", price: 2000 },
  { id: 4, name: "Mainboard", price: 4000 },
];

let added = true;

function addProduct(product, callback) {
  if (added) {
    setTimeout(() => {
      products.push(product);
      callback(null,product);
    }, 2000);
  } else {
    callback("500",product);
  }
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => {
      console.log(p.name);
    });
  }, 1000);
}

addProduct({ id: 5, name: "HeadPhone", price: 5000 }, getProducts);
addProduct({ id: 5, name: "HeadPhone", price: 5000 }, function (error, data) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Data : ", data);
  }
});
