// 2) 
// with help of view engine 
//  GET / ---------- render index.html page 
 
//  on index page accept number from user and display that number is perfect or not on same page 

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Function to check perfect number
function isPerfect(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

// GET / → render index page
app.get('/', (req, res) => {
    res.render('index', { result: null });
});

// POST → check number
app.post('/check', (req, res) => {
    const num = parseInt(req.body.number);

    let result;
    if (isPerfect(num)) {
        result = `${num} is a Perfect Number`;
    } else {
        result = `${num} is NOT a Perfect Number`;
    }

    res.render('index', { result });
});

// Start server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
