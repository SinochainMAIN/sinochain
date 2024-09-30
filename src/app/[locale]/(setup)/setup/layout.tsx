import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	...NO_INDEX_PAGE
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100  p-5'>
			<div className='bg-white p-8 rounded-lg shadow-md max-w-2xl w-full mx-5 sm-max:p-4'>
				{children}
			</div>
		</div>
	)
}
