export type Basket = {
	basketId: string;
	items: Item[];
}

export type Item = {
	productId: number;
	name: string;
	description: string;
	price: number;
	pictureUrl: string;
	type: string;
	brand: string;
	quantity: number;
}
