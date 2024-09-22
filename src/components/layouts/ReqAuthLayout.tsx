import { headers } from 'next/headers'
import { PropsWithChildren } from 'react'

import Header from './header/Header'
import styles from './layout.module.scss'

function ReqAuthLayout({ children }: PropsWithChildren<unknown>) {
	const url = headers().get('x-current-path')

	return (
		<div className={styles.container}>
			<Header currentUrl={url} />
			{children}
		</div>
	)
}

export default ReqAuthLayout
