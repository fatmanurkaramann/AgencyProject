const express = require('express')
const pageController = require('../controllers/pageController')
const photoController = require('../controllers/photoController')


const router = express.Router()

router.route('/').get(pageController.getHomePage)
router.route('/contact').post(pageController.sendEmail)
router.route('/:id').get(pageController.getEditPage)
router.route('/:id').put(photoController.updatePhoto)
router.route('/photos').post(photoController.createController)

module.exports = router