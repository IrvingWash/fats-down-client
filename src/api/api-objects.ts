export interface SignInPayload {
	email: string;
	password: string;
}

export interface SignUpPayload extends SignInPayload {
	username: string;
	color: string;
}

export interface AuthResult {
	username: string;
	email: string;
	tokens: Tokens;
}

export interface Tokens {
	accessToken: string;
	refreshToken: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	color: string;
	weights: Weight[];
}

export interface Weight {
	id: number;
	value: number;
	date: string;
}
