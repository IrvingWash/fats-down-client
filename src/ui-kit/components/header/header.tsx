import React from 'react';
import classNames from 'classnames';

import { Intent, Size } from '@ui-kit/constants';

import { Button } from '../button/button';

import * as s from './header.pcss';

interface HeaderProps {
	title: string;
	username?: string;
	className?: string;
}

export function Header(props: HeaderProps): JSX.Element {
	const {
		title,
		className,
		username,
	} = props;

	return (
		<header className={ classNames(s.header, className) }>
			<div className={ s.title }>{ title }</div>

			{ username
				? (
					<div className={ s.username }>{ username }</div>
				)
				: (
					<div className={ s.joinBlock }>
						<Button
							size={ Size.Small }
							intent={ Intent.Accent }
						>
							Sign Up
						</Button>
						<Button
							size={ Size.Small }
							intent={ Intent.Accent }
						>
							Sign In
						</Button>
					</div>
				)
			}
		</header>
	);
}
