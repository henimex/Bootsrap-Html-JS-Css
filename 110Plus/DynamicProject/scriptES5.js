$("#titleLes").text("Dynamic Course Project ES5.js");
//https://picsum.photos/300/300
function Course(title, instructor, image) {
  this.title = title;
  this.instructor = instructor;
  this.image = image;
}

function UI() {}

UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  var html = `
    <tr>
        <td><img src="${course.image}"></img></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"</a>Delete</td>       
    </tr>
    `;

  list.innerHTML += html;
};

UI.prototype.clearControls = function () {
  const title = (document.getElementById("title").value = "");
  const instructor = (document.getElementById("instructor").value = "");
  const image = (document.getElementById("image").value = "");
};

UI.prototype.deleteCourse = function (course) {
  if (course.classList.contains("delete")) {
    course.parentElement.parentElement.remove();
  }
};

UI.prototype.showAlert = function (message, className) {
  var alert = `
    <div class="alert alert-${className}">
        ${message}
    </div>
    `;

    const row = document.querySelector('.row')
    row.insertAdjacentHTML('beforeBegin',alert)

    setTimeout(function () {
        document.querySelector(".alert").remove()
    },3000)
};

document
  .getElementById("new-course")
  .addEventListener("submit", function (event) {
    //Connection between HTML and script variables
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    //Cerating Object
    const course = new Course(title, instructor, image);

    const ui = new UI();

    if (title === "" || instructor === "" || image === "") {
      ui.showAlert("Please complete the form", "warning");
    } else {
      ui.addCourseToList(course);

      ui.clearControls();
      ui.showAlert("Course Added", "success");
    }

    event.preventDefault();
  });

document
  .getElementById("course-list")
  .addEventListener("click", function (event) {
    const ui = new UI();
    ui.deleteCourse(event.target);
    ui.showAlert("Course Deleted", "info");
  });
