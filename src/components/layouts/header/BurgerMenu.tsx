import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { MENU } from './header.data'

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleClickMenuItem = (): void => {
		setIsOpen(false)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div
			className='relative'
			ref={menuRef}
		>
			<button
				className='block md:hidden focus:outline-none'
				onClick={toggleMenu}
			>
				<div
					className={`w-8 h-0.5 bg-yellowAccent mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
				></div>
				<div
					className={`w-8 h-0.5 bg-yellowAccent mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				></div>
				<div
					className={`w-8 h-0.5 bg-yellowAccent transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
				></div>
			</button>

			<nav
				className={`absolute right-0 top-10 w-[200px] bg-white transition-max-height duration-500 ease-in-out overflow-hidden ${
					isOpen ? 'max-h-screen' : 'max-h-0'
				}`}
			>
				<ul className='flex flex-col items-center'>
					{MENU.map(item => (
						<li
							key={item.name}
							className='flex gap-3 items-center w-full py-1 px-4 pl-5'
							onClick={handleClickMenuItem}
						>
							<item.icon
								className='text-yellowAccent'
								size={20}
							/>
							<Link
								href={'#'}
								className='text-sm font-primary font-medium text-primary'
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default BurgerMenu
