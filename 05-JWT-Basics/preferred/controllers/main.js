const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {

    const {username, password} = req.body

    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }

    // get id
    const id = new Date().getDate()

    // create token
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'24h'})

    res.status(200).json({msg: 'User created', token})

}

const dashboard = async (req, res) => {
    
    try {
    
        res.status(200).json({msg: `hello ${req.user.username}`})
        
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401)
    }
    
}


module.exports = {login, dashboard}