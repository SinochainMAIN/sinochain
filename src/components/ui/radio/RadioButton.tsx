import styles from './styles.module.scss'

interface CustomRadioButtonProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	checked: boolean
}

function RadioButton({
	label,
	checked,
	onChange,
	...props
}: CustomRadioButtonProps) {
	return (
		<label
			className={styles.radio}
			htmlFor={props.id}
		>
			<input
				type='radio'
				checked={checked}
				onChange={onChange}
				{...props}
			/>
			<span className={styles.icon} />
			{label && (
				<span className='text-primary font-primary text-md ml-1 sm-max:text-sm'>
					{label}
				</span>
			)}
		</label>
	)
}

export default RadioButton
