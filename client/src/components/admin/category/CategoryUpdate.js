import { connect } from 'react-redux';

const CategoryUpdate = () => {
	const saveCategory = (event) => {
		event.preventDefault();
		const category = event.target.category.value;
		const is_parent = event.target.is_parent.value;

		const data = {
			NAME: category,
			URL_IMG: 'https://antibioticos',
			URL_ICON: 'https://soyicon',
			IS_PARENT: is_parent === 'true',
			SUB_CATEGORIES: [],
			PRODUCTS: [],
		};

		console.log(data);
	};

	return (
		<div>
			<p className="mb-3 font-bold font-sans text-lg text-indigo-500">
				Actualizar categoria
			</p>
			<form className="space-y-3" onSubmit={saveCategory}>
				<input
					id="category"
					name="category"
					type="text"
					autoComplete="text"
					required
					className="appearance-none rounded-md relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					placeholder="Categoria"
				/>
				<p>SUB CATEGORIAS</p>
				<div className="grid grid-flow-row grid-cols-3  grid-rows-2 gap-3">
					<div className="rounded-md p-2 bg-blue-400 shadow-md">
						categoria 1
					</div>
					<div className="rounded-md p-2 bg-blue-400 shadow-md"> cate 2</div>
					<div className="rounded-md p-2 bg-blue-400 shadow-md">cate 3</div>
					<div className="rounded-md p-2 bg-blue-400 shadow-md">cate 4</div>
					<div className="rounded-md p-2 bg-blue-400 shadow-md">cate 5</div>
				</div>
				<p>CATEGORIAS NO ASIGNADOS</p>
				<div className="grid grid-flow-row grid-cols-3  grid-rows-2 gap-3">
					<div className="rounded-md p-2 bg-gray-400 shadow-md">
						categoria not 1
					</div>
					<div className="rounded-md p-2 bg-gray-400 shadow-md">
						categoria not 2
					</div>
					<div className="rounded-md p-2 bg-gray-400 shadow-md">
						categoria not 3
					</div>
				</div>
				<p>Productos</p>
				<div className="grid grid-flow-row grid-cols-3  grid-rows-2 gap-3">
					<div className="rounded-md p-2 bg-green-400 shadow-sm">
						categoria not 1
					</div>
					<div className="rounded-md p-2 bg-green-400 shadow-sm">
						categoria not 2
					</div>
					<div className="rounded-md p-2 bg-green-400 shadow-sm">
						categoria not 3
					</div>
				</div>
				<p>Productos no asignados</p>
				<div className="grid grid-flow-row grid-cols-3  grid-rows-2 gap-4">
					<div>categoria not 1</div>
					<div>categoria not 2</div>
					<div>categoria not 3</div>
				</div>
				<select
					name="is_parent"
					className="block rounded-md border-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500"
				>
					<option value={true}>padre</option>
					<option value={false}>hijo</option>
				</select>
				<button
					type="submit"
					className="rounded-md w-full px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold"
				>
					Guardar
				</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSaveCategory: () => {
			dispatch();
		},
	};
};

export default connect(null, mapDispatchToProps)(CategoryUpdate);
