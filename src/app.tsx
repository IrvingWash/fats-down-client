import React from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';

import dummyData from './dummy-data.json';

export function App(): JSX.Element {
	return (
		<div>
			<Header />
			<Chart data={ dummyData } />
		</div>
	);
}
