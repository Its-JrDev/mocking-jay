export interface Artist {
  name: string
  tag: string
  city: string
  image: string
}

export const featuredArtists: Artist[] = [
  {
    name: 'Kayo Blaze',
    tag: 'Drill',
    city: 'London',
      image: '/images/artist-kayo.jpg',
  },
  {
    name: 'Mirah',
    tag: 'Trap Soul',
    city: 'Berlin',
      image: '/images/artist-mirah.jpg',
  },
  {
    name: 'Dxve',
    tag: 'Boom Bap',
    city: 'New York',
      image: '/images/artist-dxve.jpg',
  },
  {
    name: 'Sev',
    tag: 'Freestyle',
    city: 'Paris',
      image: '/images/artist-sev.jpg',
  },
]

export const extendedArtists: Artist[] = [
  {
    name: 'Luna J',
    tag: 'Melodic Rap',
    city: 'Atlanta',
      image: '/images/artist-luna.jpg',
  },
  {
    name: 'Pricetag',
    tag: 'Trap',
    city: 'Chicago',
      image: '/images/artist-pricetag.jpg',
  },
  {
    name: 'Okto',
    tag: 'Experimental',
    city: 'Amsterdam',
      image: '/images/artist-okto.jpg',
  },
  {
    name: 'Reem',
    tag: 'Grime',
    city: 'Manchester',
      image: '/images/artist-reem.jpg',
  },
]

export const allArtistNames = [...featuredArtists, ...extendedArtists].map((a) => a.name)
