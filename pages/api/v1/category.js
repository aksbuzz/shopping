export default (req, res) => {
	res.status(200).json({
		data: [
			{
				category_id: 1,
				category_name: 'Mobiles',
			},
			{
				category_id: 2,
				category_name: 'Laptops',
			},
			{
				category_id: 3,
				category_name: 'Shoes',
			},
			{
				category_id: 4,
				category_name: 'Beauty',
			},
			{
				category_id: 5,
				category_name: 'Watches',
			},
		],
	});
};
