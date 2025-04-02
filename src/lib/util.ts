export const currencyFormat = (amount: number) => {
	return '$' + (amount / 100).toFixed(2);
};

export const prodParams = (value: object) => {
	return Object.fromEntries(
		Object.entries(value).filter(
			([_, v]) => v !== undefined && v !== '' && v !== null && v.length !== 0,
		),
	);
};
