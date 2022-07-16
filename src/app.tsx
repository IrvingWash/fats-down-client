import React, { useEffect, useState } from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';
import { WeightForm } from './components/weight-form/weight-form';
import { User, Weight } from './objects-and-constants/objects';
import { fetchUsers } from './api/api-transport';

export function App(): JSX.Element {
	const [data, setData] = useState<User[]>([]);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<Header />
			<Chart data={ data } />
			<WeightForm addWeight={ addWeight } />
		</div>
	);

	function addWeight(weight: Weight): void {
		// const newData = [ ...dummyData];
		// newData[0].weights.push(weight);

		// setData(newData);
	}

	async function getUsers(): Promise<void> {
		const users = await fetchUsers();

		setData(users);
	}
}
