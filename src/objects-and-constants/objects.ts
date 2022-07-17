export interface User {
	name: string;
	color: string;
	weights: Weight[];
	id?: string;
}

export interface Weight {
	value: number;
	time: Date;
	userId?: string;
}

export interface Date {
	day: number;
	month: number;
	year: number;
}
