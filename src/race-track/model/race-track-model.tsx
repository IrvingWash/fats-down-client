import {
	action,
	makeObservable,
	observable,
} from 'mobx';

import { User } from 'src/api/api-objects';
import { IAPI } from 'src/api/iapi';

export interface IRaceTackModel {
	userData$: User[];
	todaysWeight$: string;
	getUserData: () => Promise<void>;
	setTodaysWeight(value: string): void;
	submit(): Promise<void>;
}

export class RaceTrackModel implements IRaceTackModel {
	public userData$: User[] = [];
	public todaysWeight$: string = '';

	private readonly _api: IAPI;

	public constructor(api: IAPI) {
		makeObservable(
			this,
			{
				userData$: observable,
				todaysWeight$: observable,
				getUserData: action,
				setTodaysWeight: action,
			}
		);

		this._api = api;
	}

	public async getUserData(): Promise<void> {
		this.userData$ = await this._api.allUsers();
	}

	public setTodaysWeight(value: string): void {
		if (isNaN(+value)) {
			throw new Error('Weight must be a number');
		}

		this.todaysWeight$ = value;
	}

	public async submit(): Promise<void> {
		const weight = +this.todaysWeight$;

		if (isNaN(weight)) {
			throw new Error('Weight must be a number');
		}

		await this._api.createWeight({
			date: String(Date.now()),
			value: weight,
		});
	}
}
