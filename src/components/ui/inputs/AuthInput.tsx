'use client'

import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const AuthInput = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => {
		const [inputType, setInputType] = useState(type)
		const Icon = inputType === 'password' ? EyeOff : Eye

		return (
			<div className={`relative ${extra}`}>
				<input
					ref={ref}
					disabled={disabled}
					type={inputType}
					id={id}
					placeholder={placeholder}
					className={`w-full h-[3.5rem] bg-transparent border border-borderSecondary   outline-none  rounded-sm font-second font-normal text-md  text-primary px-4 ${type === 'password' ? 'pr-7' : ''} py-3  focus:border-primary  peer `}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					autoComplete='on'
					{...rest}
				/>
				{type === 'password' && (
					<Icon
						className='absolute m-auto inset-y-0 right-2 text-borderSecondary peer-focus:text-primary cursor-pointer'
						size={16}
						onClick={() => {
							if (inputType === 'password') {
								setInputType('text')
							} else {
								setInputType('password')
							}
						}}
					/>
				)}
				<label
					htmlFor={id}
					className={`text-sm text-borderSecondary font-second rounded-xs bg-backgroundWhite px-2 absolute -top-3 left-3 peer-focus:text-primary`}
				>
					{label}
				</label>
			</div>
		)
	}
)

AuthInput.displayName = 'authInput'
