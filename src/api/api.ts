import { EnvExtractor } from '@utils/env-extractor';
import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import { IRequestsEnvironment } from './requests-environment/irequests-environment';
import { RequestsEnvironment } from './requests-environment/requests-environment';
import { IAuthProvider } from './auth-provider/iauth-provider';
import { AuthProvider } from './auth-provider/auth-provider';
import { SignInPayload, SignUpPayload } from './api-objects';
import { IAPI } from './iapi';

export class API implements IAPI {
	private readonly _baseURL: string;

	private readonly _credentialStorage: ICredentialStorage;
	private readonly _requestsEnvironment: IRequestsEnvironment;

	private readonly _authProvider: IAuthProvider;

	public constructor(credentialStorage: ICredentialStorage) {
		this._baseURL = EnvExtractor.serverURL;

		this._credentialStorage = credentialStorage;
		this._requestsEnvironment = new RequestsEnvironment(this._baseURL);

		this._authProvider = new AuthProvider(this._requestsEnvironment, this._credentialStorage);
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
}

