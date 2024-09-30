'use client'

import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import Loader from '@/components/ui/Loader'

import { IActivateAccount } from '@/types/auth.types'

import { authService } from '@/services/auth.service'

function ActivateAccount() {
	const t = useTranslations()
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
					{`${t('activate.loading')}...`}
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
							{t('activate.success.title')}!
						</h1>
						<p>{t('activate.success.subtitle')}</p>
						<p>{t('activate.redirect')}</p>
						<p>{t('activate.close')}</p>
					</div>
				)}

				{isError && (
					<div className='text-center font-second text-md flex flex-col gap-4'>
						<h1 className='text-4xl font-bold text-red-600'>
							{t('activate.error.title')}!
						</h1>
						<p>{t('activate.error.subtitle')}</p>
						<p>{t('activate.redirect')}</p>
						<p>{t('activate.close')}</p>
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
