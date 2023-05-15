import React from 'react';

import { Header } from '@ui-kit/components';

import { SignUpForm } from './sign-up-form/view/sign-up-form';
import { ISignUpFormModel, SignUpFormModel } from './sign-up-form/model/sign-up-form-model';
import { ICredentialStorage } from './credential-storage/icredential-storage';
import { IAPI } from './api/iapi';
import { CredentialStorage } from './credential-storage/credential-storage';
import { API } from './api/api';
import { SignInForm } from './sign-in-form/view/sign-in-form';
import { ISignInFormModel, SignInFormModel } from './sign-in-form/model/sign-in-form-model';
import { RaceTrack } from './race-track/view/race-track';
import { IRaceTackModel, RaceTrackModel } from './race-track/model/race-track-model';

interface AppProps {}

export class App extends React.Component {
	private readonly _credentialStorage: ICredentialStorage;

	private readonly _api: IAPI;

	private readonly _signUpFormModel: ISignUpFormModel;
	private readonly _signInFormModel: ISignInFormModel;
	private readonly _raceTrackModel: IRaceTackModel;

	public constructor(props: AppProps) {
		super(props);

		this._credentialStorage = new CredentialStorage();

		this._api = new API(this._credentialStorage);

		this._signUpFormModel = new SignUpFormModel(this._api);
		this._signInFormModel = new SignInFormModel(this._api);
		this._raceTrackModel = new RaceTrackModel(this._api);
	}

	public override render(): JSX.Element {
		return (
			<main>
				<Header title='FatsDown' />

				<SignUpForm model={ this._signUpFormModel } />
				<SignInForm model={ this._signInFormModel } />
				<RaceTrack model={ this._raceTrackModel } />
			</main>
		);
	}
}
