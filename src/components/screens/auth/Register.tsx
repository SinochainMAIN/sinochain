'use client'

import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { AuthInput } from '@/components/ui/inputs/AuthInput'
import Modal from '@/components/ui/modals/Modal'

import { IAuthForm } from '@/types/auth.types'

import styles from './auth.module.scss'
import { useModal } from '@/context/ModalContext'
import Apple from '@/public/image/apple.svg'
import Facebook from '@/public/image/facebook.svg'
import Google from '@/public/image/google.svg'
import { authService } from '@/services/auth.service'

function Register() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { openModal, closeModal } = useModal()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
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
						id='email'
						label='Email*'
						placeholder='Введите Email:'
						type='email'
						{...register('email', {
							required: 'Email is required!',
							maxLength: 254
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
							required: 'Password is required!',
							maxLength: 150
						})}
					/>
					<Button variant='dark'>Зарегистрироваться</Button>
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
					>
						Зарегистрироваться с помощью Google
					</Button>
					<Button
						variant='white'
						icon={Facebook}
					>
						Зарегистрироваться с помощью Facebook
					</Button>
					<Button
						variant='white'
						icon={Apple}
					>
						Зарегистрироваться с помощью Apple
					</Button>
				</div>
				<p className={styles.footer}>
					Уже есть аккаунт?
					<Link href={'login'}>Войти</Link>
				</p>
			</div>
			<Modal shouldCloseOnOutsideClick>
				<div className='flex flex-col w-full max-w-md gap-5'>
					<h1 className='text-5xl font-second font-bold text-black'>
						Подтвердите почту
					</h1>
					<p className='text-md font-second text-primary'>
						Мы отправили письмо на указанную вами почту. Пожалуйста, перейдите в
						свою почту и кликните по ссылке в письме, чтобы активировать ваш
						аккаунт.
					</p>
					<p className='text-md font-second text-primary'>
						Если вы уже перешли по ссылке из письма - обновите страницу.
					</p>

					<Button
						variant='dark'
						className='w-full'
						onClick={closeModal}
					>
						Ок
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default Register
