import { Loader as LoaderIcon } from 'lucide-react'

import { COLORS } from '@/constants/color.constants'

interface Props {
	size?: number | string
	color?: string
}

const Loader = ({ size = 5, color = COLORS.black }: Props) => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon
				className={`animate-spin h-${size} w-${size} text-${color}`}
			/>
		</div>
	)
}

export default Loader
