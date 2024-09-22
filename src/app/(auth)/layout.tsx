import { headers } from 'next/headers'
import type { PropsWithChildren } from 'react'

import AuthLayout from '@/components/layouts/auth-layout/AuthLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	const url = headers().get('x-current-path')
	console.log(url)

	if (url?.includes('/activate')) {
		return children
	}

	return <AuthLayout>{children}</AuthLayout>
}
