import { SearchX } from 'lucide-react'

import { Link } from '@/i18n/routing'

export default function NotFound() {
	return (
		<div className='w-dvw h-dvh flex flex-col items-center justify-center font-second gap-10 text-center p-5 sm-max:gap-5'>
			<SearchX
				size={100}
				className='text-primary'
			/>
			<h2 className='text-primary text-6xl font-bold sm-max:text-3xl'>
				Страница не найдена
			</h2>
			<p className='text-primary text-2xl sm-max:text-md'>
				Возможно, вы воспользовались недействительной ссылкой или страница была
				удалена.
			</p>
			<Link
				href='/'
				className='text-white text-2xl rounded-sm p-4 leading-2xl bg-primary pb-5 sm-max:text-md sm-max:leading-md '
			>
				На главную
			</Link>
		</div>
	)
}
