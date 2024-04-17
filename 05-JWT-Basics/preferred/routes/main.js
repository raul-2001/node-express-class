const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')
const authMiddleware = require('../middleware/auth')

router.route('/hello').get(authMiddleware, dashboard)
router.route('/logon').post(login)

module.exports = router;