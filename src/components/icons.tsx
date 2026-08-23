import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base({ size = 18, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...rest,
  } as const
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base({ size: 28, ...props })}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base({ size: 16, ...props })}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M8.2 10.1c2.6-.7 5.6-.4 7.8 1" />
      <path d="M8.6 12.9c2.1-.55 4.5-.3 6.3.8" />
      <path d="M9 15.4c1.6-.4 3.4-.2 4.8.6" />
    </svg>
  )
}
