export interface IBankAccount {
	id: number
	bank: number
	currency: string
	account_number: string
}

export interface IBankDetails {
	id: number
	company: number
	bank_name: string
	bik: string
	cor_url: string
	accounts: IBankAccount[]
}
