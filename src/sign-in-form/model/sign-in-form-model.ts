import {
	action,
	makeObservable,
	observable,
} from 'mobx';

import { IAPI } from 'src/api/iapi';

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

	public constructor(api: IAPI) {
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
	}
}
