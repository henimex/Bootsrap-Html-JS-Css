//UI Variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items = ["item 1", "item 2", "item 3", "item 4"];

eventListeners();

loadItems();

function loadItems() {
  items = getItemsFromLocalStorage();
  items.forEach(function (item) {
    createItem(item);
  });
}

function getItemsFromLocalStorage() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

function setItemToLocalStorage(text) {
  items = getItemsFromLocalStorage();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

function eventListeners() {
  form.addEventListener("submit", addNewItem);
  taskList.addEventListener("click", deleteItem);
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
  if (checkInput()) {
    createItem(input.value);
    setItemToLocalStorage(input.value);

    input.value = "";
    e.preventDefault();
  }
}

function checkInput() {
  if (input.value === "") {
    alert("Add New Item");
    console.error("Empty Input Adding Cancalled");
    return false;
  }
  return true;
}

function createA() {
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';
  return a;
}

function createLi(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));
  return li;
}

function createItem(text) {
  const li = createLi(text);
  const a = createA();

  li.appendChild(a);
  taskList.appendChild(li);
}

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are you sure you want to delete")) {
      e.target.parentElement.parentElement.remove();
      deleteItemFromLocalStorage(
        e.target.parentElement.parentElement.textContent
      );
    }
  }
  e.preventDefault();
}

//3 tane i phone 11 128 gb

function deleteItemFromLocalStorage(text) {
  items = getItemsFromLocalStorage();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}

function deleteAllItems(e) {
  if (confirm("Are you sure you want to delete all")) {
    //taskList.innerHTML = "";
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }

  //sorunlu calısıyor
  //   if (confirm("Are you sure you want to delete all")) {
  //     taskList.childNodes.forEach(function (item) {
  //       if (item.nodeType === 1) {
  //           console.log(item)
  //         item.remove();
  //       }
  //     });
  //   }

  e.preventDefault();
}
