import React from 'react';

import { Button, Input, Label } from '@ui-kit/components/';

export function TestPage(): JSX.Element {
	return (
		<>
			<Label htmlFor='pi'>Password</Label>
			<Input id='pi' />
			<Button>Hello!</Button>
		</>
	);
}
