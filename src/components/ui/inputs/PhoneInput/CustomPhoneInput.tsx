'use client'

import clsx from 'clsx'
import { CountryCode, E164Number } from 'libphonenumber-js/core'
import { useParams } from 'next/navigation'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import defaultStyles from '@/components/ui/defaultStyles.module.scss'

import { availableLocalesCountries } from '@/utils/availableLanguagesOfCountries'

import './customPhoneInputStyles.scss'

interface Props {
	value: E164Number | number
	onChange: (value?: E164Number) => void
	defaultCountry?: CountryCode
	id?: string
	extra?: string
	label?: string
}

function CustomPhoneInput({
	value,
	onChange,
	defaultCountry,
	id,
	extra,
	label
}: Props) {
	const { locale } = useParams<{ locale: string }>()

	return (
		<div>
			{label && <p className={defaultStyles.label}>{label}</p>}
			<PhoneInput
				countries={['RU', 'BY', 'KZ']}
				labels={
					availableLocalesCountries[locale] ?? availableLocalesCountries['ru']
				}
				defaultCountry={defaultCountry}
				addInternationalOption={true}
				placeholder='Введите номер телефона'
				value={value as E164Number}
				onChange={onChange}
				smartCaret
				countrySelectProps={{ className: '' }}
				containerComponentProps={{
					className: clsx('flex items-center', extra)
				}}
				numberInputProps={{
					id: id,
					name: id,
					className: defaultStyles.input
				}}
			/>
		</div>
	)
}

export default CustomPhoneInput
