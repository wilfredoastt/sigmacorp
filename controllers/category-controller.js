const Category = require('../models/category-model');

let categoryController = {
	getCategories: async (req, res) => {
		try {
			const categories = await Category.find({ IS_PARENT: true });
			res.send({
				status: 200,
				data: categories,
				message: 'Categorias correctamente cargados.',
			});
		} catch (err) {
			res.send({ status: 400, data: null, message: 'Ocurrió algún error.' });
		}
	},
};

module.exports = categoryController;
