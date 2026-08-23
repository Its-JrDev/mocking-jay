import { SocialLinks } from './SocialLinks'

interface FooterProps {
  onBook: () => void
}

const exploreLinks = [
  { label: 'Artists', href: '#artists' },
  { label: 'About the label', href: '#about' },
  { label: 'Studio sessions', href: '#studio' },
]

const legalLinks = ['Privacy policy', 'Terms', 'Imprint']

export function Footer({ onBook }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/12 bg-[#080809]">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 py-16 max-[940px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-8">
          <div>
            <a className="brand" href="#top" aria-label="Mocking by Jay — back to top">
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-text">
                <strong>Mocking</strong>
                <small>by Jay</small>
              </span>
            </a>
            <p className="mt-4.5 max-w-[30ch] text-[0.95rem] text-fog">
              Independent rap label &amp; artist management. Home of voices that move
              different.
            </p>
          </div>

          <nav aria-label="Footer">
            <h4 className="mb-4.5 font-mono text-[0.66rem] font-bold tracking-[0.22em] uppercase text-smoke">
              Explore
            </h4>
            <ul>
              {exploreLinks.map((link) => (
                <li className="mb-3" key={link.href}>
                  <a
                    className="text-[0.94rem] text-[#cfccc6] transition-colors duration-200 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mb-3">
                <button
                  type="button"
                  className="text-[0.94rem] text-[#cfccc6] transition-colors duration-200 hover:text-blood-bright"
                  onClick={onBook}
                >
                  Book an artist
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="mb-4.5 font-mono text-[0.66rem] font-bold tracking-[0.22em] uppercase text-smoke">
              Contact
            </h4>
            <ul>
              <li className="mb-3">
                <a
                  className="text-[0.94rem] text-[#cfccc6] transition-colors duration-200 hover:text-white"
                  href="mailto:bookings@mockingbyjay.com"
                >
                  bookings@mockingbyjay.com
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-[0.94rem] text-[#cfccc6] transition-colors duration-200 hover:text-white"
                  href="mailto:mgmt@mockingbyjay.com"
                >
                  mgmt@mockingbyjay.com
                </a>
              </li>
              <li className="mb-3">
                <span className="font-mono text-[0.8rem] tracking-[0.06em] uppercase text-fog">
                  Worldwide bookings
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 font-mono text-[0.66rem] font-bold tracking-[0.22em] uppercase text-smoke">
              Follow
            </h4>
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 py-5.5 text-[0.82rem] text-smoke max-[560px]:flex-col max-[560px]:items-start">
          <span>{`© ${year} Mocking by Jay — All rights reserved.`}</span>
          <ul className="flex gap-5.5 font-mono text-[0.68rem] tracking-[0.08em] uppercase">
            {legalLinks.map((label) => (
              <li key={label}>
                <a
                  className="text-smoke transition-colors duration-200 hover:text-white"
                  href="#top"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
