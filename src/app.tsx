import React, { useState } from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';
import { WeightForm } from './components/weight-form/weight-form';
import { Weight } from './objects-and-constants/objects';

import dummyData from './dummy-data.json';

export function App(): JSX.Element {
	const [data, setData] = useState(dummyData);

	return (
		<div>
			<Header />
			<Chart data={ data } />
			<WeightForm addWeight={ addWeight } />
		</div>
	);

	function addWeight(weight: Weight): void {
		const newData = [ ...dummyData];
		newData[0].weights.push(weight);

		setData(newData);
	}
}
