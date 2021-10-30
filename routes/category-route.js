const CategoryController = require('../controllers/category-controller');
const express = require('express');
const router = express.Router();

router.get('/categories', CategoryController.getCategories);
router.get('/categories-all', CategoryController.getCategoriesAll);
router.post('/save-category', CategoryController.saveCategory);
router.put('/update-category/:_id', CategoryController.updateCategory);

router.get(
	'/categories-populate',
	CategoryController.getCategoriesSubCategories
);

module.exports = router;
