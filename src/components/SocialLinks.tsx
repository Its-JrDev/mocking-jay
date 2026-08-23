import { InstagramIcon, SpotifyIcon, YoutubeIcon } from './icons'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeIcon },
  { label: 'Spotify', href: 'https://spotify.com', Icon: SpotifyIcon },
]

export function SocialLinks() {
  return (
    <ul className="flex gap-3">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            className="social-btn"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mocking by Jay on ${label}`}
          >
            <Icon size={17} />
          </a>
        </li>
      ))}
    </ul>
  )
}
