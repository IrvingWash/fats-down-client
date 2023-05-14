import { EnvExtractor } from '@utils/env-extractor';
import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import { IRequestsEnvironment } from './requests-environment/irequests-environment';
import { RequestsEnvironment } from './requests-environment/requests-environment';

export interface IAPI {}

export class API implements IAPI {
	private readonly _baseURL: string;

	private readonly _credentialStorage: ICredentialStorage;
	private readonly _requestsEnvironment: IRequestsEnvironment;

	public constructor(credentialStorage: ICredentialStorage) {
		this._baseURL = EnvExtractor.serverURL;

		this._credentialStorage = credentialStorage;
		this._requestsEnvironment = new RequestsEnvironment(this._baseURL);
	}
}

