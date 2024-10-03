'use client'

import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import LanguagesSwitcher from '@/components/ui/LanguagesSwitcher'
import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { AuthInput } from '@/components/ui/inputs/AuthInput/AuthInput'

import { IAuthForm } from '@/types/auth.types'

import { ROOT_PAGES } from '@/config/pages-url.config'

import styles from './auth.module.scss'
import Apple from '@/public/image/apple.svg'
import Facebook from '@/public/image/facebook.svg'
import Google from '@/public/image/google.svg'
import { authService } from '@/services/auth.service'

function Login() {
	const t = useTranslations()
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { push } = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['login'],
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
			<h1 className={styles.title}>{t('auth.login.title')}</h1>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<AuthInput
					label={`${t('auth.common.email')}*`}
					placeholder={t('auth.common.emailPlaceholder')}
					type='email'
					{...register('email', {
						required: 'Email is required!'
					})}
					extra='mb-5'
				/>
				<AuthInput
					label={`${t('auth.common.password')}*`}
					placeholder={t('auth.common.passwordPlaceholder')}
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
						label={t('auth.login.rememberMe')}
						id='remember'
						extraLabel='text-black'
					/>

					<span className={styles.rememberPassword}>
						{t('auth.login.forgotPassword')}
					</span>
				</div>
				<Button
					variant='dark'
					disabled={isPending}
					isFetching={isPending}
					type='submit'
				>
					{t('auth.login.enter')}
				</Button>
			</form>
			<div
				role='separator'
				aria-orientation='horizontal'
				className={styles.separator}
			>
				<hr aria-hidden='true' />
				<span>{t('auth.common.or')}</span>
				<hr aria-hidden='true' />
			</div>
			<div className={styles.buttons}>
				<Button
					variant='white'
					icon={Google}
					type='button'
				>
					{t('auth.login.google')}
				</Button>
				<Button
					variant='white'
					icon={Facebook}
					type='button'
				>
					{t('auth.login.facebook')}
				</Button>
				<Button
					variant='white'
					icon={Apple}
					type='button'
				>
					{t('auth.login.apple')}
				</Button>
			</div>
			<p className={styles.footer}>
				{t('auth.login.newUser')}
				<Link href={'register'}>{t('auth.login.register')}</Link>
			</p>
			<LanguagesSwitcher />
		</div>
	)
}

export default Login
