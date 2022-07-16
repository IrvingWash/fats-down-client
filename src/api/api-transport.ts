import { User } from "../objects-and-constants/objects";
import { apiFetch } from "./api-fetch";

const usersUrl = 'users';

export async function fetchUsers(): Promise<User[]> {
	try {
		const users = await apiFetch<User[]>(usersUrl);

		return users;
	} catch (error) {
		throw new Error('An error ocurred');
	}
}
