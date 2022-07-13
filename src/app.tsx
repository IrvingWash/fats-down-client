import React from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';
import { Input } from './components/ui/input/input';

import dummyData from './dummy-data.json';

export function App(): JSX.Element {
	return (
		<div>
			<Header />
			<Chart data={ dummyData } />
			<Input />
		</div>
	);
}
