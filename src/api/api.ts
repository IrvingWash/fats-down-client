import { EnvExtractor } from '@utils/env-extractor';

import { IRequestsEnvironment } from './requests-environment/irequests-environment';
import { RequestsEnvironment } from './requests-environment/requests-environment';

export interface IAPI {}

export class API implements IAPI {
	private readonly _baseURL: string;

	private readonly _requestsEnvironment: IRequestsEnvironment;

	public constructor() {
		this._baseURL = EnvExtractor.serverURL;

		this._requestsEnvironment = new RequestsEnvironment(this._baseURL);

		// TODO: Delete ASAP
		console.log(this._requestsEnvironment.allUsers());
	}
}

