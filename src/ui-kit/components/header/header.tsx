import React from 'react';
import classNames from 'classnames';

import { Intent, Size } from '@ui-kit/constants';

import { Button } from '../button/button';

import * as s from './header.pcss';

interface HeaderProps {
	title: string;
	username?: string;
	showAuthButton?: boolean;
	className?: string;
}

export function Header(props: HeaderProps): JSX.Element {
	const {
		title,
		className,
		username,
		showAuthButton,
	} = props;

	return (
		<header className={ classNames(s.header, className) }>
			<div className={ s.title }>{ title }</div>

			{ showAuthButton
				? (
					<Button
						size={ Size.Small }
						intent={ Intent.Accent }
					>
						Join
					</Button>
				)
				: null
			}

			{ username && <div className={ s.username }>{ username }</div> }
		</header>
	);
}
