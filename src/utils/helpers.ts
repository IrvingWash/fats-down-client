export function ensureNotNullish<T>(value: T | undefined | null, message?: string): T {
	if (value === undefined || value === null) {
		throw new Error(message ?? 'Value is nullish');
	}

	return value;
}

export function extractErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === 'object') {
		return JSON.stringify(error);
	}

	if (error === undefined || error === null) {
		return 'Unknown error';
	}

	return error.toString();
}
