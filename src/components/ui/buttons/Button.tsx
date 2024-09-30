import cn from 'clsx'
import Image from 'next/image'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import Loader from '../Loader'

type Variant = 'dark' | 'white' | 'transparent' | 'gray'

const styles: Record<Variant, string> = {
	dark: 'text-sm h-[3.5rem] text-white font-bold font-second bg-darkGray rounded-sm hover:bg-darkGray/90 uppercase disabled:hover:bg-darkGray px-5',
	white:
		'text-sm h-[3rem] border border-[#eee] bg-backgroundWhite px-10 rounded-sm hover:bg-backgroundWhite/90 flex justify-center items-center font-second sm-max:px-5 disabled:hover:bg-backgroundWhite',
	transparent: 'text-3xl font-bold sm:text-2xl',
	gray: 'text-2xl font-bold sm:text-1xl'
}

interface Props {
	variant: Variant
	icon?: string
	isFetching?: boolean
}

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & Props

export function Button({
	children,
	className,
	variant,
	icon,
	isFetching = false,
	...rest
}: PropsWithChildren<TypeButton>) {
	const sizeClasses = styles[variant]
	return (
		<button
			className={cn(
				'active:scale-95 disabled:active:scale-100',
				sizeClasses,
				className
			)}
			{...rest}
		>
			{variant === 'white' && icon && (
				<Image
					alt='button icon'
					src={icon}
					width={18}
					height={18}
					quality={100}
				/>
			)}
			<p className='w-full '>{isFetching ? <Loader /> : children}</p>
		</button>
	)
}
