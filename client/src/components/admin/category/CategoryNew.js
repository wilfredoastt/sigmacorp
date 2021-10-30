import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	startGetCategoriesAll,
	startSaveCategory,
} from '../../../redux/actions/category';

import { categories } from './constante';
import ItemSelect from './ItemSelect';

const CategoryNew = ({
	categories_all,
	handleGetCategoriesAll,
	handleSaveCategory,
}) => {
	console.log(categories_all);

	//carga todas las categorias
	useEffect(() => {
		handleGetCategoriesAll();
	}, []);

	const saveCategory = (event) => {
		event.preventDefault();
		const category = event.target.category.value;
		const parent = event.target.parent.value;

		const json = {
			data: {
				NAME: category,
				URL_IMG: 'https://antibioticos',
				URL_ICON: 'https://soyicon',
				SUB_CATEGORIES: [],
				PRODUCTS: [],
			},
			_id_parent: parent,
		};
		handleSaveCategory(json);
	};

	return (
		<div>
			<p className="mb-3 font-bold font-sans text-lg text-indigo-500">
				Nueva Categoria
			</p>
			<form className="space-y-3" onSubmit={saveCategory}>
				<div className="col-span-6 sm:col-span-6 lg:col-span-2">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700"
					>
						Nombre de categoría
					</label>
					<input
						id="category"
						type="text"
						name="category"
						autoComplete="text"
						placeholder="Categoría..."
						className="mt-1 block rounded-md w-full border-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500"
					/>
				</div>

				<div>
					<label
						htmlFor="parent"
						className="block text-sm font-medium text-gray-700"
					>
						Seleccione categoría padre
					</label>
					<select
						name="parent"
						className="mt-1 block rounded-md border-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500"
					>
						<option value="">Ninguno</option>
						{categories_all !== null &&
							categories_all.map((category) => (
								<option key={category._id} value={category._id}>
									{category.NAME}
								</option>
							))}
					</select>
				</div>

				<button
					type="submit"
					className="rounded-md w-full px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold"
				>
					Guardar
				</button>
				{categories !== null &&
					categories.map((category) => (
						<ItemSelect key={category._id} category={category} nivel={0} />
					))}
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		categories_all: state.category.categories_all.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetCategoriesAll: () => {
			dispatch(startGetCategoriesAll());
		},
		handleSaveCategory: (body) => {
			dispatch(startSaveCategory(body));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNew);
