// 2) Read Data From API using fetch method 
//    https://fakestoreapi.com/products

// and display data in Table Format 
// When page is loaded 

// use array.map method

import React, { useEffect, useState } from 'react';
import productData from './product.json';
export default function ProductTable() {

    const [products, setProducts] = useState([]);

    // Fetch API data on page load
    useEffect(() => {
        fetch('')
            
            setProducts(productData)
          
    }, []);

    return (
        <div>
            <h2>Product List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.ID}</td>
                            <td>{item.Title}</td>
                            <td>{item.Price}</td>
                            <td>{item.Category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


