import { ensureNotNullish } from './helpers';

export class EnvExtractor {
	public static get serverURL(): string {
		return ensureNotNullish(
			process.env['SERVER_URL'],
			this._makeNotProvidedMessage('SERVER_URL')
		);
	}

	private static _makeNotProvidedMessage(variableName: string): string {
		return `Environment variable ${variableName} is not provided`;
	}
}
