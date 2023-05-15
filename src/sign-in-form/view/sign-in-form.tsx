import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';

import {
	Button,
	Heading,
	Input,
	Label,
} from '@ui-kit/components';

import { Intent, Size } from '@ui-kit/constants';

import { ISignInFormModel } from '../model/sign-in-form-model';

import * as s from './sign-in-form.pcss';

interface SignInFormProps {
	model: ISignInFormModel;
}

export const SignInForm = observer((props: SignInFormProps): JSX.Element => {
	const { model } = props;

	return (
		<div className={ s.signInForm }>
			<Heading
			className={ s.title }
				size={ Size.Large }
			>
				Sign In
			</Heading>

			<form
				className={ s.form }
				onSubmit={ onFormSubmit }
			>
				<div className={ s.control }>
					<Label htmlFor='emailInput'>Email</Label>
					<Input
						id='emailInput'
						type='email'
						placeholder='No spam, right?'
						required
						value={ model.email$ }
						onChange={ onEmailChange }
					/>
				</div>

				<div className={ s.control }>
					<Label htmlFor='password-input'>Password</Label>
					<Input
						id='password-input'
						value={ model.password$ }
						minLength={ 8 }
						type='password'
						placeholder='Hope you remember it'
						required
						onChange={ onPasswordChange }
					/>
				</div>

				<Button
					type='submit'
					intent={ Intent.Primary }
				>
					Continue
				</Button>
			</form>
		</div>
	);

	function onEmailChange(event: ChangeEvent<HTMLInputElement>): void {
		model.setEmail(event.target.value);
	}

	function onPasswordChange(event: ChangeEvent<HTMLInputElement>): void {
		model.setPassword(event.target.value);
	}

	async function onFormSubmit(event: ChangeEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();

		await model.submit();
	}
});
