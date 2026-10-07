import { useState } from 'react'
import { revealDelay, useReveal } from '../hooks/useReveal'
import { ArrowRightIcon } from './icons'

interface StudioProps {
  onBook: () => void
}

export function Studio({ onBook }: StudioProps) {
  const copyRef = useReveal<HTMLDivElement>()
  const [mediaLoaded, setMediaLoaded] = useState(false)

  return (
    <section
      className="grid min-h-[min(86svh,840px)] grid-cols-[minmax(0,55%)_minmax(0,45%)] bg-blood text-white max-[940px]:relative max-[940px]:isolate max-[940px]:grid-cols-1 max-[940px]:overflow-hidden max-[940px]:min-h-[calc(100svh-74px)]"
      id="studio"
    >
      <div className="relative isolate overflow-hidden bg-blood max-[940px]:absolute max-[940px]:inset-0 max-[940px]:h-full max-[940px]:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(to_right,rgba(220,38,38,0)_85%,var(--color-blood)_99%)] max-[940px]:after:bg-[linear-gradient(to_bottom,rgba(10,10,11,0.62),rgba(10,10,11,0.55)_42%,rgba(10,10,11,0.8))]">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-0 grayscale contrast-[1.08] transition-opacity duration-700 ease-out mask-[linear-gradient(to_right,#000_50%,transparent_97%)] data-[loaded=true]:opacity-100 max-[940px]:mask-none"
          src="/images/studio-mic.jpg"
          alt="Condenser microphone inside the Mocking by Jay studio"
          loading="lazy"
          decoding="async"
          data-loaded={mediaLoaded}
          onLoad={(event) => {
            if (event.currentTarget.complete && event.currentTarget.naturalWidth > 0) {
              setMediaLoaded(true)
            }
          }}
          onError={(event) => event.currentTarget.classList.add('is-hidden')}
        />
        <div
          aria-hidden="true"
          data-loaded={mediaLoaded}
          className="pointer-events-none absolute inset-0 bg-blood opacity-0 mix-blend-multiply transition-opacity duration-700 ease-out mask-[linear-gradient(to_right,#000_50%,transparent_97%)] data-[loaded=true]:opacity-100 max-[940px]:mask-none"
        />
      </div>

      <div
        className="reveal flex flex-col items-start justify-center gap-[clamp(22px,3.6vh,40px)] pt-[clamp(56px,8vw,110px)] pr-[max(5vw,calc((100vw-min(1180px,92vw))/2))] pb-[clamp(56px,8vw,110px)] pl-[clamp(30px,4.5vw,72px)] max-[940px]:relative max-[940px]:z-10 max-[940px]:min-h-[calc(100svh-74px)] max-[940px]:justify-center max-[940px]:gap-[clamp(16px,2.4vh,24px)] max-[940px]:pt-13 max-[940px]:pr-[7vw] max-[940px]:pb-17 max-[940px]:pl-[7vw]"
        ref={copyRef}
        style={revealDelay(140)}
      >
        <p className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white">
          The studio / MBJ 02
        </p>
        <h2 className="font-display text-[clamp(4rem,8.2vw,8.5rem)] leading-[0.85] font-normal tracking-[-0.02em] uppercase max-[940px]:text-[clamp(3.4rem,17vw,6.5rem)]">
          Cut it
          <br />
          loud.
        </h2>
        <p className="max-w-[36ch] text-[1.05rem] leading-[1.6]">
          Book the booth, bring the idea, leave with something real.
        </p>
        <button type="button" className="btn btn-light-outline" onClick={onBook}>
          Book a Studio Session
          <ArrowRightIcon size={15} />
        </button>
        <p className="-mt-3.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-white/95">
          Engineer included · Day &amp; night · Rates on request
        </p>
      </div>
    </section>
  )
}

export default Studio
