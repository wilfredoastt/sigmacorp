const Tag = ({ tag, index }) => {
	return (
		<div>
			{index === 0 ? (
				<p>{tag.NAME}</p>
			) : (
				<p>
					{' / '}
					{tag.NAME}
				</p>
			)}
		</div>
	);
};

export default Tag;
