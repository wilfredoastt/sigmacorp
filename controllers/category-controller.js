const Category = require('../models/category-model');

let categoryController = {
	//obtiene categorias PARENT
	getCategories: async (req, res) => {
		try {
			const categories = await Category.find({ IS_PARENT: true });

			return res.send({
				status: 200,
				data: categories,
				message: 'Categorias correctamente cargados.',
			});
		} catch (err) {
			return res.send({ status: 400, data: null, message: error });
		}
	},

	//obtiene categorias y todas sus sub-categorias
	getCategoriesSubCategories: async (req, res) => {
		const categories = await Category.find({ IS_PARENT: true });

		Category.findOne({ _id: categories[0]._id })
			.populate({
				path: 'SUB_CATEGORIES',
				populate: {
					path: 'SUB_CATEGORIES',
					populate: {
						path: 'SUB_CATEGORIES',
					},
				},
			})
			.exec((err, category) => {
				if (err) {
					return res.status(500).send(error);
				} else {
					console.log(category);
					return res.status(200).send(category);
				}
			});
	},

	//obtiene todas las categorias sin excepciones
	getCategoriesAll: async (req, res) => {
		try {
			const categories = await Category.find();
			return res.send({
				status: 200,
				data: categories,
				message: 'Todas las categorias correctamente cargados.',
			});
		} catch (err) {
			return res.send({ status: 400, data: null, message: error });
		}
	},

	saveCategory: async (req, res) => {
		try {
			const body = req.body;
			let data = body.data;
			const _id_parent = body._id_parent;

			Category.findOne({ NAME: data.NAME }, (err, category_find) => {
				if (err) {
					return res.send({ status: 400, data: null, message: err });
				}
				if (category_find) {
					return res.send({
						status: 400,
						data: null,
						message: 'Categoria ya existe.',
					});
				} else {
					_id_parent === ''
						? (data.IS_PARENT = true)
						: (data.IS_PARENT = false);

					Category.create(data, async (error, category) => {
						if (error) {
							return res.send({ status: 400, data: null, message: error });
						}
						try {
							if (!category.IS_PARENT) {
								Category.findByIdAndUpdate(
									_id_parent,
									{ $push: { SUB_CATEGORIES: category._id } },
									(error, category_parent) => {
										console.log(category_parent);
										if (error) {
											return res.send({
												status: 200,
												data: category,
												message: error,
											});
										}
										return res.send({
											status: 200,
											data: category,
											message: 'Guardado correctamente.',
										});
									}
								);
							} else {
								return res.send({
									status: 200,
									data: category,
									message: 'Guardado correctamente.',
								});
							}
						} catch (error) {
							category.remove((err, cat) => {
								if (err) {
									return res.send({
										status: 400,
										data: null,
										message: err,
									});
								}
								return res.send({
									status: 400,
									data: null,
									message: `No se guardó ${cat.NAME}`,
								});
							});
						}
					});
				}
			});
		} catch (e) {
			return res.send({ status: 400, data: null, message: e });
		}
	},

	updateCategory: async (req, res) => {
		try {
			let _id = req.params._id;
			let data = req.body;
			Category.findOneAndUpdate(
				{ _id },
				data,
				{ new: true },
				(err, category) => {
					if (err) {
						return res.send({ status: 400, data: null, message: error });
					} else {
						return res.send({
							status: 200,
							data: category,
							message: 'Actualizado correctamente',
						});
					}
				}
			);
		} catch (error) {
			return res.send({ status: 400, data: null, message: error });
		}
	},
};

module.exports = categoryController;
