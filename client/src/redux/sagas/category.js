import { put, call, takeLatest } from 'redux-saga/effects';
import Api from '../api';

import {
	CATEGORIES_GET_ERROR,
	CATEGORIES_GET_START,
	CATEGORIES_GET_SUCCESS,
} from '../constants/category';

function* getCategories() {
	try {
		const result = yield call(Api.getCategories);
		yield put({ type: CATEGORIES_GET_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORIES_GET_ERROR });
		console.log('error');
	}
}

export default function* category() {
	yield takeLatest(CATEGORIES_GET_START, getCategories);
}
