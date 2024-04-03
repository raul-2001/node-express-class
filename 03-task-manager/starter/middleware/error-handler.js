const {CustomAPIError} = require('../errors/custom-error');

const errorHanlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json("something went wrong, pls try egain");
}

module.exports = errorHanlerMiddleware;