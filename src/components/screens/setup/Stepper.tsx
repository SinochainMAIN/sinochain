'use client'

import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { STEPS } from './stepper.data'

interface Props {
	currentStep: number
}

function Stepper({ currentStep }: Props) {
	const t = useTranslations()
	return (
		<ol className='items-center justify-between w-full flex md-max:flex-col md-max:items-start md-max:gap-2'>
			{STEPS.map((step, index) => {
				const completed = index < currentStep
				const current = index === currentStep
				const color = current ? 'black' : completed ? 'green-600' : 'gray-500'
				return (
					<li
						key={index}
						className={`flex items-center text-${color} gap-2 font-second text-md leading-md sm-max:text-md-mob sm-max:leading-md-mob`}
					>
						<span
							className={`flex items-center justify-center w-8 h-8 border border-${color} rounded-full shrink-0 font-bold ${!completed ? 'pb-[2px]' : 'bg-green-600'}`}
						>
							{completed ? (
								<Check
									size={16}
									className=' text-white'
								/>
							) : (
								index + 1
							)}
						</span>
						<span className={`font-medium`}>
							<h3>{t(step.name)}</h3>
							{step.description && (
								<p className='text-sm'>{t(step.description)}</p>
							)}
						</span>
					</li>
				)
			})}
		</ol>
	)
}

export default Stepper
