require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

const mainRoutes = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())


// app.get('/', (req, res) => {
//     res.send('<h1>AUTH</h1><a href="/api/v1/products">Login route</a>');
// });

// routes
app.use('/api/v1', mainRoutes)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// port 
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(PORT, () => 
        console.log(`Server is listening port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
}


start();