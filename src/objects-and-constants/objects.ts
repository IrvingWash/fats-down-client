export interface User {
	name: string;
	color: string;
	weights: Weight[];
}

export interface Weight {
	value: number;
	time: WeightDate;
}

export interface WeightDate {
	day: number;
	month: number;
	year: number;
}
