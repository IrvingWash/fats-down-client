import React from 'react';
import classNames from 'classnames';

import { Intent, Size } from '@ui-kit/constants';

import { Button } from '../button/button';

import * as s from './header.pcss';

export interface NavigationItem {
	title: string;
	handler: () => void;
}

interface HeaderProps {
	title: string;
	navigationItems?: NavigationItem[]
	username?: string;
	className?: string;
}

export function Header(props: HeaderProps): JSX.Element {
	const {
		title,
		className,
		username,
		navigationItems,
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
						{ renderNavigationItems() }
					</div>
				)
			}
		</header>
	);

	function renderNavigationItems(): JSX.Element[] | undefined {
		return navigationItems?.map((item) => (
			<Button
				key={ item.title }
				size={ Size.Small }
				intent={ Intent.Accent }
				onClick={ item.handler }
			>
				{ item.title }
			</Button>
		));
	}
}
