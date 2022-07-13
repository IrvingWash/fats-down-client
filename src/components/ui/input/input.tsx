import React from 'react';

import * as styles from './input.scss';

interface InputProps {
	type?: 'text' | 'number';
	value?: string;
	className?: string;
	placeholder?: string;
}

export function Input(props: InputProps): JSX.Element {
	const {
		type = 'text',
		value,
		className,
		placeholder,
	} = props;

	return (
		<input
			value={ value }
			type={ type }
			className={ `${styles.input} ${className}` }
			placeholder={ placeholder }
		/>
	);
}
