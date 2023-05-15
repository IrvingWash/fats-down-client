import {
	action,
	makeObservable,
	observable,
} from 'mobx';

import { IAPI } from 'src/api/iapi';
import { IPageManager, Page } from 'src/page-manager/page-manager';

export interface ISignUpFormModel {
	username$: string;
	email$: string;
	password$: string;
	color$: string;
	setUsername(value: string): void;
	setEmail(value: string): void;
	setColor(value: string): void;
	setPassword(value: string): void;
	submit(): Promise<void>;
}

export class SignUpFormModel implements ISignUpFormModel {
	public username$: string = '';
	public email$: string = '';
	public color$: string = '#000000';
	public password$: string = '';

	private _api: IAPI;
	private _pageManager: IPageManager;

	public constructor(api: IAPI, pageManager: IPageManager) {
		makeObservable(
			this,
			{
				username$: observable,
				email$: observable,
				password$: observable,
				color$: observable,
				setUsername: action,
				setEmail: action,
				setColor: action,
				setPassword: action,
			}
		);

		this._api = api;
		this._pageManager = pageManager;
	}

	public setUsername(value: string): void {
		this.username$ = value;
	}

	public setEmail(value: string): void {
		this.email$ = value;
	}

	public setColor(value: string): void {
		this.color$ = value;
	}

	public setPassword(value: string): void {
		this.password$ = value;
	}

	public async submit(): Promise<void> {
		await this._api.signUp({
			username: this.username$,
			email: this.email$,
			password: this.password$,
			color: this.color$,
		});

		this._pageManager.setCurrentPage(Page.RaceTrack);
	}
}
