require('dotenv').config();
// async errors

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const productsRouter = require('./routes/products');

const notFoundMiddlware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);


// product routes

app.use(notFoundMiddlware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MANGO_URI);
        app.listen(port, console.log(`Server is listening port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();


