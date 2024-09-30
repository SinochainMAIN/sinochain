'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'

import defaultStyles from '@/components/ui/defaultStyles.module.scss'

interface InputFieldProps {
	label: string
	extra?: string
	placeholder?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const InputLabel = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => {
		return (
			<div className={`relative ${extra} flex flex-col justify-center`}>
				{label && <label className={defaultStyles.label}>{label}</label>}
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					placeholder={placeholder}
					className={clsx(defaultStyles.input)}
					autoComplete='on'
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
					{...rest}
				/>
			</div>
		)
	}
)

InputLabel.displayName = 'inputLabel'
