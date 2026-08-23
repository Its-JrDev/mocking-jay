import { revealDelay, useReveal } from '../hooks/useReveal'
import { ArrowRightIcon } from './icons'

interface StudioProps {
  onBook: () => void
}

export function Studio({ onBook }: StudioProps) {
  const mediaRef = useReveal<HTMLDivElement>()
  const copyRef = useReveal<HTMLDivElement>()

  return (
    <section
      className="grid min-h-[min(86svh,840px)] grid-cols-[minmax(0,55%)_minmax(0,45%)] bg-blood text-white max-[940px]:grid-cols-1"
      id="studio"
    >
      <div
        className="relative overflow-hidden reveal max-[940px]:min-h-[52svh] after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(to_right,rgba(220,38,38,0)_85%,var(--color-blood)_99%)] max-[940px]:after:bg-[linear-gradient(to_bottom,rgba(10,10,11,0)_32%,rgba(10,10,11,0.78)_64%,rgba(10,10,11,0)_97%),linear-gradient(to_bottom,rgba(220,38,38,0)_58%,var(--color-blood)_99%)]"
        ref={mediaRef}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08] mix-blend-multiply mask-[linear-gradient(to_right,#000_50%,transparent_97%)] max-[940px]:mask-[linear-gradient(to_bottom,#000_45%,transparent_95%)]"
          src="/images/studio-mic.jpg"
          alt="Condenser microphone inside the Mocking by Jay studio"
          loading="lazy"
          onError={(event) => event.currentTarget.classList.add('is-hidden')}
        />
      </div>

      <div
        className="reveal flex flex-col items-start justify-center gap-[clamp(22px,3.6vh,40px)] pt-[clamp(56px,8vw,110px)] pr-[max(5vw,calc((100vw-min(1180px,92vw))/2))] pb-[clamp(56px,8vw,110px)] pl-[clamp(30px,4.5vw,72px)] max-[940px]:pt-13 max-[940px]:pr-[7vw] max-[940px]:pb-17 max-[940px]:pl-[7vw]"
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
