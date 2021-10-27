const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
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
	TYPE_SALES: {
		type: String,
		trim: true,
		required: true,
	},
	DESCRIPTION: {
		type: String,
		trim: true,
		required: true,
	},
	FEATURES: [
		{
			NAME: {
				type: String,
				trim: true,
				required: true,
			},
			DESCRIPTION: {
				type: String,
				trim: true,
				required: true,
			},
		},
	],
	TAGS: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Tag',
		},
	],
});
module.exports = mongoose.model('Product', ProductSchema);
