import { extractErrorMessage, ensureNotNullish } from '@utils/helpers';

import { ICredentialStorage } from './icredential-storage';

export class CredentialStorage implements ICredentialStorage {
	private readonly _key: string;

	public constructor(key: string) {
		this._key = key;
	}

	// TODO: Change type ASAP
	public save(credentials: unknown): void {
		try {
			const value = JSON.stringify(credentials);

			localStorage.setItem(this._key, value);
		} catch (error) {
			throw new Error(`Failed to serialize credentials: ${extractErrorMessage(error)}`);
		}
	}

	// TODO: Change type ASAP
	public load(): unknown {
		try {
			const credentials = localStorage.getItem(this._key);

			return JSON.parse(ensureNotNullish(credentials));
		} catch (error) {
			throw new Error(`Failed to parse saved credentials: ${extractErrorMessage(error)}`);
		}
	}

	public clear(): void {
		localStorage.removeItem(this._key);
	}
}
