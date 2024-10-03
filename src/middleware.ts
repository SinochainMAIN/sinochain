import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { routing } from './i18n/routing'
import { EnumTokens } from './services/auth-token.service'

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
	try {
	} catch (error) {}
	const response = intlMiddleware(request)

	const { url, cookies } = request

	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage =
		url?.includes('/login') ||
		url?.includes('/register') ||
		url?.includes('/activate')

	response.headers.set('x-current-path', request.nextUrl.pathname)

	// if (isAuthPage && accessToken) {
	// 	return NextResponse.redirect(new URL('/', url))
	// }

	// if (isAuthPage) {
	// 	return response
	// }

	// if (!accessToken) {
	// 	return NextResponse.redirect(new URL('/login', url))
	// }

	return response
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
