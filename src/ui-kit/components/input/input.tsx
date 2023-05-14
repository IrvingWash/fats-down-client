import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import { Size } from '@ui-kit/constants';

import * as s from './input.pcss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	stretch?: boolean;
	customSize?: Exclude<Size, Size.Large>;
}

export function Input(props: InputProps): JSX.Element {
	let {
		className,
		stretch = false,
		customSize = Size.Medium,
	} = props;

	return (
		<input
			{ ...props }
			className={ classNames(
				s.input,
				s[customSize],
				stretch ? s.stretch : null,
				className
			) }
		/>
	);
}
