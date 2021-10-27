import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startGetProducts } from '../../redux/actions/product';
import ItemProduct from './ItemProduct';

const Product = ({ category, handleGetProducts }) => {
	let { _id } = useParams();
	useEffect(() => {
		handleGetProducts(_id);
	}, []);

	return (
		<div>
			{category !== null &&
				category.PRODUCTS.map((product) => (
					<ItemProduct key={product._id} product={product} />
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		category: state.product.data,
	};
};

const mapDispathToProps = (dispatch) => {
	return {
		handleGetProducts: (_id) => {
			dispatch(startGetProducts(_id));
		},
	};
};

export default connect(mapStateToProps, mapDispathToProps)(Product);
