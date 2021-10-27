import { Link, useRouteMatch } from 'react-router-dom';

const ItemCategory = ({ category }) => {
	let { url } = useRouteMatch();

	return (
		<div>
			<p>{category.NAME}</p>
			<p>{category.URL_IMG}</p>
			<p>{category.URL_ICON}</p>
			<Link to={`${url}/${category._id}`}>
				Ver Productos de {category.NAME}
			</Link>
		</div>
	);
};

export default ItemCategory;
