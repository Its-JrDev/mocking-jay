import { useState } from 'react'
import { extendedArtists, featuredArtists } from '../data/roster'
import type { Artist } from '../data/roster'
import { revealDelay, useReveal } from '../hooks/useReveal'
import { ArrowDownIcon, ArrowUpRightIcon } from './icons'

interface ArtistsProps {
  onBook: (artist?: string) => void
}

const kickerClasses =
  'font-mono text-[0.72rem] tracking-[0.12em] uppercase text-blood-deep'

function ArtistCard({
  artist,
  index,
  onBook,
  preview,
  onPreview,
  touch,
}: {
  artist: Artist
  index: number
  onBook: (artist?: string) => void
  preview: boolean
  onPreview: () => void
  touch: boolean
}) {
  const ref = useReveal<HTMLButtonElement>()

  return (
    <button
      type="button"
      ref={ref}
      className="group/card reveal block w-full text-left min-[1101px]:even:mt-13"
      style={revealDelay((index % 4) * 80)}
      data-preview={preview}
      onClick={() => (touch && !preview ? onPreview() : onBook(artist.name))}
      aria-label={
        touch && !preview
          ? `Preview ${artist.name} — tap again to book ${artist.tag.toLowerCase()} from ${artist.city}`
          : `Book ${artist.name} — ${artist.tag.toLowerCase()} from ${artist.city}`
      }
    >
      <span className="relative block aspect-3/4 overflow-hidden bg-[#dcd8cf]">
        <img
          className={`absolute inset-0 h-full w-full object-cover object-top grayscale contrast-[1.06] transition-[filter,scale] duration-500 ease-brand group-hover/card:scale-[1.04] group-hover/card:grayscale-0 ${preview ? 'scale-[1.04] grayscale-0' : ''}`}
          src={artist.image}
          alt=""
          loading="lazy"
          onError={(event) => event.currentTarget.classList.add('is-hidden')}
        />
        <span
          className="absolute top-3 left-3.5 z-2 font-mono text-[0.62rem] tracking-[0.18em] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="absolute top-3 right-3 z-2 grid size-9.5 place-items-center bg-blood text-white opacity-0 -translate-y-2 transition-[opacity,translate] duration-280 ease-brand [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRightIcon size={16} />
        </span>
      </span>
      <span className="block pt-4">
        <h3 className="font-display text-[1.3rem] leading-[1.1] font-normal tracking-[0.01em] uppercase">
          {artist.name}
        </h3>
        <p className="mt-1.75 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#6b675f]">{`${artist.tag} · ${artist.city}`}</p>
      </span>
    </button>
  )
}

export function Artists({ onBook }: ArtistsProps) {
  const [expanded, setExpanded] = useState(false)
  const [previewName, setPreviewName] = useState<string | null>(null)
  const [touch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches,
  )
  const headTitleRef = useReveal<HTMLDivElement>()
  const headCtaRef = useReveal<HTMLDivElement>()
  const footRef = useReveal<HTMLParagraphElement>()

  const handleBook = (artist?: string) => {
    setPreviewName(null)
    onBook(artist)
  }

  return (
    <section
      className="bg-paper py-[clamp(88px,11vw,148px)] text-[#161512]"
      id="artists"
    >
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="mb-13 flex flex-wrap items-end justify-between gap-6">
          <div className="reveal" ref={headTitleRef}>
            <p className={kickerClasses}>The roster</p>
            <h2 className="mt-4.5 font-display text-[clamp(2.5rem,5.4vw,4.2rem)] leading-[0.96] font-normal tracking-[-0.01em] uppercase">
              Artists that move different
            </h2>
          </div>
          <div className="reveal" ref={headCtaRef} style={revealDelay(120)}>
            <button
              type="button"
              className={`link-arrow${expanded ? ' open' : ''}`}
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Explore the full roster'}
              <ArrowDownIcon size={15} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4.5 gap-y-12 max-[1100px]:grid-cols-2 max-[1100px]:gap-x-4 max-[1100px]:gap-y-10 max-[560px]:grid-cols-1 max-[560px]:gap-8.5">
          {featuredArtists.map((artist, index) => (
            <ArtistCard
              key={artist.name}
              artist={artist}
              index={index}
              onBook={handleBook}
              preview={previewName === artist.name}
              onPreview={() => setPreviewName(artist.name)}
              touch={touch}
            />
          ))}
        </div>

        {expanded && (
          <div className="mt-12 grid grid-cols-4 gap-x-4.5 gap-y-12 max-[1100px]:mt-10 max-[1100px]:grid-cols-2 max-[1100px]:gap-x-4 max-[1100px]:gap-y-10 max-[560px]:grid-cols-1 max-[560px]:gap-8.5">
            {extendedArtists.map((artist, index) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                index={index + 4}
                onBook={handleBook}
                preview={previewName === artist.name}
                onPreview={() => setPreviewName(artist.name)}
                touch={touch}
              />
            ))}
          </div>
        )}

        <div className="mt-14.5 flex justify-center">
          <p
            ref={footRef}
            className="reveal font-mono text-[0.66rem] tracking-[0.14em] uppercase text-[#6b675f]"
          >
            And more — new voices join the label every season.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Artists
