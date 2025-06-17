import { FaPlaneDeparture, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './Navbar.scss'

// Language translations – English (EN), Spanish (ES), Tamil (TA)
const translations = {
  en: { home: 'Home', book: 'Book', support: 'Support', subs: 'Subscribe' },
  es: { home: 'Inicio', book: 'Reservar', support: 'Soporte', subs: 'Suscríbete' },
  ta: { home: 'முகப்பு', book: 'முன்பதிவு', support: 'ஆதரவு', subs: 'சந்தா' },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [lang, setLang] = useState('en')
  const [scrolled, setScrolled] = useState(false) // navbar shrink on scroll

  // Apply or remove the dark‑mode class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark)
  }, [dark])

  // Listen to scroll – adds drop‑shadow & backdrop‑blur after 64px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = translations[lang]

  return (
    <header
      className={`navbar ${dark ? 'navbar--dark' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__container">
        {/* logo */}
        <a className="navbar__logo" href="#home" onClick={() => setIsOpen(false)}>
          <FaPlaneDeparture />
          <span>JOE&nbsp;Airlines</span>
        </a>

        {/* nav links */}
        <nav className={`navbar__links ${isOpen ? 'open' : ''}`} aria-label="Main">
          <a href="#home" onClick={() => setIsOpen(false)}>{t.home}</a>
          <a href="#search-section" onClick={() => setIsOpen(false)}>{t.book}</a>
          <a href="#support" onClick={() => setIsOpen(false)}>{t.support}</a>
          <a href="#subscribe" onClick={() => setIsOpen(false)}>{t.subs}</a>

          {/* desktop language selector */}
          <div className="navbar__lang desktop-only">
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'active' : ''}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={lang === 'es' ? 'active' : ''}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLang('ta')}
              className={lang === 'ta' ? 'active' : ''}
              aria-label="தமிழில் மாற்றவும்"
            >
              TA
            </button>
          </div>
        </nav>

        {/* right‑side controls */}
        <div className="navbar__actions">
          {/* mobile language selector */}
          <div className="navbar__lang mobile-only">
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'active' : ''}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={lang === 'es' ? 'active' : ''}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLang('ta')}
              className={lang === 'ta' ? 'active' : ''}
              aria-label="தமிழில் மாற்றவும்"
            >
              TA
            </button>
          </div>

          {/* dark‑mode toggle */}
          <button
            className="navbar__dark"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* hamburger */}
          <button
            className={`navbar__toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* overlay for mobile when menu is open */}
      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
    </header>
  )
}

export default Navbar
