import { SignInPayload, SignUpPayload } from '../api-objects';

export interface IAuthProvider {
	signIn(payload: SignInPayload): Promise<void>;
	signUp(payload: SignUpPayload): Promise<void>;
	refresh(): Promise<void>;
	signOut(): Promise<void>;
}
