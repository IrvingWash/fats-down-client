import {
	CreateWeightPayload,
	UpdateWeightPayload,
	User,
	Weight,
} from '../api-objects';

export interface ITransport {
	allUsers(): Promise<User[]>
	createWeight(payload: CreateWeightPayload): Promise<Weight>;
	updateWeight(payload: UpdateWeightPayload): Promise<Weight>;
}
