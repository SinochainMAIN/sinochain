'use client'

import { CountryCode } from 'libphonenumber-js/core'
import { rest } from 'lodash'
import { useParams } from 'next/navigation'
import { getCountries } from 'react-phone-number-input'

import { availableLocalesCountries } from '@/utils/availableLanguagesOfCountries'

import defaultStyles from '@/components/ui/defaultStyles.module.scss'

import styles from './select.module.scss'

interface Props {
	label?: string
	onlyCountries: CountryCode[]
	value: string
	onChange: (value?: string) => void
	placeholder?: string
}

function CountrySelect({
	label,
	value,
	onChange,
	onlyCountries,
	placeholder
}: Props) {
	const { locale } = useParams<{ locale: string }>()

	const localeCountries = Object.keys(availableLocalesCountries).includes(
		locale
	)
		? availableLocalesCountries[locale]
		: availableLocalesCountries['ru']

	const countries = onlyCountries
		? getCountries().filter(country => onlyCountries.includes(country))
		: getCountries()

	return (
		<div className={styles.container}>
			<p className={defaultStyles.label}>{label}</p>
			<select
				{...rest}
				value={value}
				onChange={event => onChange(event.target.value || undefined)}
				className={defaultStyles.select}
			>
				<option value=''>{placeholder}</option>
				{countries.map(country => (
					<option
						key={country}
						value={localeCountries[country]}
					>
						{localeCountries[country]}
					</option>
				))}
			</select>
		</div>
	)
}

export default CountrySelect
