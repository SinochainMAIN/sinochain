export interface IManager {
	id: number
	email: string
	password: string
	last_name: string | null
	first_name: string | null
	middle_name: string | null
	phone_number: string | null
	telegram: string | null
	company: number | null
}

export type TypePersonalInfoForm = Partial<
	Omit<IManager, 'id' | 'email' | 'password' | 'company'>
>
