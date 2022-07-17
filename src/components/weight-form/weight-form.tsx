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

		const date = new Date();

		const time = {
			day: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear(),
		};

		props.addWeight({ value: +weight, time });

		setWeight('');
	}
}
