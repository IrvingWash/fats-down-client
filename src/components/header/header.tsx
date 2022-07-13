import React from 'react';

import * as styles from './header.scss';

export function Header(): JSX.Element {
	return (
		<header className={ styles.header }>
			<h3>Fat's Down</h3>
		</header>
	);
}
