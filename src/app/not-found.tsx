import { SearchX } from 'lucide-react'

import { Link } from '@/i18n/routing'

export default function NotFound() {
	return (
		<div className='w-dvw h-dvh flex flex-col items-center justify-center font-primary gap-5 text-center p-5 sm-max:gap-5'>
			<SearchX
				size={60}
				className='text-primary'
			/>
			<h2 className='text-primary text-3xl font-bold sm-max:text-2xl'>
				Страница не найдена
			</h2>
			<p className='text-primary text-lg sm-max:text-lg'>
				Возможно, вы воспользовались недействительной ссылкой или страница была
				удалена.
			</p>
			<Link
				href='/'
				className='flex justify-center items-center active:scale-95 text-md h-[3.5rem] text-white font-bold font-primary bg-darkGray rounded-sm hover:bg-darkGray/90 uppercase disabled:hover:bg-darkGray px-5 sm-max:text-sm sm-max:[2.69rem]'
			>
				На главную
			</Link>
		</div>
	)
}
