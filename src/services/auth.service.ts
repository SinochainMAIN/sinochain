import {
	IActivateAccount,
	IAuthForm,
	IAuthResponse,
	IRegisterResponse
} from '@/types/auth.types'
import { IManager } from '@/types/manager.types'

import { axiosClassic } from '@/api/interceptors'

import { EnumTokens, saveCookieStorage } from './auth-token.service'

class AuthService {
	private BASE_URL = '/auth'

	async login(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this.BASE_URL}/token/token/login`,
			data
		)

		if (response.data.auth_token)
			saveCookieStorage(EnumTokens.ACCESS_TOKEN, response.data.auth_token)

		return response
	}

	async register(data: IAuthForm) {
		const response = await axiosClassic.post<IRegisterResponse>(
			`${this.BASE_URL}/users/`,
			data
		)

		return response
	}

	async activate(data: IActivateAccount) {
		const response = await axiosClassic.post<IActivateAccount>(
			`${this.BASE_URL}/users/activation/`,
			data
		)

		return response
	}

	async myAccount(token: string) {
		try {
			const response = await axiosClassic.get<IManager>(
				`/api/v1/managers/me/`,
				{
					headers: {
						Authorization: `Token ${token}`
					}
				}
			)

			return response
		} catch (error) {
			console.log(error)
		}
	}
}

export const authService = new AuthService()
