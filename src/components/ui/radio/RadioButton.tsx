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
				<span className='text-primary font-second text-md ml-1 leading-[1rem]'>
					{label}
				</span>
			)}
		</label>
	)
}

export default RadioButton
