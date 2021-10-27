import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetCategories } from '../../redux/actions/category';
import ItemCategory from './ItemCategory';

const Category = ({ categories, handleGetCategories }) => {
	useEffect(() => {
		handleGetCategories();
	}, []);

	return (
		<div>
			{categories != null &&
				categories.map((category) => (
					<ItemCategory key={category._id} category={category} />
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		categories: state.category.data,
	};
};

const mapDispathToProps = (dispatch) => {
	return {
		handleGetCategories: () => {
			dispatch(startGetCategories());
		},
	};
};

export default connect(mapStateToProps, mapDispathToProps)(Category);
