import { useReveal } from '../hooks/useReveal'

const principles = [
  {
    num: '01',
    title: 'Artist individuality',
    text: 'Every act keeps their own voice, look and lane. We never sand off the edges that make an artist worth booking.',
  },
  {
    num: '02',
    title: 'Creative freedom',
    text: 'No formulas, no filters, no creative middlemen. Ideas go straight from the artist to the tape.',
  },
  {
    num: '03',
    title: 'Rap culture',
    text: 'From cyphers and basements to festival main stages — we exist to push the culture forward.',
  },
]

const kickerClasses = 'font-mono text-[0.72rem] tracking-[0.12em] uppercase text-blood-bright'

export function About() {
  const leftRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()
  const quoteRef = useReveal<HTMLDivElement>()

  return (
    <section className="py-[clamp(88px,11vw,148px)]" id="about">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid items-start grid-cols-[1.05fr_0.95fr] gap-[clamp(48px,7vw,110px)] max-[940px]:grid-cols-1">
          <div className="reveal" ref={leftRef}>
            <p className={kickerClasses}>About the label</p>
            <h2 className="mt-4.5 font-display text-[clamp(2.5rem,5.4vw,4.2rem)] leading-[0.96] font-normal tracking-[-0.01em] uppercase">
              No templates.
              <br />
              <span className="text-blood-bright">Just voices.</span>
            </h2>
            <p className="mt-5 max-w-[52ch] text-[1.02rem] text-fog">
              Mocking by Jay is an independent rap label built around one belief: the artist
              comes first. No corporate playbook — just voices with something to say and the
              beats to say it over.
            </p>
            <p className="mt-5 max-w-[52ch] text-[1.02rem] text-fog">
              The roster is big and always changing, because the culture never sits still.
              We move fast, keep it honest, and let every act sound exactly like themselves.
            </p>
          </div>

          <ul className="flex flex-col" ref={listRef}>
            {principles.map((principle) => (
              <li
                className="grid grid-cols-[56px_1fr] gap-4.5 border-t border-white/12 py-6.5 last:border-b last:border-white/12"
                key={principle.num}
              >
                <span
                  className="pt-1.25 font-mono text-[0.78rem] font-bold tracking-widest text-blood-bright"
                  aria-hidden="true"
                >
                  {principle.num}
                </span>
                <div>
                  <h3 className="text-[1.12rem] font-semibold tracking-[0.01em]">{principle.title}</h3>
                  <p className="mt-2 max-w-[46ch] text-[0.98rem] text-fog">{principle.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="reveal mt-[clamp(64px,8vw,104px)] max-w-225" ref={quoteRef}>
          <blockquote className="font-display text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.14] tracking-[-0.005em] uppercase">
            “We don&rsquo;t sign sounds. <span className="text-blood-bright">We back people.</span>”
          </blockquote>
          <cite className="mt-5.5 block font-mono text-[0.66rem] tracking-[0.22em] uppercase not-italic text-fog">
            Jay — Founder
          </cite>
        </figure>
      </div>
    </section>
  )
}

export default About
