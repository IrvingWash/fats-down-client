import React from 'react';

import { TestPage } from './test-page';

export class App extends React.Component {
	public override render(): JSX.Element {
		return (
			<main>
				<TestPage />
			</main>
		);
	}
}
