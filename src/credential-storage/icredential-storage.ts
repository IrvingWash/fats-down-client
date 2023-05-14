export interface ICredentialStorage {
	save(credentials: unknown): void;
	load(): unknown;
	clear(): void;
}
