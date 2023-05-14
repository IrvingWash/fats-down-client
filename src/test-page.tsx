import React from 'react';

import {
	Button,
	Heading,
	Input,
	Label,
} from '@ui-kit/components/';

import { Size } from '@ui-kit/constants';

export function TestPage(): JSX.Element {
	return (
		<>
			<Heading size={ Size.Large }>Sign Up</Heading>
			<Label htmlFor='pi'>Password</Label>
			<Input id='pi' />
			<Button>Hello!</Button>
		</>
	);
}
