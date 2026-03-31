// 2) create folder axiosProject 
//      execute command 

//      npm install axios 

// after install that module 

// fetch api data using axios.get() method

const axios = require('axios');

// Fetch API data
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log("API Data:");
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });
