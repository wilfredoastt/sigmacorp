import {
	CATEGORIES_GET_ALL_ERROR,
	CATEGORIES_GET_ALL_SUCCESS,
	CATEGORIES_GET_ERROR,
	CATEGORIES_GET_SUCCESS,
	CATEGORY_SAVE_ERROR,
	CATEGORY_SAVE_SUCCESS,
} from '../constants/category';

const error_server = {
	status: 500,
	data: null,
	message: 'Error al intentar acceder al servidor.',
};
const ini = {
	categories_parent: error_server,
	categories_all: error_server,
};

const business = (state = ini, action) => {
	switch (action.type) {
		//load categories parent
		case CATEGORIES_GET_SUCCESS:
			return {
				...state,
				categories_parent: action.result,
			};
		case CATEGORIES_GET_ERROR:
			return { ...state, categories_parent: error_server };
		//load categories all
		case CATEGORIES_GET_ALL_SUCCESS:
			return {
				...state,
				categories_all: action.result,
			};
		case CATEGORIES_GET_ALL_ERROR:
			return { ...state, categories_all: error_server };
		//guarda una categoria
		case CATEGORY_SAVE_SUCCESS:
			console.log('success');
			return state;
		case CATEGORY_SAVE_ERROR:
			console.log('error');
			return state;
		default:
			return state;
	}
};

export default business;
