import { useEffect, useRef, useState } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import { allArtistNames } from '../data/roster'
import { CheckIcon, CloseIcon } from './icons'

export interface BookingRequest {
  mode: 'artist' | 'studio'
  artist?: string
}

interface BookingModalProps {
  request: BookingRequest | null
  onClose: () => void
}

const today = new Date().toISOString().slice(0, 10)

const segSpanClasses =
  'block cursor-pointer px-[0.5em] py-[0.7em] text-center text-[0.78rem] font-bold tracking-[0.07em] uppercase select-none text-fog transition-colors duration-250 peer-checked:bg-blood peer-checked:text-white peer-focus-visible:[outline:2px_solid_var(--color-blood)] peer-focus-visible:[outline-offset:2px]'

function BookingDialogContent({
  request,
  onClose,
}: {
  request: BookingRequest
  onClose: () => void
}) {
  const [mode, setMode] = useState<'artist' | 'studio'>(request.mode)
  const [artist, setArtist] = useState(request.artist ?? '')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-2 px-8 pt-14 pb-12 text-center">
        <span className="mb-3.5 grid size-16 place-items-center bg-blood-bright/14 text-blood-bright">
          <CheckIcon />
        </span>
        <h4 className="font-display text-[1.6rem] font-normal tracking-[0.02em] uppercase">
          Request sent.
        </h4>
        <p className="text-fog">We&rsquo;ve got it — management replies within 48 hours.</p>
        <button type="button" className="btn btn-ghost mt-4.5" onClick={() => onClose()}>
          Done
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-white/12 px-6.5 py-5.5">
        <h3
          id="booking-title"
          className="font-display text-[1.35rem] font-normal tracking-[0.02em] uppercase"
        >
          {mode === 'artist' ? 'Book an artist' : 'Book a studio session'}
        </h3>
        <button
          type="button"
          className="grid size-9.5 shrink-0 place-items-center border border-white/12 text-fog transition-[color,border-color,rotate] duration-300 hover:rotate-90 hover:border-white hover:text-white"
          aria-label="Close dialog"
          onClick={() => onClose()}
        >
          <CloseIcon />
        </button>
      </div>

      <form className="grid gap-4.5 p-6.5" onSubmit={handleSubmit}>
        <div
          className="grid grid-cols-2 gap-1.5 border border-white/12 bg-[#0b0b0c] p-1.25"
          role="radiogroup"
          aria-label="What do you want to book?"
        >
          <label className="relative">
            <input
              type="radio"
              name="mode"
              value="artist"
              checked={mode === 'artist'}
              onChange={() => setMode('artist')}
              className="pointer-events-none absolute opacity-0"
            />
            <span className={segSpanClasses}>Book an artist</span>
          </label>
          <label className="relative">
            <input
              type="radio"
              name="mode"
              value="studio"
              checked={mode === 'studio'}
              onChange={() => setMode('studio')}
              className="pointer-events-none absolute opacity-0"
            />
            <span className={segSpanClasses}>Studio session</span>
          </label>
        </div>

        <div className={`field${mode === 'studio' ? ' is-hidden' : ''}`}>
          <label htmlFor="booking-artist">
            Artist
          </label>
          <select
            id="booking-artist"
            required={mode === 'artist'}
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          >
            <option value="" disabled>
              Select an artist
            </option>
            {allArtistNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Someone else / multiple artists">
              Someone else / multiple artists
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
          <div className="field">
            <label htmlFor="booking-name">
              Name
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="booking-email">
              Email
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="booking-date">
            Preferred date
          </label>
          <input id="booking-date" name="date" type="date" min={today} />
        </div>

        <div className="field">
          <label htmlFor="booking-details">
            Details
          </label>
          <textarea
            id="booking-details"
            name="details"
            placeholder="Venue, city, set length, budget — whatever helps us move fast."
          />
        </div>

        <button type="submit" className="btn btn-solid btn-block">
          Send booking request
        </button>
        <p className="text-center font-mono text-[0.68rem] tracking-[0.06em] text-smoke">
          No spam — management replies personally.
        </p>
      </form>
    </>
  )
}

export function BookingModal({ request, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (request) {
      document.body.classList.add('no-scroll')
      if (!dialog.open) {
        dialog.showModal()
        dialog.querySelector<HTMLInputElement>('#booking-name')?.focus()
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [request])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => {
      document.body.classList.remove('no-scroll')
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) dialogRef.current?.close()
  }

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      onClick={handleBackdropClick}
      aria-labelledby="booking-title"
    >
      {request && (
        <BookingDialogContent
          key={`${request.mode}:${request.artist ?? ''}`}
          request={request}
          onClose={() => dialogRef.current?.close()}
        />
      )}
    </dialog>
  )
}

export default BookingModal
