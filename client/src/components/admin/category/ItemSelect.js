import { niveles } from './constante';

const ItemSelect = ({ category, nivel }) => {
	console.log(nivel);
	console.log(category.SUB_CATEGORIES);
	return (
		<>
			<div className="bg-gray-200 rounded-lg m-4 p-4">
				{niveles[nivel] + ' ' + category.NAME}
			</div>

			{category.SUB_CATEGORIES.map((category_new) => {
				<ItemSelect
					key={category_new._id}
					category={category_new}
					nivel={nivel + 1}
				/>;
			})}
		</>
	);
};

export default ItemSelect;
