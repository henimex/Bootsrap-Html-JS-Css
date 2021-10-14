$("#titleLes").text("Fetch Api");

function getText() {
  fetch("text.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getText();

function getJson() {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getJson();

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

function getApi() {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users.results);
      users.results.forEach((user) => console.log(user.name.first));
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
    })
    .catch((error) => {
      console.log(error);
    });
}

getApi();

function postApi() {
  const url = "https://jsonplaceholder.typicode.com/todos/";

  var data = {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "sample",
      body: "sample body",
    }),
    header: new Headers({
      "content-type": "application/json"
    })
  };

  fetch(url, data).then((response) => {
    console.log(response)
  });
}

function postFromSite() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

postFromSite();
postApi();
