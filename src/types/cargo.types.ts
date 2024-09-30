import { EnumLoadingType } from './common.types'

export enum EnumWeightType {
	T = 'T',
	KG = 'KG'
}

export interface ICargo {
	id: number
	company: string
	cargo_name: string
	weight: string
	weight_type: EnumWeightType
	volume: string | null
	loading_type: EnumLoadingType | null
	package: string | null
	package_count: string | null
	length: string | null
	width: string | null
	height: string | null
	diameter: string | null
	date_of_cargo: string
	loading_place: string
	unloading_place: string
	adr: boolean
	tir: boolean
	notes: string | null
	create_date: string
	update_date: string
}
