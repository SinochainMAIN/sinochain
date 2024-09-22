import type { PropsWithChildren } from 'react'

import ReqAuthLayout from '@/components/layouts/ReqAuthLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <ReqAuthLayout>{children}</ReqAuthLayout>
}
