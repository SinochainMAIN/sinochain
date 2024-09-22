import Image from 'next/image'
import { PropsWithChildren } from 'react'

import styles from './authLayout.module.scss'
import Logo from '@/public/image/logo.svg'
import Truck from '@/public/image/truck.png'

function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.container}>
			<Image
				src={Logo}
				alt='logo'
				style={{}}
				className={styles.logo}
				quality={100}
				loading='eager'
			/>
			<div className={styles.background}>
				<Image
					src={Truck}
					alt='Truck Background'
					fill
					style={{ objectFit: 'cover' }}
					quality={100}
					loading='eager'
				/>
			</div>
			<div className={styles.backdropBlur}>{children}</div>
		</div>
	)
}

export default AuthLayout
