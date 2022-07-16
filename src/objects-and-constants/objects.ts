export interface User {
	name: string;
	color: string;
	weights: Weight[];
	id?: string;
}

export interface Weight {
	value: number;
	time: WeightDate;
	userId?: string;
}

export interface WeightDate {
	day: number;
	month: number;
	year: number;
}
