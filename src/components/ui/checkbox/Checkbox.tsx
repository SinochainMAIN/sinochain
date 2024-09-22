import React from 'react'

interface CustomCheckboxProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ label, checked, onChange, ...props }: CustomCheckboxProps) {
	return (
		<div className='inline-flex items-center gap-1'>
			<label
				className='flex items-center cursor-pointer relative'
				htmlFor={props.id}
			>
				<input
					type='checkbox'
					checked={checked}
					onChange={onChange}
					className='peer h-[1.38rem] w-[1.38rem] cursor-pointer transition-all appearance-none rounded-[0.12rem] checked:lightGray  bg-lightGray'
					{...props}
				/>
				<span className='absolute text-mediumGray opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-3.5 w-3.5'
						viewBox='0 0 20 20'
						fill='currentColor'
						stroke='currentColor'
						strokeWidth='1'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						></path>
					</svg>
				</span>
			</label>
			{label && (
				<label
					className='cursor-pointer font-second text-xs text-black'
					htmlFor={props.id}
				>
					{label}
				</label>
			)}
		</div>
	)
}

export default Checkbox
