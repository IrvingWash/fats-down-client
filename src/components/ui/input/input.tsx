import React from 'react';

import * as styles from './input.scss';

interface InputProps {
	value: string | number;
	onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type?: 'text' | 'number';
	className?: string;
	placeholder?: string;
}

export function Input(props: InputProps): JSX.Element {
	const {
		value,
		onValueChange,
		type = 'text',
		className,
		placeholder,
	} = props;

	return (
		<input
			value={ value }
			type={ type }
			className={ `${styles.input} ${className}` }
			placeholder={ placeholder }
			onChange={ handleInputChange }
		/>
	);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		onValueChange(event);
	}
}
