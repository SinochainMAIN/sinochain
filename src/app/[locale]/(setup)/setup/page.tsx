import type { Metadata } from 'next'

import Setup from '@/components/screens/setup/Setup'

export const metadata: Metadata = {
	title: 'Продолжение регистрации'
}

export default function Page() {
	return <Setup />
}
