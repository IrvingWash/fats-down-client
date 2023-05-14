import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Intent, Size } from '@ui-kit/constants';

import * as s from './heading.pcss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	size?: Size;
	intent?: Intent,
}

export function Heading(props: HeadingProps): JSX.Element {
	const {
		intent = Intent.Secondary,
		size = Size.Medium,
		children,
		className,
	} = props;

	return (
		<h2
			className={ classNames(s[size], s[intent], className) }
			{ ...props }
		>
			{ children }
		</h2>
	);
}
