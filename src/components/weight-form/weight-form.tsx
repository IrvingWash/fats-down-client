import React, { useState } from 'react';

import { Input } from '../ui/input/input';

export function WeightForm(): JSX.Element {
	const [weight, setWeight] = useState<number | string>('');

	return (
		<form>
			<Input
				type='number'
				value={ weight }
				placeholder='Weight'
				onValueChange={ handleWeightInputChange }
			/>
		</form>
	);

	function handleWeightInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setWeight(event.target.value);
	}
}
