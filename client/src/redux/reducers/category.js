import {
	CATEGORIES_GET_ERROR,
	CATEGORIES_GET_SUCCESS,
} from '../constants/category';

const error_server = {
	status: 500,
	data: null,
	message: 'Error al intentar acceder al servidor.',
};

const business = (state = error_server, action) => {
	switch (action.type) {
		//load
		case CATEGORIES_GET_SUCCESS:
			return action.result;
		case CATEGORIES_GET_ERROR:
			return error_server;
		default:
			return state;
	}
};

export default business;
