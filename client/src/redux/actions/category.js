import {
	CATEGORIES_GET_ALL_START,
	CATEGORIES_GET_START,
	CATEGORY_SAVE_START,
} from '../constants/category';

export const startGetCategories = () => {
	return { type: CATEGORIES_GET_START };
};

export const startGetCategoriesAll = () => {
	return { type: CATEGORIES_GET_ALL_START };
};

export const startSaveCategory = (body) => {
	return { type: CATEGORY_SAVE_START, body };
};
