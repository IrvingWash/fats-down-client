import React from 'react';

import { Header } from '@ui-kit/components';

import { SignUpForm } from './sign-up-form/view/sign-up-form';

export class App extends React.Component {
	public override render(): JSX.Element {
		return (
			<main>
				<Header title='FatsDown' />

				<SignUpForm />
			</main>
		);
	}
}
