import type { Metadata } from 'next'

import Register from '@/components/screens/auth/Register'

export const metadata: Metadata = {
	title: 'Регистрация',
	description: 'Страница регистрации'
}

export default function Page() {
	return <Register />
}
