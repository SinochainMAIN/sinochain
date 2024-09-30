import { IBankDetails } from './bank.types'
import { ICargo } from './cargo.types'
import { ICompanyInsurance } from './insurance.types'
import { IManager } from './manager.types'

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
	transportation_directions: string[]
	related_companies: string[]
	banks: IBankDetails[]
	insurances: ICompanyInsurance[]
	managers: IManager[]
}

export interface ITransportCompany extends ICompany {
	customs: boolean
	yeo: boolean
	expensive_cargo: boolean
}

export interface IForwardingCompany extends ICompany {
	types_of_cargo: string[]
	current_cargos: ICargo
}

export type TypeForwardingCompanyForm = Partial<Omit<IForwardingCompany, 'id'>>

export type TypeTransportCompanyForm = Partial<Omit<ITransportCompany, 'id'>>
