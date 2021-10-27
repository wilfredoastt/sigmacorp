import { Link, useRouteMatch } from 'react-router-dom';

const ItemCategory = ({ category }) => {
	let { url } = useRouteMatch();

	return (
		<div className="bg-gray-200 rounded-lg m-4 p-4">
			<p>{category.NAME}</p>
			<p>{category.URL_IMG}</p>
			<p>{category.URL_ICON}</p>
			<Link className="text-blue-700" to={`/categories/${category._id}`}>
				Ver Productos de {category.NAME}
			</Link>
		</div>
	);
};

export default ItemCategory;
