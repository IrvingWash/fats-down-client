import { APIFetch } from '../api-fetch';
import { IRequestsEnvironment } from '../requests-environment/irequests-environment';
import { ITransport } from './itransport';

export class Transport implements ITransport {
	private readonly _apiFetch: APIFetch;
	private readonly _requestsEnvironment: IRequestsEnvironment;

	public constructor(apiFetch: APIFetch, requestsEnvironment: IRequestsEnvironment) {
		this._apiFetch = apiFetch;
		this._requestsEnvironment = requestsEnvironment;
	}

	// TODO: Remove unknown
	public async allUsers(): Promise<unknown> {
		return await this._apiFetch<unknown>(this._requestsEnvironment.allUsers());
	}
}
