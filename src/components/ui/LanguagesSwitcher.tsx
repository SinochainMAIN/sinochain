'use client'

import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { ChangeEvent } from 'react'

import { type Language, languages } from '@/constants/locales.constants'

import { usePathname, useRouter } from '@/i18n/routing'

function LanguagesSwitcher() {
	const t = useTranslations()

	const { replace, refresh } = useRouter()
	const pathname = usePathname()

	const { locale } = useParams<{ locale: string }>()

	const value = languages.find(item => item.code === locale)?.code

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		replace(pathname, { locale: e.target.value as Language })
		refresh()
	}

	return (
		<label className='flex gap-1 items-center justify-center font-second text-sm'>
			<Languages size={16} />
			<p>{`${t('common.language')}:`}</p>
			<select
				className='bg-transparent'
				value={value}
				onChange={onSelectChange}
			>
				{languages.map(language => (
					<option
						key={language.code}
						value={language.code}
					>{`${language.lang} (${language.subtitle})`}</option>
				))}
			</select>
		</label>
	)
}

export default LanguagesSwitcher
