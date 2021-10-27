const axios = require('axios');
const Api = {
	getCategories: async () => {
		return await axios
			.get('/sigmacorp/categories')
			.then((response) => response.data);
	},

	//PRODUCTS
	getProducts: async (_id) => {
		return await axios
			.get('/sigmacorp/products/' + _id)
			.then((response) => response.data);
	},
};

export default Api;
