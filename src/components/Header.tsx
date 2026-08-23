import { useEffect, useState } from 'react'
import { ArrowRightIcon } from './icons'
import { SocialLinks } from './SocialLinks'

interface HeaderProps {
  onBook: () => void
}

const navItems = [
  { label: 'Artists', href: '#artists', num: '01' },
  { label: 'About', href: '#about', num: '02' },
  { label: 'Studio', href: '#studio', num: '03' },
]

const navLinkClasses =
  'relative block py-1.5 text-[0.76rem] font-semibold tracking-[0.1em] uppercase text-fog transition-colors duration-250 hover:text-white ' +
  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blood after:transition-transform after:duration-300 after:ease-brand after:content-[""] hover:after:scale-x-100'

export function Header({ onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-60 border-b border-transparent transition-[background-color,border-color] duration-300${
          scrolled ? ' border-white/12 bg-ink/82 backdrop-blur-lg' : ''
        }`}
      >
      <div className="mx-auto flex h-18.5 w-[min(1180px,92vw)] items-center justify-between gap-8">
        <a className="brand" href="#top" aria-label="Mocking by Jay — back to top">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <strong>Mocking</strong>
            <small>by Jay</small>
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="hidden min-[941px]:flex gap-[clamp(20px,3vw,38px)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className={navLinkClasses} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3.5">
          <button
            type="button"
            className="btn btn-solid btn-sm max-[560px]:hidden"
            onClick={onBook}
          >
            Book an Artist
            <ArrowRightIcon size={15} />
          </button>
          <button
            type="button"
            className={`burger${menuOpen ? ' open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav
          className="mx-auto flex h-full w-[min(1180px,92vw)] flex-col"
          aria-label="Mobile"
        >
          <ul className="mt-[6vh] flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  className={`flex items-baseline gap-4.5 font-display text-[clamp(2.6rem,10vw,3.6rem)] leading-[1.15] uppercase transition-[opacity,translate,color] duration-450 ease-brand hover:text-blood-bright ${
                    menuOpen ? ' translate-y-0 opacity-100' : ' translate-y-4.5 opacity-0'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${(index + 1) * 0.06}s` : '0s' }}
                  href={item.href}
                  onClick={closeMenu}
                >
                  <em className="font-mono not-italic text-[0.72rem] tracking-[0.2em] text-blood-bright">
                    {item.num}
                  </em>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col items-start gap-6">
            <button
              type="button"
              className="btn btn-solid"
              onClick={() => {
                closeMenu()
                onBook()
              }}
            >
              Book an Artist
              <ArrowRightIcon size={16} />
            </button>
            <a
              className="font-mono text-[0.8rem] tracking-[0.04em] text-fog transition-colors duration-250 hover:text-white"
              href="mailto:bookings@mockingbyjay.com"
            >
              bookings@mockingbyjay.com
            </a>
            <SocialLinks />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
