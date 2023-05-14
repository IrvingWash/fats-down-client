import { extractErrorMessage, ensureNotNullish } from '@utils/helpers';
import { AuthResult } from 'src/api/api-objects';

import { ICredentialStorage } from './icredential-storage';

// TODO: Add encryption
export class CredentialStorage implements ICredentialStorage {
	private readonly _key: string;

	public constructor(key: string) {
		this._key = key;
	}

	public save(credentials: AuthResult): void {
		localStorage.setItem(this._key, JSON.stringify(credentials));
	}

	public load(): AuthResult {
		try {
			const credentials = localStorage.getItem(this._key);

			return JSON.parse(ensureNotNullish(credentials)) as AuthResult;
		} catch (error) {
			throw new Error(`Failed to parse saved credentials: ${extractErrorMessage(error)}`);
		}
	}

	public clear(): void {
		localStorage.removeItem(this._key);
	}
}
