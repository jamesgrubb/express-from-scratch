const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.homePage);
router.get('/add' , articleController.addArticle)
router.post('/add' , articleController.createArticle)

module.exports = router;