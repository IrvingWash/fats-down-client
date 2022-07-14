import React from 'react';

import * as styles from './button.scss';

interface ButtonProps {
	buttonText: string;
	type?: 'submit' | 'button';
	className?: string;
}

export function Button(props: ButtonProps): JSX.Element {
	const {
		buttonText,
		type = 'button',
		className,
	} = props;

	return (
		<button
			type={ type }
			className={ `${styles.button} ${className}` }
		>
			{ buttonText }
		</button>
	);
}
