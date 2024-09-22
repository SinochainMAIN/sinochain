'use client'

import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { AuthInput } from '@/components/ui/inputs/AuthInput'

import { IAuthForm } from '@/types/auth.types'

import { ROOT_PAGES } from '@/config/pages-url.config'

import styles from './auth.module.scss'
import Apple from '@/public/image/apple.svg'
import Facebook from '@/public/image/facebook.svg'
import Google from '@/public/image/google.svg'
import { authService } from '@/services/auth.service'

function Login() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { push } = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.login(data),
		onSuccess() {
			// toast.success('Successfully login!')
			reset()
			push(ROOT_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	const [remember, setRemember] = useState(false)

	return (
		<div className={styles.formContainer}>
			<h1 className={styles.title}>Вход</h1>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<AuthInput
					id='email'
					label='Логин/Email*'
					placeholder='Введите Логин/Email:'
					type='email'
					{...register('email', {
						required: 'Email is required!'
					})}
					extra='mb-5'
				/>
				<AuthInput
					id='password'
					label='Password*'
					placeholder='Введите пароль:'
					type='password'
					extra='mb-4'
					{...register('password', {
						required: 'Password is required!'
					})}
				/>
				<div className={styles.remember}>
					<Checkbox
						checked={remember}
						onChange={e => setRemember(e.target.checked)}
						label='Запомнить меня'
						id='remember'
					/>

					<span className={styles.rememberPassword}>Забыли пароль?</span>
				</div>
				<Button
					variant='dark'
					disabled={isPending}
					isFetching={isPending}
					type='submit'
				>
					Войти
				</Button>
			</form>
			<div
				role='separator'
				aria-orientation='horizontal'
				className={styles.separator}
			>
				<hr aria-hidden='true' />
				<span>Или</span>
				<hr aria-hidden='true' />
			</div>
			<div className={styles.buttons}>
				<Button
					variant='white'
					icon={Google}
					type='button'
				>
					Войти с помощью Google
				</Button>
				<Button
					variant='white'
					icon={Facebook}
					type='button'
				>
					Войти с помощью Facebook
				</Button>
				<Button
					variant='white'
					icon={Apple}
					type='button'
				>
					Войти с помощью Apple
				</Button>
			</div>
			<p className={styles.footer}>
				Новый пользователь?
				<Link href={'register'}>Зарегистрируйся</Link>
			</p>
		</div>
	)
}

export default Login
