import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useModal } from '@/context/ModalContext'

interface ModalProps {
	shouldCloseOnOutsideClick?: boolean
	children: ReactNode
}

function Modal({ children, shouldCloseOnOutsideClick }: ModalProps) {
	const { isOpen, closeModal } = useModal()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	if (!isOpen || !mounted) return null

	const handleOutsideClick = () => {
		if (shouldCloseOnOutsideClick) {
			closeModal()
		}
	}

	return createPortal(
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div
				className='absolute inset-0  bg-black/50'
				onClick={handleOutsideClick}
			></div>
			<div className='bg-white rounded-lg shadow-lg m-5 p-6 relative z-10'>
				{children}
			</div>
		</div>,
		document.body
	)
}

export default Modal
