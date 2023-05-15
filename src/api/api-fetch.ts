import { ICredentialStorage } from 'src/credential-storage/icredential-storage';

import { RequestMetainfo } from './requests-environment/irequests-environment';

export type APIFetch = <T>(RequestMetainfo: RequestMetainfo, payload?: object) => Promise<T>

export function makeAPIFetch(credentialStorage: ICredentialStorage): APIFetch {
	return (requestMetainfo: RequestMetainfo, payload?: object) => apiFetch(requestMetainfo, credentialStorage, payload);
}

async function apiFetch<T>(requestMetainfo: RequestMetainfo, credentialStorage: ICredentialStorage, payload?: object): Promise<T> {
	const response = await fetch(
		requestMetainfo.url,
		{
			headers: makeHeaders(credentialStorage.load()?.tokens?.accessToken),
			method: requestMetainfo.method,
			body: payload === undefined ? undefined : JSON.stringify(payload),
		}
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
}

function makeHeaders(accessToken: string | undefined): Headers {
	const headers = new Headers();

	headers.append('Content-Type', 'application/json');

	if (accessToken !== undefined) {
		headers.append('Authorization', `Bearer ${accessToken}`);
	}

	return headers;
}
