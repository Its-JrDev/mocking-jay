import { ArrowDownIcon, ArrowRightIcon } from './icons'
import { revealDelay } from '../hooks/useReveal'

interface HeroProps {
  onBook: () => void
}

const stats = [
  { value: '20+', label: 'Artists on the roster' },
  { value: '500+', label: 'Shows booked worldwide' },
  { value: '48H', label: 'Average reply time' },
]

const kickerClasses =
  'font-mono text-[0.72rem] tracking-[0.12em] uppercase text-blood-bright'

export function Hero({ onBook }: HeroProps) {
  return (
    <section
      className="relative grid min-h-svh grid-cols-[minmax(0,45%)_minmax(0,55%)] grid-rows-[1fr_auto] pt-18.5 max-[940px]:grid-cols-1 max-[940px]:grid-rows-none"
      id="top"
    >
      <div className="flex flex-col justify-center gap-[clamp(26px,4.5vh,48px)] pt-[clamp(40px,6vh,80px)] pr-[clamp(28px,4vw,60px)] pb-[clamp(40px,6vh,72px)] pl-[max(5vw,calc((100vw-min(1180px,92vw))/2))] max-[940px]:justify-start max-[940px]:gap-7 max-[940px]:py-[clamp(48px,8vh,90px)] max-[940px]:px-[5vw]">
        <p className={`${kickerClasses} animate-rise`} style={revealDelay(60)}>
          Mocking by Jay — Independent rap label
        </p>

        <h1 className="font-display text-[clamp(2.9rem,5.8vw,5.8rem)] leading-[0.95] font-normal tracking-[-0.015em] uppercase max-[940px]:text-[clamp(3rem,13vw,5.2rem)]">
          <span className="block animate-rise" style={revealDelay(140)}>
            Real rap.
          </span>
          <span className="block animate-rise" style={revealDelay(220)}>
            Real artists.
          </span>
          <span
            className={`block animate-rise text-blood-bright`}
            style={revealDelay(300)}
          >
            Booked here.
          </span>
        </h1>

        <div className="flex flex-col gap-6.5">
          <p
            className="max-w-[40ch] animate-rise text-[0.98rem] text-fog"
            style={revealDelay(380)}
          >
            The independent home for rap artists with their own sound — and the fastest way
            to get one on your stage, in your studio or on your record.
          </p>
          <div className="flex flex-wrap gap-3.5 animate-rise" style={revealDelay(460)}>
            <button type="button" className="btn btn-solid btn-xl" onClick={onBook}>
              Book an Artist
              <ArrowRightIcon size={16} />
            </button>
            <a className="btn btn-ghost" href="#artists">
              Explore the roster
              <ArrowDownIcon size={15} />
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden border-l border-white/12 animate-rise max-[940px]:min-h-105 max-[940px]:border-l-0 max-[940px]:border-t max-[940px]:border-white/12"
        style={revealDelay(120)}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.15] brightness-[0.88]"
          src="/images/hero-crowd.jpg"
          alt="Crowd reaching toward the stage at a Mocking by Jay show"
          onError={(event) => event.currentTarget.classList.add('is-hidden')}
        />
        <span
          className="pointer-events-none absolute inset-0 bg-blood opacity-60 mix-blend-multiply"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.6),transparent_42%),linear-gradient(to_right,rgba(10,10,11,0.32),transparent_32%)]"
          aria-hidden="true"
        />
        <p
          className="absolute bottom-5 left-5.5 z-2 font-mono text-[0.62rem] leading-[1.6] tracking-[0.08em] uppercase text-bone/90"
          aria-hidden="true"
        >
          Sound over everything
          <br />
          MBJ / 001 — 2026
        </p>
        <p
          className="absolute right-5.5 bottom-5 z-2 text-right font-mono text-[0.62rem] tracking-[0.08em] uppercase text-blood-bright"
          aria-hidden="true"
        >
          MBJ<span className="mt-0.5 block">01</span>
        </p>
      </div>

      <div
        className="col-span-full grid grid-cols-3 border-t border-white/12 animate-rise max-[560px]:grid-cols-1"
        style={revealDelay(540)}
      >
        {stats.map((stat, index) => (
          <div
            className={`flex flex-col gap-1.5 pt-5.5 pr-6 pb-7.5 max-[560px]:py-4 max-[560px]:pr-0 ${
              index > 0
                ? 'border-l border-l-white/12 pl-6 max-[560px]:border-l-0 max-[560px]:pl-0 max-[560px]:border-t max-[560px]:border-t-white/12'
                : ''
            }`}
            key={stat.label}
          >
            <b className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-normal tracking-[0.02em]">
              {stat.value}
            </b>
            <span className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-fog">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
