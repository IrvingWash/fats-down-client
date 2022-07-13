import React from 'react';

import { Chart } from './components/chart/chart';

import dummyData from './dummy-data.json';

export function App(): JSX.Element {
	return (
		<div>
			<Chart data={ dummyData } />
		</div>
	);
}
