import React from 'react';

import { Header } from '@ui-kit/components';

import {
	IPageManager,
	Page,
	PageManager,
} from './page-manager/page-manager';

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

interface AppState {
	currentPage: Page;
	username?: string;
}

export class App extends React.Component<AppProps, AppState> {
	private readonly _credentialStorage: ICredentialStorage;
	private readonly _api: IAPI;
	private readonly _pageManager: IPageManager;

	private readonly _signUpFormModel: ISignUpFormModel;
	private readonly _signInFormModel: ISignInFormModel;
	private readonly _raceTrackModel: IRaceTackModel;

	public constructor(props: AppProps) {
		super(props);

		this._credentialStorage = new CredentialStorage();
		this._api = new API(this._credentialStorage);
		this._pageManager = new PageManager(this._pageChangeHandler);

		this.state = {
			currentPage: this._pageManager.getCurrentPage(),
			username: this._credentialStorage.load()?.username,
		};

		this._signUpFormModel = new SignUpFormModel(this._api, this._pageManager);
		this._signInFormModel = new SignInFormModel(this._api, this._pageManager);
		this._raceTrackModel = new RaceTrackModel(this._api);
	}

	public override render(): JSX.Element {
		return (
			<main>
				<Header
					title='FatsDown'
					navigationItems={ this._pageManager.createNavigationItems() }
					username={ this.state.username }
				/>

				{ this._renderPage() }
			</main>
		);
	}

	public override componentDidUpdate(_prevProps: Readonly<AppProps>, prevState: Readonly<AppState>): void {
		this._checkHasLoggedIn(prevState);
	}

	private _renderPage(): JSX.Element {
		switch (this.state.currentPage) {
			case Page.SignUp:
				return <SignUpForm model={ this._signUpFormModel } />;
			case Page.SignIn:
				return <SignInForm model={ this._signInFormModel } />;
			default:
				return <RaceTrack model={ this._raceTrackModel } />;
		}
	}

	private _pageChangeHandler = (page: Page): void => {
		this.setState({
			currentPage: page,
		});
	};

	private _checkHasLoggedIn(prevState: Readonly<AppState>): void {
		if (prevState.currentPage === this.state.currentPage || this.state.username !== undefined) {
			return;
		}

		this.setState({ username: this._credentialStorage.load()?.username });
	}
}
