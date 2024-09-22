import axios, { type CreateAxiosDefaults } from 'axios'

import { errorCatch } from './error'
import {
	EnumTokens,
	getAccessToken,
	removeFromCookie
} from '@/services/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: 'http://127.0.0.1:8000/',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: false
}

const axiosClassic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				// TODO: add get new token after
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeFromCookie(EnumTokens.ACCESS_TOKEN)
					removeFromCookie(EnumTokens.USER_ID)
				}
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
