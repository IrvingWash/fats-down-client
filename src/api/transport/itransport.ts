import { User } from '../api-objects';

export interface ITransport {
	allUsers(): Promise<User[]>
}
