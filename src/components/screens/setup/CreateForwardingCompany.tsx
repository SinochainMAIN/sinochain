'use client'

import { E164Number } from 'libphonenumber-js/core'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { InputLabel } from '@/components/ui/inputs/InputLabel/InputLabel'
import CustomPhoneInput from '@/components/ui/inputs/PhoneInput/CustomPhoneInput'
import CountrySelect from '@/components/ui/select/CountrySelect'
import MultipleSelect from '@/components/ui/select/MultipleSelect'

import { ogrnRegex, unpInnRegex } from '@/constants/regex.contstants'

import { TypeForwardingCompanyForm } from '@/types/company.types'

import styles from './setup.module.scss'

function CreateForwardingCompany() {
	const t = useTranslations()

	const {
		handleSubmit,
		formState: { errors, isLoading },
		control,
		register,
		setError
	} = useForm<TypeForwardingCompanyForm>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit'
	})

	const onSubmit = (data: TypeForwardingCompanyForm) => {}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h1 className={styles.title}>{t('setup.company.step')}</h1>
			<h2 className={styles.description}>{t('setup.company.description')}</h2>
			<div className={styles.fields}>
				<InputLabel
					label={`${t('setup.company.companyName.label')}*:`}
					placeholder={t('setup.company.companyName.placeholder')}
					type='text'
					{...register('company_name', {
						required: true
					})}
				/>
				<InputLabel
					label={`${t('setup.company.innUnp.label')}:`}
					placeholder={t('setup.company.innUnp.placeholder')}
					type='text'
					isNumber
					{...register('inn_unp', {
						validate: value =>
							value
								? unpInnRegex.test(value)
									? true
									: 'Неверный формат ИНН/УНП.'
								: true
					})}
				/>
				<InputLabel
					label={`${t('setup.company.ogrn.label')}:`}
					placeholder={t('setup.company.ogrn.placeholder')}
					type='text'
					isNumber
					{...register('ogrn', {
						validate: value =>
							value
								? ogrnRegex.test(value)
									? true
									: 'Неверный формат ОГРН.'
								: true
					})}
				/>
				<Controller
					name='country_of_registration'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<CountrySelect
								onlyCountries={['BY', 'RU', 'KZ']}
								value={value as string}
								onChange={onChange}
								label={`${t('setup.company.countryOfRegistration.label')}:`}
								placeholder={t(
									'setup.company.countryOfRegistration.placeholder'
								)}
							/>
						)
					}}
				/>
				<InputLabel
					label={`${t('setup.company.legalAddress.label')}:`}
					placeholder={t('setup.company.legalAddress.placeholder')}
					type='text'
					{...register('legal_address')}
				/>
				<InputLabel
					label={`${t('setup.company.postAddress.label')}:`}
					placeholder={t('setup.company.postAddress.placeholder')}
					type='text'
					{...register('post_address')}
				/>
				<InputLabel
					label={`${t('setup.company.email.label')}:`}
					placeholder={t('setup.company.email.placeholder')}
					type='email'
					{...register('email')}
				/>
				<Controller
					name='phone'
					control={control}
					rules={{
						validate: value =>
							value
								? isValidPhoneNumber(`${value}`)
									? true
									: t('validate.phone.incorrected')
								: true
					}}
					render={({ field: { value, onChange } }) => {
						return (
							<CustomPhoneInput
								value={value as unknown as E164Number}
								onChange={onChange}
								defaultCountry='BY'
								label={`${t('setup.company.phone.label')}:`}
							/>
						)
					}}
				/>
				<InputLabel
					label={`${t('setup.company.director.label')}:`}
					placeholder={t('setup.company.director.placeholder')}
					type='text'
					{...register('director')}
				/>
				<InputLabel
					label={`${t('setup.company.acts.label')}:`}
					type='text'
					{...register('acts_on_the_basis')}
				/>
				<Controller
					name='nds'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<Checkbox
								checked={value as boolean}
								onChange={onChange}
								label={t('setup.company.nds')}
							/>
						)
					}}
				/>
				<Controller
					name='types_of_cargo'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<MultipleSelect
								onChange={onChange}
								selectedOptions={value ?? []}
								label={`${t('setup.company.typeOfCargo.label')}:`}
								placeholder={t('setup.company.typeOfCargo.placeholder')}
								options={[
									'option1',
									'option2',
									'option3',
									'option4',
									'option5',
									'option6',
									'option7',
									'option8',
									'option9'
								]}
							/>
						)
					}}
				/>
				<Controller
					name='transportation_directions'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<MultipleSelect
								onChange={onChange}
								selectedOptions={value ?? []}
								label={`${t('setup.company.transportationDirections.label')}:`}
								placeholder={t(
									'setup.company.transportationDirections.placeholder'
								)}
								options={[
									'option1',
									'option2',
									'option3',
									'option4',
									'option5',
									'option6',
									'option7',
									'option8',
									'option9'
								]}
							/>
						)
					}}
				/>
			</div>

			{errors && (
				<div className='flex flex-col gpa-1 mb-5'>
					{Object.values(errors).map((error, index) => (
						<p
							key={index}
							className='text-md font-second font-medium text-red-600'
						>
							{error?.message?.toString()}
						</p>
					))}
				</div>
			)}

			<Button
				variant='dark'
				type='submit'
				isFetching={isLoading}
				disabled={isLoading}
			>
				{t('common.actions.create')}
			</Button>
		</form>
	)
}

export default CreateForwardingCompany
