import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import {
	AuthResult,
	SignInPayload,
	SignUpPayload,
} from '../api-objects';

import { IRequestsEnvironment, RequestMetainfo } from '../requests-environment/irequests-environment';
import { IAuthProvider } from './iauth-provider';

export class AuthProvider implements IAuthProvider {
	private readonly _requestsEnvironment: IRequestsEnvironment;
	private readonly _credentialStorage: ICredentialStorage;

	public constructor(requestEnvironment: IRequestsEnvironment, credentialStorage: ICredentialStorage) {
		this._requestsEnvironment = requestEnvironment;
		this._credentialStorage = credentialStorage;
	}

	public async signIn(payload: SignInPayload): Promise<void> {
		const authResult = await this._authenticate<SignInPayload>(this._requestsEnvironment.signIn(), payload);

		this._credentialStorage.save(authResult);
	}

	public async signUp(payload: SignUpPayload): Promise<void> {
		const authResult = await this._authenticate<SignUpPayload>(this._requestsEnvironment.signUp(), payload);

		this._credentialStorage.save(authResult);
	}

	public async refresh(): Promise<void> {
		const authResult = await this._authenticate(this._requestsEnvironment.refresh());

		const credentials = this._credentialStorage.load();

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

	private async _authenticate<T>(requestMetainfo: RequestMetainfo, payload?: T): Promise<AuthResult> {
		const { url, method } = requestMetainfo;

		const response = await fetch(url, { method, body: JSON.stringify(payload) });

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return await response.json() as AuthResult;
	}
}
