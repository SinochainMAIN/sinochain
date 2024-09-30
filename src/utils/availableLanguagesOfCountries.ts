'use client'

import { CountryCode } from 'libphonenumber-js/core'
import ar from 'react-phone-number-input/locale/ar.json'
import cz from 'react-phone-number-input/locale/cz.json'
import de from 'react-phone-number-input/locale/de.json'
import el from 'react-phone-number-input/locale/el.json'
import en from 'react-phone-number-input/locale/en.json'
import es from 'react-phone-number-input/locale/es.json'
import fi from 'react-phone-number-input/locale/fi.json'
import fr from 'react-phone-number-input/locale/fr.json'
import he from 'react-phone-number-input/locale/he.json'
import hy from 'react-phone-number-input/locale/hy.json'
import it from 'react-phone-number-input/locale/it.json'
import ja from 'react-phone-number-input/locale/ja.json'
import nb from 'react-phone-number-input/locale/nb.json'
import nl from 'react-phone-number-input/locale/nl.json'
import pl from 'react-phone-number-input/locale/pl.json'
import pt from 'react-phone-number-input/locale/pt.json'
import ru from 'react-phone-number-input/locale/ru.json'
import sk from 'react-phone-number-input/locale/sk.json'
import sv from 'react-phone-number-input/locale/sv.json'
import tr from 'react-phone-number-input/locale/tr.json'
import ua from 'react-phone-number-input/locale/ua.json'
import vi from 'react-phone-number-input/locale/vi.json'

export const availableLocalesCountries: Record<
	string,
	{ [key in CountryCode]: string }
> = {
	ar,
	cz,
	de,
	el,
	en,
	es,
	fi,
	fr,
	he,
	hy,
	it,
	ja,
	nb,
	nl,
	pl,
	pt,
	sk,
	ru: { ...ru, BY: 'Беларусь' },
	sv,
	tr,
	ua,
	vi
}
