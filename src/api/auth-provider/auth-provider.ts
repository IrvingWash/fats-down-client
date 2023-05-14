import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import {
	AuthResult,
	SignInPayload,
	SignUpPayload,
} from '../api-objects';

import { IRequestsEnvironment } from '../requests-environment/irequests-environment';
import { IAuthProvider } from './iauth-provider';
import { APIFetch } from '../api-fetch';
import { ensureNotNullish } from '@utils/helpers';

interface AuthProviderParams {
	requestsEnvironment: IRequestsEnvironment;
	credentialStorage: ICredentialStorage;
	apiFetch: APIFetch;
}

export class AuthProvider implements IAuthProvider {
	private readonly _requestsEnvironment: IRequestsEnvironment;
	private readonly _credentialStorage: ICredentialStorage;
	private readonly _apiFetch: APIFetch;

	public constructor(params: AuthProviderParams) {
		const {
			requestsEnvironment,
			credentialStorage,
			apiFetch,
		} = params;

		this._requestsEnvironment = requestsEnvironment;
		this._credentialStorage = credentialStorage;
		this._apiFetch = apiFetch;
	}

	public async signIn(payload: SignInPayload): Promise<void> {
		const authResult = await this._apiFetch<AuthResult>(this._requestsEnvironment.signIn(), payload);

		this._credentialStorage.save(authResult);
	}

	public async signUp(payload: SignUpPayload): Promise<void> {
		const authResult = await this._apiFetch<AuthResult>(this._requestsEnvironment.signUp(), payload);

		this._credentialStorage.save(authResult);
	}

	public async refresh(): Promise<void> {
		const authResult = await this._apiFetch<AuthResult>(this._requestsEnvironment.refresh());

		const credentials = ensureNotNullish(this._credentialStorage.load());

		this._credentialStorage.save({
			...credentials,
			tokens: { ...authResult.tokens },
		});
	}

	public async signOut(): Promise<void> {
		const { url, method } = this._requestsEnvironment.signOut();

		await fetch(url, { method });

		this._credentialStorage.clear();
	}
}
