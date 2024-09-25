import { EnumLoadingType } from './common.types'
import { IManager } from './manager.types'

export enum EnumTruckType {
	TG = 'TG',
	GV = 'GV',
	PC = 'PC',
	RF = 'RF',
	TN = 'TN',
	CN = 'CN',
	CT = 'CT',
	TR = 'TR'
}



export interface ITransport {
	id: number
	number: string
	brand: string
	model: string
	year_of_manufacture: string
	truck_type: EnumTruckType
	length: string | null
	width: string | null
	weight: string
	volume: string | null
	loading_type: EnumLoadingType | null
	package: string | null
	owner: string
	technical_inspection_number: string | null
	technical_inspection_date: string | null
	customs_certificate_number: string | null
	customs_certificate_date: string | null
	kasko: string | null
	kasko_date: string | null
	cmr_insurance: string | null
	cmr_insurance_date: string | null
	adr: boolean
	company: string
}

export interface IFreeTransport {
	id: number
	truck: ITransport
	semi_trailer: ITransport
	// TODO: add types
	download_country: any[]
	destination_country: any[]
	manager: IManager
	create_date: string
	update_date: string
}
