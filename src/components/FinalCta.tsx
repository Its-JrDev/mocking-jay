import { useReveal } from '../hooks/useReveal'
import { ArrowRightIcon } from './icons'

interface FinalCtaProps {
  onBook: () => void
}

export function FinalCta({ onBook }: FinalCtaProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden py-[clamp(88px,11vw,148px)] text-center before:pointer-events-none before:absolute before:bottom-[-35%] before:left-1/2 before:aspect-square before:w-[min(80vw,900px)] before:-translate-x-1/2 before:bg-[radial-gradient(closest-side,rgba(220,38,38,0.13),transparent_70%)] before:content-['']">
      <div
        className="relative mx-auto flex w-[min(1180px,92vw)] flex-col items-center reveal"
        ref={ref}
      >
        <p className="text-center font-mono text-[0.72rem] tracking-[0.12em] uppercase text-blood-bright">
          Ready when you are
        </p>
        <h2 className="mt-5.5 font-display text-[clamp(2.7rem,7vw,5.8rem)] leading-[0.98] font-normal tracking-[-0.01em] uppercase">
          <span className="block">
            Book the <em className="text-blood-bright not-italic">sound</em>
          </span>
          <span className="block">you need.</span>
        </h2>
        <p className="mt-6 max-w-[46ch] text-fog">
          One form. Zero middlemen. Your request lands straight with management.
        </p>
        <button type="button" className="btn btn-solid btn-xl mt-10" onClick={onBook}>
          Book an Artist
          <ArrowRightIcon size={18} />
        </button>
        <a
          className="mt-7 border-b border-white/26 pb-0.75 font-mono text-[0.82rem] tracking-[0.04em] text-fog transition-[color,border-color] duration-250 hover:border-blood hover:text-white"
          href="mailto:bookings@mockingbyjay.com"
        >
          bookings@mockingbyjay.com
        </a>
      </div>
    </section>
  )
}

export default FinalCta
