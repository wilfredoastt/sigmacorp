import CategoryNew from './CategoryNew';
import CategoryUpdate from './CategoryUpdate';

const Category = () => {
	return (
		<div className="grid grid-flow-col gap-3">
			<CategoryNew />
			<CategoryUpdate />
		</div>
	);
};

export default Category;
