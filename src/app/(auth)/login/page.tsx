import type { Metadata } from 'next'

import Login from '@/components/screens/auth/Login'

export const metadata: Metadata = {
	title: 'Вход',
	description: 'Страница входа'
}

export default function Page() {
	return <Login />
}
