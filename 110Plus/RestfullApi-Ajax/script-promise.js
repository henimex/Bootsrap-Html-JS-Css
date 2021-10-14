$("#titleLes").text("Promise");
/*
//Simple Example
var products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "GPU", price: 2000 },
  { id: 4, name: "Mainboard", price: 4000 },
];

function addProduct(product, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      products.push(product);
      let added = true;
      if (added) {
        resolve();
      } else {
        reject("Error : 500");
      }
    });
  });
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => {
      console.log(p.name);
    });
  }, 4000);
}

addProduct({ id: 5, name: "HeadPhone", price: 5000 })
  .then(getProducts)
  .then(console.log("Method Bitti - Beklenildigi gibi calısmadı"))
  //Beklenildiği gibi calısmadı
  .catch(function (err) {
    console.error(err);
  });

//Promise 2

var p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Success");
  } else {
    reject("Unknown Error");
  }
});

p.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(5);
  }, 1000);
})
  .then(function (number) {
    console.log(number);
    return number * number;
  })
  .then(function (number) {
    console.log(number);
    return number * number;
  })
  .then(function (number) {
    console.log(number);
  });

//Veri tabanından yapılan once satıs girisi sonra id si ile satıstan alınan id ye detay eklenmesi islemleri promise ile yapılacak

const isMumHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMumHappy) {
    const phone = {
      name: "Nokia",
      price: 500,
      color: "red",
    };
    resolve(phone);
    console.log("resolve")
  } else {
    const error = new Error("Mum is not happy");
    reject(error);
  }
});

const showPhone = function (phone) {
  const message = `This is my new Phone ${phone.name}`;
  return Promise.resolve(message);
};

const askMum = function () {
  willGetNewPhone
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const askMumSec = function () {
  willGetNewPhone.then(showPhone).then(message=>console.log(message)).catch((error) => {
    console.log(error);
  });
};

askMumSec();
*/

//Uygulama

// headers: { "content-type": "application/json" }

let myObj = {
  method: "GET",
  url: "https://randomuser.me/api/?results=5",
};

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (xhr.header) {
      Object.keys[obj.headers].forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };

    xhr.send();
  });
};

let buildHTML = function (data) {
    let users = JSON.parse(data);
    console.log(users.results);
    let html = "";
    users.results.forEach((user) => {
      html += `
          <div>
              <img src="${user.picture.medium}">
              <div>
                  ${user.name.title}
                  ${user.name.first}
                  ${user.name.last}
              </div>
          </div>
          `;
    });
    document.querySelector("#users").innerHTML = html;
    return Promise.resolve("HTML Loaded");
  };
  

request(myObj)
  .then(buildHTML)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

