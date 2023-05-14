export const enum HTTPMethod {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Patch = 'PATCH',
	Delete = 'DELETE',
}

export interface RequestMetainfo {
	url: URL;
	method: HTTPMethod;
}

export interface IRequestsEnvironment {
	test(): RequestMetainfo;
}
