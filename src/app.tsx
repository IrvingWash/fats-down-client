import React, { useEffect, useState } from 'react';

import { Chart } from './components/chart/chart';
import { Header } from './components/header/header';
import { WeightForm } from './components/weight-form/weight-form';
import { User, Weight } from './objects-and-constants/objects';
import { fetchUsers, postWeight } from './api/api-transport';
import { isSameDate } from './utils/utils';

export function App(): JSX.Element {
	const [data, setData] = useState<User[]>([]);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<Header username={ data[0]?.name } />
			<Chart data={ data } />
			<WeightForm addWeight={ addWeight } />
		</div>
	);

	async function addWeight(weight: Weight): Promise<void> {
		if (isSameDate(weight.time, data[0].weights.at(-1)?.time)) {
			throw new Error('Weight for this date was already submitted');
		}

		await postWeight(weight);

		await getUsers();
	}

	async function getUsers(): Promise<void> {
		const users = await fetchUsers();

		setData(users);
	}
}
