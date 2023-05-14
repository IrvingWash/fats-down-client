import { AuthResult } from 'src/api/api-objects';

export interface ICredentialStorage {
	save(credentials: AuthResult): void;
	load(): AuthResult | null;
	clear(): void;
}
