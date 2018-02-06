const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);
router.get('/add' , storeController.addArticle)
router.post('/add' , storeController.createArticle)

module.exports = router;