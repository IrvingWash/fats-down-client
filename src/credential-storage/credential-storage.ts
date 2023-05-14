import { extractErrorMessage, ensureNotNullish } from '@utils/helpers';
import { AuthResult } from 'src/api/api-objects';

import { ICredentialStorage } from './icredential-storage';

// TODO: Add encryption
export class CredentialStorage implements ICredentialStorage {
	private readonly _key = 'fats-down';

	public save(credentials: AuthResult): void {
		localStorage.setItem(this._key, JSON.stringify(credentials));
	}

	public load(): AuthResult | null {
		try {
			const credentials = localStorage.getItem(this._key);

			if (credentials === null) {
				return null;
			}

			return JSON.parse(ensureNotNullish(credentials)) as AuthResult;
		} catch (error) {
			throw new Error(`Failed to parse saved credentials: ${extractErrorMessage(error)}`);
		}
	}

	public clear(): void {
		localStorage.removeItem(this._key);
	}
}
