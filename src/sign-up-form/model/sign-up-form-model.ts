import {
	action,
	makeObservable,
	observable,
} from 'mobx';

import { IAPI } from 'src/api/iapi';

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

	public constructor(api: IAPI) {
		makeObservable(
			this,
			{
				username$: observable,
				email$: observable,
				password$: observable,
				setUsername: action,
				setEmail: action,
				setColor: action,
				setPassword: action,
			}
		);

		this._api = api;
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
	}
}
