import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import { Intent, Size } from '@ui-kit/constants';

import * as s from './button.pcss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	intent?: Intent;
	size?: Size,
}

export function Button(props: ButtonProps): JSX.Element {
	const {
		className,
		children,
		intent = Intent.Primary,
		size = Size.Medium,
	} = props;

	return (
		<button
			{ ...props }
			className={ classNames(s.button, s[intent], s[size], className) }
		>
			{ children }
		</button>
	);
}
