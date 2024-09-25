import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ActivateAccount from '@/components/screens/auth/ActivateAccount'

export const metadata: Metadata = {
	title: 'Активация аккаунта',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <ActivateAccount />
}
