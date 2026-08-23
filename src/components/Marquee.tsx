const words = [
  'Live shows',
  'Features',
  'Verses',
  'Hooks',
  'Hosting',
  'Tour support',
  'Studio sessions',
  'Collabs',
]

const itemClasses =
  'flex items-center whitespace-nowrap font-mono text-[0.8rem] font-bold tracking-[0.14em] uppercase text-fog ' +
  "after:size-1.75 after:mx-7 after:shrink-0 after:rotate-45 after:bg-blood after:content-['']"

export function Marquee() {
  return (
    <div
      className="group overflow-hidden border-b border-white/12 bg-coal py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((group) => (
          <ul className="flex shrink-0 items-center" key={group}>
            {words.map((word) => (
              <li className={itemClasses} key={word}>
                {word}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Marquee
