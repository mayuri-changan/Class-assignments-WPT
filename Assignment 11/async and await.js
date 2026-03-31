// Write a program to understand async and await mechanism


const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

async function getData1() {
    let y = await "Hello await";
    console.log(y);
    return y;
}

console.log(1);// normal 
getData();
getData1();
console.log(2);// normal 