export interface SignInPayload {
	email: string;
	password: string;
}

export interface SignUpPayload extends SignInPayload {
	username: string;

	/**
	 * Any valid CSS color
	 */
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

	/**
	 * Any valid CSS color
	 */
	color: string;
	weights: Weight[];
}

export interface Weight {
	id: number;
	value: number;

	/**
	 * Unix timestamp
	 */
	date: string;
}

export interface CreateWeightPayload {
	value: number;

	/**
	 * Unix timestamp
	 */
	date: string;
}

export interface UpdateWeightPayload extends Partial<CreateWeightPayload> {
	id: number;
}
