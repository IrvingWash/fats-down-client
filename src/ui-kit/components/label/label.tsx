import React, { LabelHTMLAttributes } from 'react';
import classNames from 'classnames';

import { Size } from '@ui-kit/constants';

import * as s from './label.pcss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	size?: Exclude<Size, Size.Large>;
}

export function Label(props: LabelProps): JSX.Element {
	const {
		size = Size.Medium,
		children,
		className,
	} = props;

	return (
		<label
			{ ...props }
			className={ classNames(s.label, s[size], className) }
		>
			{ children }
		</label>
	);
}
