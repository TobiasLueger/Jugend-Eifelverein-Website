import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { X } from "phosphor-react";

export default function NewsletterDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const dontShow = localStorage.getItem('dontShowNewsletter')
      if (dontShow !== 'true') {
        setIsOpen(true)
      }
    }, 5000) // Random delay between 5-10 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      const dontShow = localStorage.getItem('dontShowNewsletter')
      setShouldShow(dontShow !== 'true')
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // The dialog will reappear on the next page load
  }

  const handleDontRemind = () => {
    localStorage.setItem('dontShowNewsletter', 'true')
    setIsOpen(false)
    setShouldShow(false)
  }

  const handleSubscribe = () => {
    localStorage.setItem('dontShowNewsletter', 'true')
    setIsOpen(false)
    setShouldShow(false)
    // Redirect to newsletter page
    window.location.href = '/newsletter'
  }

  if (!shouldShow || !isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-greenDefault hover:text-greenLight"
          aria-label="Close"
        >
          <X weight="bold" width={24} height={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-black mb-2">Abonniere unseren Newsletter</h2>
          <p className="text-black mb-6">
						Bleibe informiert über unsere neuesten Veranstaltungen und Berichte!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
						<button title="Anmelden" className="btn-secondary !flex-1 !px-4 !py-2" onClick={handleDontRemind}>
							Nicht mehr erinnern
						</button>
						<button title="Anmelden" className="btn !flex-1 !px-4 !py-2" onClick={handleSubscribe}>
							Zum Newsletter anmelden
						</button>
          </div>
        </div>
      </div>
    </div>
  )
}