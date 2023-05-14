import React from 'react';
import classNames from 'classnames';

import * as s from './color-input.pcss';

interface ColorInputProps {
	id?: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
	className?: string;
}

export function ColorInput(props: ColorInputProps): JSX.Element {
	const {
		id,
		value,
		onChange,
		required,
		className,
	} = props;

	return (
		<input
			id={ id }
			value={ value }
			className={ classNames(s.colorInput, className) }
			type='color'
			required={ required }
			onChange={ onChange }
		/>
	);
}
