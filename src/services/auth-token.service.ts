import Cookies from 'js-cookie'

export enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
	USER_ID = 'userId'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveCookieStorage = (name: EnumTokens, value: string) => {
	Cookies.set(name, value, {
		domain: 'localhost',
		sameSite: 'strict',
		expires: 1
	})
}

export const removeFromCookie = (name: EnumTokens) => {
	Cookies.remove(name)
}
