const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	NAME: {
		type: String,
		trim: true,
		required: true,
	},
	URL_IMG: {
		type: String,
		trim: true,
		required: true,
	},
	URL_ICON: {
		type: String,
		trim: true,
		required: true,
	},
	PRODUCTS: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
});
module.exports = mongoose.model('Category', CategorySchema);
