// 1) using express js create rest api for product 
// which contains product details 

// "prodid":1,"ProductName":"Laird","price":2000

// create product.json file which contains at least 5 product 

// then create multiple route

// GET  / ------------ display all products 
// GET /:id ---------- display prodcut with id 
// POST  /add ---------------  add product using param
// POST /insert ------------  add product using body data 
// DELETE /:id  -------------- Delete particular product 

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// Read data from JSON file
const getProducts = () => {
    const data = fs.readFileSync('product.json');
    return JSON.parse(data);
};

// Write data to JSON file
const saveProducts = (data) => {
    fs.writeFileSync('product.json', JSON.stringify(data, null, 2));
};


// ✅ GET / → display all products
app.get('/', (req, res) => {
    const products = getProducts();
    res.json(products);
});


// ✅ GET /:id → display product by id
app.get('/:id', (req, res) => {
    const products = getProducts();
    const id = parseInt(req.params.id);

    const product = products.find(p => p.prodid === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
});


// ✅ POST /add → add product using params
// Example: /add?prodid=6&ProductName=Mouse&price=500
app.post('/add', (req, res) => {
    const products = getProducts();

    const newProduct = {
        prodid: parseInt(req.query.prodid),
        ProductName: req.query.ProductName,
        price: parseInt(req.query.price)
    };

    products.push(newProduct);
    saveProducts(products);

    res.send("Product added using params");
});


// ✅ POST /insert → add product using body
app.post('/insert', (req, res) => {
    const products = getProducts();

    const newProduct = req.body;

    products.push(newProduct);
    saveProducts(products);

    res.send("Product added using body");
});


// ✅ DELETE /:id → delete product
app.delete('/:id', (req, res) => {
    let products = getProducts();
    const id = parseInt(req.params.id);

    const newProducts = products.filter(p => p.prodid !== id);

    if (products.length === newProducts.length) {
        return res.status(404).send("Product not found");
    }

    saveProducts(newProducts);
    res.send("Product deleted");
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
