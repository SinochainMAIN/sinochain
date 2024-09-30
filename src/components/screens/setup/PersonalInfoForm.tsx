'use client'

import { E164Number } from 'libphonenumber-js/core'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import defaultStyles from '@/components/ui/defaultStyles.module.scss'
import { InputLabel } from '@/components/ui/inputs/InputLabel/InputLabel'
import CustomPhoneInput from '@/components/ui/inputs/PhoneInput/CustomPhoneInput'

import { TypePersonalInfoForm } from '@/types/manager.types'

import styles from './setup.module.scss'
import { TypeCompany } from './setup.types'

interface Props {
	typeCompany: TypeCompany | undefined
	setTypeCompany: Dispatch<SetStateAction<TypeCompany | undefined>>
	setInfo: (info: TypePersonalInfoForm) => void
	setCurrentStep: Dispatch<SetStateAction<number>>
}

function PersonalInfo({
	setTypeCompany,
	typeCompany,
	setCurrentStep,
	setInfo
}: Props) {
	const t = useTranslations()

	const {
		handleSubmit,
		formState: { errors, isLoading },
		control,
		register,
		setError
	} = useForm<TypePersonalInfoForm>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit'
	})

	const onSubmit = (data: TypePersonalInfoForm) => {
		if (!typeCompany) {
			setError('root', {
				message: 'Выберите тип компании.'
			})
		} else {
			setCurrentStep(prev => prev + 1)
			setInfo(data)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h1 className={styles.title}>{t('setup.personalInfo.step')}</h1>
			<h2 className={styles.description}>
				{t('setup.personalInfo.description')}
			</h2>
			<div className={styles.fields}>
				<InputLabel
					label={`${t('setup.personalInfo.lastName.label')}:`}
					placeholder={t('setup.personalInfo.lastName.placeholder')}
					type='text'
					{...register('last_name')}
				/>
				<InputLabel
					label={`${t('setup.personalInfo.firstName.label')}:`}
					placeholder={t('setup.personalInfo.firstName.placeholder')}
					type='text'
					{...register('first_name')}
				/>
				<InputLabel
					label={`${t('setup.personalInfo.middleName.label')}:`}
					placeholder={t('setup.personalInfo.middleName.placeholder')}
					type='text'
					{...register('middle_name')}
				/>
				<InputLabel
					label={`${t('setup.personalInfo.telegram.label')}:`}
					placeholder={t('setup.personalInfo.telegram.placeholder')}
					type='text'
					{...register('telegram')}
				/>
				<Controller
					name='phone_number'
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
								id='phone_number'
								label={`${t('setup.personalInfo.phone.label')}:`}
							/>
						)
					}}
				/>
				<div className='flex gap-4 flex-col'>
					<p
						className={defaultStyles.label}
					>{`${t('setup.personalInfo.company.label')}*:`}</p>
					<Checkbox
						checked={typeCompany === 'transport'}
						onChange={() => setTypeCompany('transport')}
						label={t('setup.personalInfo.company.transport')}
						extraLabel='font-second text-md text-primary leading-md sm-max:text-md-mob sm-max:leading-md-mob'
					/>
					<Checkbox
						checked={typeCompany === 'forwarding'}
						onChange={() => setTypeCompany('forwarding')}
						label={t('setup.personalInfo.company.forwarding')}
						extraLabel='font-second text-md text-primary leading-md sm-max:text-md-mob sm-max:leading-md-mob'
					/>
				</div>
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
				{t('common.actions.continue')}
			</Button>
		</form>
	)
}

export default PersonalInfo
