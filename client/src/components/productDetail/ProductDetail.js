import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemProductDetail from './ItemProductDetail';

const ProductDetail = ({ category }) => {
	let { _id } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		findProduct();
	}, []);

	const findProduct = () => {
		if (category !== null) {
			const product = category.PRODUCTS.find((prod) => prod._id === _id);
			console.log(product);
			setProduct(product);
		}
	};

	return (
		<div>{product !== null && <ItemProductDetail product={product} />}</div>
	);
};

const mapStateToProps = (state) => {
	return {
		category: state.product.data,
	};
};

export default connect(mapStateToProps, null)(ProductDetail);
