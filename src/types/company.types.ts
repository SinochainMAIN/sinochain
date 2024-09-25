import { IBankDetails } from './bank.types'
import { ICompanyInsurance } from './insurance.types'
import { IManager } from './manager.types'
import { ITransport } from './transport.types'

export interface ICompany {
	id: number
	company_name: string
	inn_unp: string | null
	ogrn: string | null
	country_of_registration: string | null
	legal_address: string | null
	post_address: string | null
	email: string | null
	phone: string | null
	director: string | null
	acts_on_the_basis: string | null
	nds: boolean
	// TODO: types
	transportation_directions: any[]
	related_companies: string[]
}

export interface ITransportCompany extends ICompany {
	customs: boolean
	yeo: boolean
	expensive_cargo: boolean
	// TODO: types
	insurances: ICompanyInsurance[]
	// TODO: types
	banks: IBankDetails[]
	transports: ITransport[]
	managers: IManager[]
}

export interface IForwardingCompany extends ICompany {
	// TODO: types
	types_of_cargo: any[]
}
