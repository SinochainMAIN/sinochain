'use client'

import { useState } from 'react'

import LanguagesSwitcher from '@/components/ui/LanguagesSwitcher'

import { TypePersonalInfoForm } from '@/types/manager.types'

import CreateForwardingCompany from './CreateForwardingCompany'
import CreateTransportCompany from './CreateTransportCompany'
import PersonalInfo from './PersonalInfoForm'
import Stepper from './Stepper'
import styles from './setup.module.scss'
import { TypeCompany } from './setup.types'

function Setup() {
	const [currentStep, setCurrentStep] = useState(1)
	const [typeCompany, setTypeCompany] = useState<TypeCompany | undefined>(
		'transport'
	)
	const [personalInfo, setPersonalInfo] = useState<TypePersonalInfoForm | null>(
		null
	)

	return (
		<div className={styles.container}>
			<Stepper currentStep={currentStep} />
			{currentStep === 1 ? (
				<PersonalInfo
					setInfo={setPersonalInfo}
					setCurrentStep={setCurrentStep}
					setTypeCompany={setTypeCompany}
					typeCompany={typeCompany}
				/>
			) : currentStep === 2 && (
				typeCompany === 'transport' ? (
					<CreateTransportCompany />
				) : (
					<CreateForwardingCompany />
				)
			) }
			<div className='mt-5'>
				<LanguagesSwitcher />
			</div>
		</div>
	)
}

export default Setup
