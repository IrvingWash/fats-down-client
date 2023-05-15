export interface IPageManager {
	getCurrentPage: () => Page;
	setCurrentPage(page: Page): void;
}

export enum Page {
	SignUp = 'Sign Up',
	SignIn = 'Sign In',
	RaceTrack = 'Race Track',
}

export class PageManager implements IPageManager {
	private _currentPage: Page = Page.RaceTrack;
	private _onPageChanged: (page: Page) => void;

	public constructor(onPageChanged: (page: Page) => void) {
		this._onPageChanged = onPageChanged;
	}

	public getCurrentPage(): Page {
		return this._currentPage;
	}

	public setCurrentPage(page: Page): void {
		this._currentPage = page;

		this._onPageChanged(page);
	}
}