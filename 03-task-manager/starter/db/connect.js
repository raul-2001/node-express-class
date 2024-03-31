const mangoose = require('mongoose');


const connetDB = (url) => {
    return mangoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}


module.exports = connetDB;