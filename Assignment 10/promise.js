// understand promise concept and implement
// in your code 
let p = new Promise
    ((resolve, reject) => {
        let n = 5;
        if (n % 2 == 0)
            resolve("number " + n + "is even number ")
        reject("false")
    });
//then  resolved    reject  error 
p.then((message => console.log(message)))
    .catch((error) => console.log(error))
// pending 
let a = new Promise((resolve, reject) => {
    //condi

});  // inbuild 