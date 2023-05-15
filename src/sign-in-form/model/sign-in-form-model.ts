import {
	action,
	makeObservable,
	observable,
} from 'mobx';

import { IAPI } from 'src/api/iapi';
import { IPageManager, Page } from 'src/page-manager/page-manager';

export interface ISignInFormModel {
	email$: string;
	password$: string;
	setEmail(value: string): void;
	setPassword(value: string): void;
	submit(): Promise<void>;
}

export class SignInFormModel implements ISignInFormModel {
	public email$: string = '';
	public password$: string = '';

	private _api: IAPI;
	private _pageManager: IPageManager;

	public constructor(api: IAPI, pageManager: IPageManager) {
		makeObservable(
			this,
			{
				email$: observable,
				password$: observable,
				setEmail: action,
				setPassword: action,
			}
		);

		this._api = api;
		this._pageManager = pageManager;
	}

	public setEmail(value: string): void {
		this.email$ = value;
	}

	public setPassword(value: string): void {
		this.password$ = value;
	}

	public async submit(): Promise<void> {
		await this._api.signIn({
			email: this.email$,
			password: this.password$,
		});

		this._pageManager.setCurrentPage(Page.RaceTrack);
	}
}
