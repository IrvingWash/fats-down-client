import {
	CreateWeightPayload,
	UpdateWeightPayload,
	User,
	Weight,
} from '../api-objects';

import { APIFetch } from '../api-fetch';
import { IRequestsEnvironment } from '../requests-environment/irequests-environment';
import { ITransport } from './itransport';
import { appendZeroToDateElement } from '@utils/helpers';

export class Transport implements ITransport {
	private readonly _apiFetch: APIFetch;
	private readonly _requestsEnvironment: IRequestsEnvironment;

	public constructor(apiFetch: APIFetch, requestsEnvironment: IRequestsEnvironment) {
		this._apiFetch = apiFetch;
		this._requestsEnvironment = requestsEnvironment;
	}

	public async allUsers(): Promise<User[]> {
		const users = await this._apiFetch<User[]>(this._requestsEnvironment.allUsers());

		return users.map(this._convertWeightDates);
	}

	public async createWeight(payload: CreateWeightPayload): Promise<Weight> {
		return await this._apiFetch<Weight>(this._requestsEnvironment.createWeight(), payload);
	}

	public async updateWeight(payload: UpdateWeightPayload): Promise<Weight> {
		return await this._apiFetch<Weight>(this._requestsEnvironment.updateWeight(), payload);
	}

	private _convertWeightDates(user: User): User {
		user.weights.forEach((weight) => {
			const date = new Date(+weight.date);

			const year = date.getFullYear();
			const month = date.getMonth();
			const day = date.getDate();

			weight.date = `${year}-${appendZeroToDateElement(month)}-${appendZeroToDateElement(day)}`;
		});

		return user;
	}
}
