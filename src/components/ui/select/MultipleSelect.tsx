'use client'

import { compact, rest } from 'lodash'
import { X } from 'lucide-react'

import defaultStyles from '@/components/ui/defaultStyles.module.scss'

import styles from './select.module.scss'

interface Props {
	options: string[]
	selectedOptions: string[]
	onChange: (selected: string[]) => void
	label?: string
	placeholder?: string
}

const MultipleSelect = ({
	options,
	selectedOptions,
	onChange,
	label,
	placeholder
}: Props) => {
	const removeOption = (option: string) => {
		onChange(selectedOptions.filter(item => item !== option))
	}

	const addOption = (option: string) => {
		if (!selectedOptions.includes(option)) {
			onChange(compact([...selectedOptions, option]))
		}
	}

	return (
		<div className={styles.container}>
			{label && <p className={defaultStyles.label}>{label}</p>}
			<select
				{...rest}
				defaultValue={''}
				onChange={event => {
					addOption(event.target.value)
				}}
				className={defaultStyles.multiSelect}
			>
				<option value={''}>{placeholder}</option>
				{options
					.filter(option => !selectedOptions.includes(option))
					.map(option => (
						<option
							key={option}
							value={option}
						>
							{option}
						</option>
					))}
			</select>
			{!!selectedOptions.length && (
				<div className='flex flex-wrap gap-2 items-center mt-4'>
					{selectedOptions.map(selectedOption => (
						<div
							key={`selected_${selectedOption}`}
							className='flex items-center gap-1 border bg-lightGray  outline-none rounded-sm  px-2 py-2 text-primary'
						>
							<span className='font-second font-normal text-md leading-md '>
								{selectedOption}
							</span>
							<X
								size={16}
								onClick={() => removeOption(selectedOption)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default MultipleSelect
