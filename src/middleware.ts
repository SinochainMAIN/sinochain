import { NextRequest, NextResponse } from 'next/server'

import { ROOT_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const userId = cookies.get(EnumTokens.USER_ID)?.value

	const isAuthPage =
		url?.includes('/login') ||
		url?.includes('/register') ||
		url?.includes('/activate')

	const headers = new Headers(request.headers)
	headers.set('x-current-path', request.nextUrl.pathname)

	const next = NextResponse.next({ headers })

	if (isAuthPage && accessToken) {
		return NextResponse.redirect(new URL(ROOT_PAGES.HOME, url))
	}

	if (isAuthPage) {
		return next
	}

	if (!accessToken) {
		return NextResponse.redirect(new URL('/login', url))
	}

	return next
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
	]
}
