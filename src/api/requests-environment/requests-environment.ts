import {
	HTTPMethod,
	RequestMetainfo,
	IRequestsEnvironment,
} from './irequests-environment';

export class RequestsEnvironment implements IRequestsEnvironment {
	private readonly _baseURL: string;

	private readonly _authBaseURL: URL;
	private readonly _userBaseURL: URL;
	private readonly _weightBaseURL: URL;

	public constructor(baseURL: string) {
		this._baseURL = baseURL;

		this._authBaseURL = new URL('auth', this._baseURL);
		this._userBaseURL = new URL('user', this._baseURL);
		this._weightBaseURL = new URL('weight', this._baseURL);
	}

	public signUp(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('sign-up', this._authBaseURL),
			HTTPMethod.Post
		);
	}

	public signIn(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('sign-in', this._authBaseURL),
			HTTPMethod.Post
		);
	}

	public refresh(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('refresh', this._authBaseURL),
			HTTPMethod.Post
		);
	}

	public signOut(): RequestMetainfo {
		return this._makeRequestMetainfo(
			new URL('sign-out', this._authBaseURL),
			HTTPMethod.Post
		);
	}

	public allUsers(): RequestMetainfo {
		return this._makeRequestMetainfo(new URL('all', this._userBaseURL));
	}

	public createWeight(): RequestMetainfo {
		return this._makeRequestMetainfo(
			this._weightBaseURL,
			HTTPMethod.Post
		);
	}

	public updateWeight(): RequestMetainfo {
		return this._makeRequestMetainfo(
			this._weightBaseURL,
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

