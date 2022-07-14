import React, { useState } from 'react';

import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { Weight } from '../../objects-and-constants/objects';

import * as styles from './weight-form.scss';

interface WeightFormProps {
	addWeight: (weight: Weight) => void;
}

export function WeightForm(props: WeightFormProps): JSX.Element {
	const [weight, setWeight] = useState<number | string>('');

	return (
		<form onSubmit={ handleFormSubmit } className={ styles.weightForm }>
			<Input
				className={ styles.weightInput }
				type='number'
				value={ weight }
				placeholder={ 'Today\'s weight' }
				onValueChange={ handleWeightInputChange }
			/>

			<Button
				type='submit'
				buttonText='Submit'
			/>
		</form>
	);

	function handleWeightInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setWeight(event.target.value);
	}

	function handleFormSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
		event.preventDefault();

		const date = {
			day: 14,
			month: 7,
			year: 2022,
		};

		props.addWeight({ value: +weight, time: date });
	}
}
