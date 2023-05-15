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

	public signUp(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('auth/sign-up', this._baseURL),
			HTTPMethod.Post
		);
	}

	public signIn(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('auth/sign-in', this._baseURL),
			HTTPMethod.Post
		);
	}

	public refresh(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('auth/refresh', this._baseURL),
			HTTPMethod.Post
		);
	}

	public signOut(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('auth/sign-out', this._baseURL),
			HTTPMethod.Post
		);
	}

	public allUsers(): RequestMetainfo {
		return this._makeRequestMetainfo(new URL('user/all', this._baseURL));
	}

	public createWeight(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('weight', this._baseURL),
			HTTPMethod.Post
		);
	}

	public updateWeight(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('weight', this._baseURL),
			HTTPMethod.Patch
		);
	}

	private _makeRequestMetainfo(url: URL, method?: HTTPMethod): RequestMetainfo {
		return {
			url,
			method: method ?? HTTPMethod.Get,
		};
	}
}

