import { Link, useRouteMatch } from 'react-router-dom';
import Tag from '../product/Tag';

const ItemProductDetail = ({ product }) => {
	let { url } = useRouteMatch();

	return (
		<div>
			<p>{product.NAME}</p>
			<p>url de imagen: {product.URL_IMG}</p>
			<p>descripción: {product.DESCRIPTION}</p>
			<p>tipo de venta: {product.TYPE_SALES}</p>
			{product.TAGS.map((tag, index) => (
				<Tag key={tag._id} tag={tag} index={index} />
			))}
			{product.FEATURES.map((feature, index) => (
				<div key={feature._id}>
					<p>{feature.NAME}</p>
					<p>{feature.DESCRIPTION}</p>
				</div>
			))}
			{product.CATEGORIES.map((category) => (
				<div key={category._id}>
					<p>Categoria {category.NAME}</p>
				</div>
			))}
		</div>
	);
};

export default ItemProductDetail;
