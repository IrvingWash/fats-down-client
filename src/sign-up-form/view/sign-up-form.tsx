import React from 'react';
import { observer } from 'mobx-react';

import {
	Button,
	ColorInput,
	Heading,
	Input,
	Label,
} from '@ui-kit/components';

import { Intent, Size } from '@ui-kit/constants';

import { ISignUpFormModel } from '../model/sign-up-form-model';

import * as s from './sign-up-form.pcss';

interface SignUpFormProps {
	model: ISignUpFormModel;
}

export const SignUpForm = observer((props: SignUpFormProps): JSX.Element => {
	const { model } = props;

	return (
		<div className={ s.signUpForm }>
			<Heading
			className={ s.title }
				size={ Size.Large }
			>
				SignUp
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
						placeholder='No spam, honest'
						required
						value={ model.email$ }
						onChange={ onEmailChange }
					/>
				</div>

				<div className={ s.control }>
					<Label htmlFor='usernameInput'>Username</Label>
					<Input
						id='usernameInput'
						value={ model.username$ }
						placeholder='How do you want to be seen?'
						required
						onChange={ onUsernameChange }
					/>
				</div>

				<div className={ s.control }>
					<Label htmlFor='color-input'>Color</Label>
					<ColorInput
						id='color-input'
						value={ model.color$ }
						required
						onInput={ onColorChange }
					/>
				</div>

				<div className={ s.control }>
					<Label htmlFor='password-input'>Password</Label>
					<Input
						id='password-input'
						value={ model.password$ }
						minLength={ 8 }
						type='password'
						placeholder='Come up with a new one'
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

	function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
		model.setEmail(event.target.value);
	}

	function onUsernameChange(event: React.ChangeEvent<HTMLInputElement>): void {
		model.setUsername(event.target.value);
	}

	function onColorChange(event: React.ChangeEvent<HTMLInputElement>): void {
		model.setColor(event.target.value);
	}

	function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
		model.setPassword(event.target.value);
	}

	async function onFormSubmit(event: React.ChangeEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();

		await model.submit();
	}
});
