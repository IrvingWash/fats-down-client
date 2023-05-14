import {
	HTTPMethod,
	RequestMetainfo,
	IRequestsEnvironment,
} from './irequests-environment';

export class RequestsEnvironment implements IRequestsEnvironment {
	private readonly _baseURL: string;

	public constructor(baseURL: string) {
		this._baseURL = baseURL;
	}

	// TODO: Delete ASAP
	public test(): RequestMetainfo {
		const url = new URL('test', this._baseURL);

		return this._makeRequestMetainfo(url);
	}

	private _makeRequestMetainfo(url: URL, method?: HTTPMethod): RequestMetainfo {
		return {
			url,
			method: method ?? HTTPMethod.Get,
		};
	}
}

