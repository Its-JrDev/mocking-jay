import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Artists } from './components/Artists'
import { BookingModal } from './components/BookingModal'
import type { BookingRequest } from './components/BookingModal'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Studio } from './components/Studio'

function App() {
  const [booking, setBooking] = useState<BookingRequest | null>(null)

  const openBooking = useCallback((mode: 'artist' | 'studio' = 'artist', artist?: string) => {
    setBooking({ mode, artist })
  }, [])

  const closeBooking = useCallback(() => setBooking(null), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onBook={() => openBooking('artist')} />
      <main id="main">
        <Hero onBook={() => openBooking('artist')} />
        <Marquee />
        <Artists onBook={(artist) => openBooking('artist', artist)} />
        <About />
        <Studio onBook={() => openBooking('studio')} />
        <FinalCta onBook={() => openBooking('artist')} />
      </main>
      <Footer onBook={() => openBooking('artist')} />
      <BookingModal request={booking} onClose={closeBooking} />
    </>
  )
}

export default App
