'use client'

import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'

import defaultStyles from '@/components/ui/defaultStyles.module.scss'

import styles from './styles.module.scss'

interface InputFieldProps {
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
		{ label, extra, type, placeholder, state, disabled, isNumber, ...rest },
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
					placeholder={placeholder}
					className={clsx(
						defaultStyles.input,
						`peer ${type === 'password' ? 'pr-7' : ''}`
					)}
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
						className={styles.passwordIcon}
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
				<label className={styles.label}>{label}</label>
			</div>
		)
	}
)

AuthInput.displayName = 'authInput'
