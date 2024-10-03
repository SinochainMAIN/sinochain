import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
	darkMode: 'class',
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/components/layouts/**/*.{js,ts,jsx,tsx,mdx,scss}'
	],
	theme: {
		extend: {
			colors: COLORS,
			fontFamily: {
				primary: ['var(--font-primary)']
			},
			fontSize: {
				xs: ['0.625rem', '0.79rem'],
				sm: ['0.75rem', '0.9rem'],
				md: ['0.9rem', '1.04rem'],
				lg: ['1.04rem', '1.16rem'],
				xl: ['1.16rem', '1.26rem'],
				'2xl': ['1.26rem', '1.375rem'],
				'3xl': ['1.375rem', '1.5rem'],
				'4xl': ['1.5rem', '1.625rem']
			},
			lineHeight: {
				xs: '0.625rem',
				sm: '0.75rem',
				md: '0.875rem',
				lg: '1rem',
				xl: '1.13rem',
				'2xl': '1.25rem',
				'3xl': '1.375rem',
				'4xl': '1.5rem'
			},
			borderRadius: {
				none: '0',
				'mob-xs': '0.19rem',
				xs: '0.31rem',
				sm: '0.5rem',
				md: '0.62rem',
				lg: '0.8rem',
				xl: '1.69rem',
				'2xl': '2.25rem',
				circle: '50%'
			},
			transitionDuration: {
				DEFAULT: '266ms'
			},
			width: {
				'1p': '1%',
				'2p': '2%',
				'3p': '3%',
				'4p': '4%',
				'5p': '5%',
				'6p': '6%',
				'7p': '7%',
				'8p': '8%',
				'9p': '9%',
				'10p': '10%',
				'11p': '11%',
				'12p': '12%',
				'13p': '13%',
				'14p': '14%',
				'15p': '15%',
				'16p': '16%',
				'17p': '17%',
				'18p': '18%',
				'19p': '19%',
				'20p': '20%',
				'21p': '21%',
				'22p': '22%',
				'23p': '23%',
				'24p': '24%',
				'25p': '25%',
				'26p': '26%',
				'27p': '27%',
				'28p': '28%',
				'29p': '29%',
				'30p': '30%',
				'31p': '31%',
				'32p': '32%',
				'33p': '33%',
				'34p': '34%',
				'35p': '35%',
				'36p': '36%',
				'37p': '37%',
				'38p': '38%',
				'39p': '39%',
				'40p': '40%',
				'41p': '41%',
				'42p': '42%',
				'43p': '43%',
				'44p': '44%',
				'45p': '45%',
				'46p': '46%',
				'47p': '47%',
				'48p': '48%',
				'49p': '49%',
				'50p': '50%',
				'51p': '51%',
				'52p': '52%',
				'53p': '53%',
				'54p': '54%',
				'55p': '55%',
				'56p': '56%',
				'57p': '57%',
				'58p': '58%',
				'59p': '59%',
				'60p': '60%',
				'61p': '61%',
				'62p': '62%',
				'63p': '63%',
				'64p': '64%',
				'65p': '65%',
				'66p': '66%',
				'67p': '67%',
				'68p': '68%',
				'69p': '69%',
				'70p': '70%',
				'71p': '71%',
				'72p': '72%',
				'73p': '73%',
				'74p': '74%',
				'75p': '75%',
				'76p': '76%',
				'77p': '77%',
				'78p': '78%',
				'79p': '79%',
				'80p': '80%',
				'81p': '81%',
				'82p': '82%',
				'83p': '83%',
				'84p': '84%',
				'85p': '85%',
				'86p': '86%',
				'87p': '87%',
				'88p': '88%',
				'89p': '89%',
				'90p': '90%',
				'91p': '91%',
				'92p': '92%',
				'93p': '93%',
				'94p': '94%',
				'95p': '95%',
				'96p': '96%',
				'97p': '97%',
				'98p': '98%',
				'99p': '99%'
			}
		},
		backgroundImage: {
			'select-arrow': `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')`
		},
		backgroundPosition: {
			select: 'right 0.7rem top 50%'
		},

		screens: {
			sm: '576px',
			'sm-max': { max: '576px' },
			md: '768px',
			'md-max': { max: '768px' },
			lg: '992px',
			'lg-max': { max: '992px' },
			xl: '1200px',
			'xl-max': { max: '1200px' },
			'2xl': '1320px',
			'2xl-max': { max: '1320px' },
			'3xl': '1430px',
			'3xl-max': { max: '1430px' }
		}
		// textUnderlineOffset: {
		// 	'2': '2px',
		// 	'3': '3px'
		// }
	},
	plugins: []
}
export default config
