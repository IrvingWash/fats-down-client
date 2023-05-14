import React from 'react';

import {
	Button,
	Heading,
	Input,
	Label,
} from '@ui-kit/components';

import { Intent, Size } from '@ui-kit/constants';

import * as s from './sign-up-form.pcss';

export function SignUpForm(): JSX.Element {
	return (
		<div className={ s.signUpForm }>
			<Heading
			className={ s.title }
				size={ Size.Large }
			>
				SignUp
			</Heading>

			<form className={ s.form }>
				<div className={ s.control }>
					<Label>Email</Label>
					<Input
						type='email'
						placeholder='No spam, honest'
						required
					/>
				</div>

				<div className={ s.control }>
					<Label>Username</Label>
					<Input
						placeholder='How do you want to be seen?'
						required
					/>
				</div>

				<div className={ s.control }>
					<Label>Password</Label>
					<Input
						minLength={ 8 }
						type='password'
						placeholder='Come up with a new one'
						required
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
}
