const express = require('express');
const app = express();
const path = require('path');
const { products } = require('./data');
const exp = require('constants');

express.static("./public")
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image, price } = product
        return {id, name, image, price }
    })
    res.json(newProducts)
})

app.get('/api/v1/products/:productId', (req, res) => {

    // 1 variant
    // const { productId } = req.params;

    // 2 variant
    const productId = parseInt(req.params.productId)
    
    const singleProduct = products.find((product) => product.id === productId)

    if (!singleProduct) {
        return res.status(404).json({message: "That product was not found."})
    }
    
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, less } = req.query;
    
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
             return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    } 


    if (less) {
        const maxPrice = parseFloat(less);
        sortedProducts = products.filter((product) => {
            return product.price < maxPrice
            
        })
    }

    if (sortedProducts.length < 1) {
        return res.status(404).json({message: "That product was not found."})
    }


    res.status(200).json(sortedProducts);

})




app.listen(5000, (req, res) => {
    console.log("Server listens port 5000...!");
})