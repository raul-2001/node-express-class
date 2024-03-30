// auth
const auth = ((req, res, next) => {

    const cookiesName = req.cookies.name;
    const userName = req.user; 
    console.log(cookiesName)

    if (cookiesName) {
        userName = cookiesName;
        next();
    }else {
        res.status(401).json({success: false, msg: "unauthorized!"})
    }
    
})

module.exports = {auth};