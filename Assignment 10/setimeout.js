
// 5) write a code which contains 
// normal function 
// setTimeout
// Promise
// Console.log()

// and understand execution sequence
console.log("in demo execution ");

function f1() {
    console.log("in f1 ");
}
setTimeout(() => {
    console.log("in settimeout ");
}, 100);

let p = new Promise
    ((resolve, reject) => {
        let n = 4;
        if (n % 2 == 0)
            resolve("number " + n + "is even number ")
        reject("false")
    });

//EVENT LOOP OS

//then  resolved    reject  error 
p.then((message => console.log(message)))
    .catch((error) => console.log(error))

f1();//f1