'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import Loader from '@/components/ui/Loader'

import { IActivateAccount } from '@/types/auth.types'

import { authService } from '@/services/auth.service'

function ActivateAccount() {
	const { push, refresh } = useRouter()
	const searchParams = useSearchParams()

	const token = searchParams.get('token')
	const uid = searchParams.get('uid')

	const timer = () => {
		const timer = setTimeout(() => {
			push('/login')
			refresh()
		}, 5000)

		return () => clearTimeout(timer)
	}

	const { mutate, isPending, isError, isSuccess } = useMutation({
		mutationKey: ['activate'],
		mutationFn: (data: IActivateAccount) => authService.activate(data),
		onSettled() {
			timer()
		}
	})

	useEffect(() => {
		if (token && uid) {
			mutate({ token: token, uid: uid })
		} else {
			push('/login')
		}
	}, [])

	if (isPending) {
		return (
			<div className='flex justify-center items-center min-h-screen gap-5'>
				<Loader size={6} />
				<h1 className='text-4xl font-bold font-primary'>
					Аккаунт активируется...
				</h1>
			</div>
		)
	}

	return isSuccess || isError ? (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
				{isSuccess && (
					<div className='text-center font-second text-md flex flex-col gap-4'>
						<h1 className='text-4xl font-bold text-green-600'>
							Аккаунт успешно активирован!
						</h1>
						<p>Теперь вы можете войти в свою учетную запись.</p>
						<p>
							Вы будете автоматически перенаправлены на главную страницу через 5
							секунд.
						</p>
						<p>Вы также можете закрыть эту страницу в любое время.</p>
					</div>
				)}

				{isError && (
					<div className='text-center font-second text-md flex flex-col gap-4'>
						<h1 className='text-4xl font-bold text-red-600'>
							Ошибка активации аккаунта
						</h1>
						<p>
							Возможно вы уже активировали аккаунт или воспользовались
							недействительной ссылкой.
						</p>
						<p>
							Вы будете автоматически перенаправлены на страницу авторизации
							через 5 секунд.
						</p>
						<p>Вы также можете закрыть эту страницу в любое время.</p>
					</div>
				)}
			</div>
		</div>
	) : (
		<div>
			{/* <Button
				variant='dark'
				onClick={() => {
					if (token && uid) mutate({ token: token, uid: uid })
				}}
			>
				Активировать
			</Button> */}
		</div>
	)
}

export default ActivateAccount
