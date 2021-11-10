const router = require('express').Router()

const { getReports } = require('../controllers/reportController')
const { protect, admin } = require('../middleware/authMiddleware')

router.route('/report').post(protect, getReports)

module.exports = router
