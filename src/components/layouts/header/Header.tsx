'use client'

import { Mail, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import BurgerMenu from './BurgerMenu'
import { MENU } from './header.data'
import styles from './header.module.scss'
import Logo from '@/public/image/logo.svg'

interface Props {
	currentUrl: string | null
}

export function Header({ currentUrl }: Props) {
	return (
		<>
			<header className={styles.header}>
				<Link href='/'>
					<Image
						src={Logo}
						alt='logo'
						className={styles.logo}
						quality={100}
						loading='eager'
					/>
				</Link>
				<nav className={styles.navigation}>
					<ul>
						{MENU.map(item => (
							<li key={item.name}>
								<Link
									href={item.url}
									className={`${currentUrl && currentUrl.includes(item.url) ? 'underline decoration-1' : ''}`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className={styles.links}>
					<Link href={'#'}>
						<Mail
							className='text-yellowAccent'
							size={30}
						/>
					</Link>
					<Link href={'#'}>
						<UsersRound
							className='text-yellowAccent'
							size={30}
						/>
					</Link>
				</div>

				<BurgerMenu />
			</header>
		</>
	)
}

export default Header
