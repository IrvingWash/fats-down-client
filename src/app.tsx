import React from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';
import { WeightForm } from './components/weight-form/weight-form';

import dummyData from './dummy-data.json';

export function App(): JSX.Element {
	return (
		<div>
			<Header />
			<Chart data={ dummyData } />
			<WeightForm />
		</div>
	);
}
