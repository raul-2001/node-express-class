const { query } = require('express');
const Product = require('../models/product');



const getAllProductsStatic = async (req, res) => {
    const search = 'alb'

    const products = await Product.find({price: {$gt: 30}}).select('name price').sort('-price')

    res.status(200).json({ products, nbHits: products.length })
}


const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, fields, numericFilters} = req.query;

    const queryObj = {};

    if (featured) {
        queryObj.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObj.company = company;
    }

    if (name) {
        queryObj.name = {$regex: name, $options: 'i'}
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

        const regEx = /\b(<|>|>=|=|<|<=)\b/g;

        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                queryObj[field] = { [operator]: Number(value) }
            }
        })
    }
    
    console.log("queryObj >>>", queryObj)

    let result =  Product.find(queryObj);
    // sorting 
    if (sort) {
        const sortList = sort.split(',').join(' ') // here we just getting the result >>> 'name -price'
        result = result.sort(sortList) // then pass it to sort method as >>> sort('name -price')
    }else {
        result = result.sort('createAt')
    }

    // select fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit); 

    const products = await result;
    res.status(200).json({ products, nbHits: products.length })
}


module.exports = {
    getAllProducts, 
    getAllProductsStatic,
}