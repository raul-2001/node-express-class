const express = require('express');
const app = express();

const { products, people } = require('./data');
const exp = require('constants');


express.static("./public")

const path = require('path');
const peopleRoute = require('./routes/people')
const {auth} = require('./authorize')
const cookieParser = require('cookie-parser')
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1/people', peopleRoute)

app.get('/secure', auth, (req, res) => {
    res.status(201).json({ success: true, data: req.user })
})

app.post('/logon', (req, res) => {
    const {name} = req.body;
    if (name) {
        res.cookie("name", name.name)
        return res.status(201).json( { success: true, msg: `Hello ${name}` })
    }else {
        return res.status(400).json( { success: false, msg: "Provide valid credentials!" } )
    }
})

app.delete('/logoff', (req, res) => {
    res.clearCookie("name");
    res.status(200).json({success: true, msg: "User logged off!"})
})

app.get('/test', auth, (req, res) => {
    const { user } = req.user;
    res.status(200).json( { success: true, msg: `Wellcome ${user}` } )
})

// logger middleware;
const logger = ((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date();
    console.log(url, method, time)
    next()
})

app.get('/logger', logger, (req, res) => {
    res.status(200).send("Hello middleware!")
})

app.get('/api/v1/products', logger, (req, res) => {
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




app.listen(5000, () => {
    console.log("Server listens port 5000...!");
})