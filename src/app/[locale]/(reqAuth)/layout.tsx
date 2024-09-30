import { cookies } from 'next/headers'
import type { PropsWithChildren } from 'react'

import ReqAuthLayout from '@/components/layouts/ReqAuthLayout'

import { redirect } from '@/i18n/routing'
import { EnumTokens } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

export default async function Layout({ children }: PropsWithChildren<unknown>) {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value
	if (accessToken) {
		const accountResponse = await authService.myAccount(accessToken)
		if (!accountResponse?.data.company) {
			return redirect('/setup')
		}
	}

	return <ReqAuthLayout>{children}</ReqAuthLayout>
}
