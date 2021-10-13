$("#titleLes").text("Arrays !!! Most Important");


const boxes = document.querySelectorAll(".box");

/*
// ES5
let boxesES5 = Array.prototype.slice.call(boxes)
console.log(boxesES5)

boxesES5.forEach(function (box){
    box.style.backgroundColor = 'grey'
    box.style.border = '13px solid red'
})

for (let i = 0; i < boxesES5.length; i++){
    console.log(boxesES5[i])
    if (boxesES5[i].className== 'box m-3 red') {
        continue;
    }
    boxesES5[i].textContent = "Im not red and Changed to Orange ES5"
    boxesES5[i].style.backgroundColor = "orange"
}
*/
//ES6

Array.from(boxes).forEach(box => {box.style.backgroundColor = "cyan", box.style.border = "13px solid magenta"} )

var bocsesES6 = Array.from(boxes)

//forof işlemi
for (const box of bocsesES6) {
    if (box.className == "box m-3 red") {
        continue;
    }
    box.textContent = "Im not red and Changed to Pink ES6"
    box.style.backgroundColor = "pink"
}

let strAr = Array.from("Modern JavaScript")
console.log(strAr)

let products = [
    {prName:"Laptop", price:1000, stock:15},
    {prName:"Keyboard", price:2000, stock:1},
    {prName:"Mouse", price:3000, stock:2},
    {prName:"Mainboard", price:4000, stock:4},
]

console.log(Array.from(products, p => p))
console.log(Array.from(products, p => p.prName))

//Awesome self one line code
console.log(Array.from(products, p => p.stock > 2 ? `${p.prName} in Stock With : ${p.stock} quantity` : `${p.prName} in critick stock with : ${p.stock}`))
console.log(products.find(p => p.prName == 'Mouse'))
console.log(products.filter(p => p.price >= 2000))
products.findIndex(p => p.price > 2000)
console.log(products.findIndex(p => p.price > 2000))

let numbers = ['a',"b","c"]
let order = ['a',"b","c","x","f","z","d","o"]

let entries = numbers.entries();

for (let i of entries) {
    console.log(i)
}

let keys = numbers.keys();

for (const iterator of keys) {
    console.log(iterator)
}

let values = numbers.values();

for (const iterator of values) {
    console.log(iterator)
}

console.log(order.sort())