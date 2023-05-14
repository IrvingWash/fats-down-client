import {
	CreateWeightPayload,
	UpdateWeightPayload,
	User,
	Weight,
} from '../api-objects';

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

	public async allUsers(): Promise<User[]> {
		return await this._apiFetch<User[]>(this._requestsEnvironment.allUsers());
	}

	public async createWeight(payload: CreateWeightPayload): Promise<Weight> {
		return await this._apiFetch<Weight>(this._requestsEnvironment.createWeight(), payload);
	}

	public async updateWeight(payload: UpdateWeightPayload): Promise<Weight> {
		return await this._apiFetch<Weight>(this._requestsEnvironment.updateWeight(), payload);
	}
}
