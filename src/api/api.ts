import { EnvExtractor } from '@utils/env-extractor';
import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import { IRequestsEnvironment } from './requests-environment/irequests-environment';
import { RequestsEnvironment } from './requests-environment/requests-environment';
import { IAuthProvider } from './auth-provider/iauth-provider';
import { AuthProvider } from './auth-provider/auth-provider';
import { SignInPayload, SignUpPayload } from './api-objects';
import { IAPI } from './iapi';
import { ITransport } from './transport/itransport';
import { Transport } from './transport/transport';
import { APIFetch, makeAPIFetch } from './api-fetch';

export class API implements IAPI {
	private readonly _baseURL: string;

	private readonly _credentialStorage: ICredentialStorage;
	private readonly _requestsEnvironment: IRequestsEnvironment;
	private readonly _apiFetch: APIFetch;

	private readonly _authProvider: IAuthProvider;
	private readonly _transport: ITransport;

	public constructor(credentialStorage: ICredentialStorage) {
		this._baseURL = EnvExtractor.serverURL;

		this._credentialStorage = credentialStorage;
		this._requestsEnvironment = new RequestsEnvironment(this._baseURL);
		this._apiFetch = makeAPIFetch(this._credentialStorage);

		this._authProvider = new AuthProvider({
			requestsEnvironment: this._requestsEnvironment,
			credentialStorage: this._credentialStorage,
			apiFetch: this._apiFetch,
		});

		this._transport = new Transport(
			makeAPIFetch(this._credentialStorage),
			this._requestsEnvironment
		);
	}

	public async signIn(payload: SignInPayload): Promise<void> {
		await this._authProvider.signIn(payload);
	}

	public async signUp(payload: SignUpPayload): Promise<void> {
		await this._authProvider.signUp(payload);
	}

	public async refresh(): Promise<void> {
		await this._authProvider.refresh();
	}

	public async signOut(): Promise<void> {
		await this._authProvider.signOut();
	}

	// TODO: Remove unknown
	public async allUsers(): Promise<unknown> {
		return await this._transport.allUsers();
	}
}

