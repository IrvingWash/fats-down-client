import React, { useEffect, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import {
	Button,
	Input,
	Label,
} from '@ui-kit/components';

import { WeightChart } from 'src/weight-chart/weight-chart';

import { IRaceTackModel } from '../model/race-track-model';

import * as s from './race-track.pcss';

interface RaceTrackProps {
	model: IRaceTackModel
}

export const RaceTrack = observer((props: RaceTrackProps): JSX.Element => {
	const { model } = props;

	useEffect(() => {
		model.getUserData();
	}, []);

	return (
		<div className={ s.raceTrack }>
			<WeightChart userData={ model.userData$ } />

			<form
				className={ s.form }
				onSubmit={ onFormSubmit }
			>
				<div className={ s.control }>
					<Label htmlFor='weightInput'>Weight</Label>
					<Input
						id='weightInput'
						placeholder="Today's results"
						type='number'
						value={ model.todaysWeight$ }
						onChange={ onWeightInputChange }
					/>

					<Button>Submit</Button>
				</div>
			</form>
		</div>
	);

	function onWeightInputChange(event: ChangeEvent<HTMLInputElement>): void {
		model.setTodaysWeight(event.target.value);
	}

	async function onFormSubmit(event: ChangeEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();

		await model.submit();

		await model.getUserData();
	}
});
