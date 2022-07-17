import React from 'react';

import * as styles from './header.scss';

interface HeaderProps {
	username?: string;
}

export function Header(props: HeaderProps): JSX.Element {
	const { username } = props;

	return (
		<header className={ styles.header }>
			<h3>Fat's Down</h3>
			<h4>
				{ username !== undefined
					? username
					: 'Sign in'
				}
			</h4>
		</header>
	);
}
