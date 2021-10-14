$("#titleLes").text("Async & Await");

async function foo() {
  return "Another request to server";
}

console.log(foo());

foo().then((result) => console.log(result));

function getCategory() {
  return new Promise((resolve) => {
    console.log("1-Request sent get category called waitng for response");
    setTimeout(() => {
      resolve("phone");
      console.log("2-Response ready - 200");
    }, 3000);
  });
}

function getProducts(category) {
  return new Promise((resolve) => {
    console.log("3-Category info received waiting for query result");
    setTimeout(() => {
      console.log("4-Data list ready");
      resolve(`5 products in ${category} category`);
      
    }, 1000);
  });
}

//with promise
// getCategory()
//   .then(getProducts)
//   .then((result) => console.log(result));

async function getDifferent() {
  try {
    let category = await getCategory();
    let result = await getProducts(category);
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  finally{
    console.log("5-Data listed Final Line with success and not success");
  }
}

getDifferent();
