import { extractErrorMessage } from '@utils/helpers';

import { RequestMetainfo } from './requests-environment/irequests-environment';

export type APIFetch = ReturnType<typeof makeAPIFetch>;

export function makeAPIFetch(accessToken: string): (requestMetainfo: RequestMetainfo, payload: object) => ReturnType<typeof apiFetch> {
	const headers = makeHeaders(accessToken);

	return (requestMetainfo: RequestMetainfo, payload: object) => apiFetch(requestMetainfo, headers, payload);
}

async function apiFetch<T>(requestMetainfo: RequestMetainfo, headers: Headers, payload?: object): Promise<T> {
	let body: string | undefined;

	try {
		body = JSON.stringify(payload);
	} catch (error) {
		throw new Error(`Failed to serialize payload: ${extractErrorMessage(error)}`);
	}

	const response = await fetch(
		requestMetainfo.url,
		{ headers, body }
	);

	return await response.json();
}

function makeHeaders(accessToken: string): Headers {
	const headers = new Headers();

	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', accessToken);

	return headers;
}
