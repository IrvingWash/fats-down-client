import { User, Weight } from "../objects-and-constants/objects";
import { apiFetch, HttpMethod } from "./api-fetch";

const usersUrl = 'users';
const weightsUrl = 'weights';

export async function fetchUsers(): Promise<User[]> {
	try {
		const users = await apiFetch<User[]>(usersUrl);

		return users;
	} catch (error) {
		throw new Error('An error ocurred');
	}
}

export async function postWeight(weight: Weight): Promise<Weight> {
	try {
		weight.userId = '62d2f441875ed5213f6688ad';

		const newWeight = await apiFetch<Weight>(
			weightsUrl,
			HttpMethod.Post,
			weight,
		);

		return newWeight;
	} catch (error) {
		throw new Error('An error ocurred');
	}
}
