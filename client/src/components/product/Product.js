import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startGetProducts } from '../../redux/actions/product';
import ItemCategory from '../category/ItemCategory';
import ItemProduct from './ItemProduct';

const Product = ({ category, handleGetProducts }) => {
	let { _id } = useParams();
	useEffect(() => {
		handleGetProducts(_id);
	}, [_id]);

	return (
		<div>
			<div>
				{category !== null &&
					category.SUB_CATEGORIES.map((category) => (
						<ItemCategory key={category._id} category={category} />
					))}
			</div>
			<div>
				{category !== null &&
					category.PRODUCTS.map((product) => (
						<ItemProduct key={product._id} product={product} />
					))}
			</div>
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
