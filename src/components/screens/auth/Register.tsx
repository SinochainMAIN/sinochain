'use client'

import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import LanguagesSwitcher from '@/components/ui/LanguagesSwitcher'
import { Button } from '@/components/ui/buttons/Button'
import { AuthInput } from '@/components/ui/inputs/AuthInput/AuthInput'
import Modal from '@/components/ui/modals/Modal'

import { IAuthForm } from '@/types/auth.types'

import styles from './auth.module.scss'
import { useModal } from '@/context/ModalContext'
import Apple from '@/public/image/apple.svg'
import Facebook from '@/public/image/facebook.svg'
import Google from '@/public/image/google.svg'
import { authService } from '@/services/auth.service'

function Register() {
	const t = useTranslations()
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { openModal, closeModal } = useModal()

	const { mutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthForm) => authService.register(data),
		onSuccess() {
			openModal()
			reset()
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<>
			<div className={styles.formContainer}>
				<h1 className={styles.title}>Регистрация</h1>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<AuthInput
						label={`${t('auth.common.email')}*`}
						placeholder={t('auth.common.emailPlaceholder')}
						type='email'
						{...register('email', {
							required: 'Email is required!',
							maxLength: 254
						})}
						extra='mb-5'
					/>
					<AuthInput
						label={`${t('auth.common.password')}*`}
						placeholder={t('auth.common.passwordPlaceholder')}
						type='password'
						extra='mb-4'
						{...register('password', {
							required: 'Password is required!',
							maxLength: 150
						})}
					/>
					<Button variant='dark'>{t('auth.register.enter')}</Button>
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
					>
						{t('auth.register.google')}
					</Button>
					<Button
						variant='white'
						icon={Facebook}
					>
						{t('auth.register.facebook')}
					</Button>
					<Button
						variant='white'
						icon={Apple}
					>
						{t('auth.register.apple')}
					</Button>
				</div>
				<p className={styles.footer}>
					{t('auth.register.alreadyAccount')}
					<Link href={'login'}>{t('auth.register.login')}</Link>
				</p>
				<LanguagesSwitcher />
			</div>
			<Modal shouldCloseOnOutsideClick>
				<div className='flex flex-col w-full max-w-md gap-5'>
					<h1 className='text-2xl font-primary font-bold text-black sm-max:text-xl'>
						{t('auth.register.modal.title')}
					</h1>
					<p className='text-md font-primary text-primary sm-max:text-sm'>
						{t('auth.register.modal.description')}
					</p>
					<p className='text-md font-primary text-primary sm-max:text-sm'>
						{t('auth.register.modal.refresh')}
					</p>

					<Button
						variant='dark'
						className='w-full'
						onClick={closeModal}
					>
						{t('common.actions.ok')}
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default Register
