export function ensureNotNullish<T>(value: T | undefined | null, message?: string): T {
	if (value === undefined || value === null) {
		throw new Error(message ?? 'Value is nullish');
	}

	return value;
}
