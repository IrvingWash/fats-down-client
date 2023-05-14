import React from 'react';

import { Button, Input } from '@ui-kit/components/';
import { Size } from '@ui-kit/constants';

export function TestPage(): JSX.Element {
	return (
		<>
			<Button>Hello!</Button>
			<Input customSize={ Size.Small } />
		</>
	);
}
