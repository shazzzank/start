export type SEO = {
  name: string,
  value: string
}

export type HeaderType = {
  href: string;
  icon: React.ReactNode
}

export type FooterType = {
  name: string;
  items: { name: string; href: string }[]
}

export type Banner = {
  text: string;
  bg: string
}

export type Button = {
  name: string;
  href?: string;
  onClick?: (e: any) => void;
  placeholder?: string;
}

export type CardType = {
  type: 'full' | 'basic',
  category?: 'featured',
  image?: string,
  heading?: string,
  subheading?: string,
  text?: string,
  bg?: string,
  button?: Button
}

export type HeroType = {
  image: string,
  heading: string,
  text: string,
  button: Button
}

export type NewsletterType = {
  heading: string,
  text: string,
  button: Button
}
