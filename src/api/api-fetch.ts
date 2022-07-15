export const enum HttpMethod {
	Get = 'GET',
	Post = 'POST',
}

export async function apiFetch<ApiEntity>(
	url: string,
	method: HttpMethod = HttpMethod.Get,
	body: object | string
): Promise<ApiEntity> {
	const bodyJson = JSON.stringify(body);

	const response = await fetch(
		url,
		{
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: bodyJson,
		}
	);

	return await response.json();
}
