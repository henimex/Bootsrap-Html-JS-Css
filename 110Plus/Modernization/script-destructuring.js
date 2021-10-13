$("#titleLes").text("Destructuring");

//Run it part by part after console.log
var a, b, test;
[a, b] = [10, 20];


[d,e,...rest]=[10,20,30,40,50,60,70]
console.log(d)
console.log(e)
console.log(rest)
//-----

({a,b,...fest} = {a:10,b:20,c:30,d:40})

console.log(a)
console.log(b)
console.log(fest)

//-----
const arrConfig = ['localhosT','8080','900'];

//ES 5
var server = arrConfig[0]
var port = arrConfig[1]
var timeout = arrConfig[2]

console.log(server)
console.log(port)
console.log(timeout)
//-----
//ES6
const [server,port,timeout] = arrConfig
console.clear

console.log(server)
console.log(port)
console.log(timeout)

const objConfig = {
    server:'localhost',
    port:'8080',
    timeout:'980'
}
//-----
//ES5
var server = objConfig.server
var port = objConfig.port
var timeout = objConfig.timeout
//-----
//ES6
const {server,port,timeout} = objConfig

console.log(server)
console.log(port)
console.log(timeout)

let {timeout:t} = objConfig

console.log("t is the value holder: " ,t)
//-----
const objConfig2 = {
    server:'localhost',
    port:'8080',
    //timeout:'980'
}
//-----
let {server,port,timeout=600} = objConfig2
                 //Default value for timeout

console.log(server,port,timeout)
//-----
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const [,,wed,,fri] = days
//waow form empty records

console.log(wed,fri)