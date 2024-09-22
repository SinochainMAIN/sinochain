export interface IAuthForm {
	email: string
	password: string
}

export interface IActivateAccount {
	uid: string
	token: string
}


export interface IAuthResponse {
	auth_token: string
}

export interface IRegisterResponse {
	id: string
	email: string
	password: string
	last_name?: string
	first_name?: string
	middle_name?: string
	phone_number?: string
	telegram?: string
	is_active?: string
	is_admin?: string
}
