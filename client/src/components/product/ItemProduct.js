import { Link, useRouteMatch } from 'react-router-dom';
import Tag from './Tag';

const ItemProduct = ({ product }) => {
	let { url } = useRouteMatch();

	return (
		<div>
			<p>{product.NAME}</p>
			<p>url de imagen {product.URL_IMG}</p>
			<p>tipo de venta {product.TYPE_SALES}</p>
			{product.TAGS.map((tag, index) => (
				<Tag key={tag._id} tag={tag} index={index} />
			))}
			<Link to={`/detail/${product._id}`}>
				Ver Detalle de Producto {product.NAME}
			</Link>
		</div>
	);
};

export default ItemProduct;
