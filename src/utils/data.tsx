import SearchIcon from '@/components/icons/search';
import CartIcon from '@/components/icons/cart';
import UserIcon from '@/components/icons/user';
import { Banner, CardType, FooterType, HeaderType, HeroType, NewsletterType, SEO } from "@/utils/types";

export const seo: SEO[] = [
  { name: "brandName", value: "All That Fresh" }
];

export const menu: HeaderType[] = [
  { href: '/', icon: <SearchIcon /> },
  { href: '/', icon: <CartIcon /> },
  { href: '/', icon: <UserIcon /> }
]

export const banner: Banner[] = [
  { text: 'text-red-300', bg: 'bg-red-100' },
  { text: 'text-blue-300', bg: 'bg-blue-100' },
  { text: 'text-green-300', bg: 'bg-green-100' }
];

export const categories: CardType[] = [
  {
    type: "full",
    heading: "Men",
    bg: "https://placehold.co/300x400"
  },
  {
    type: "full",
    heading: "Women",
    bg: "https://placehold.co/300x400"
  },
  {
    type: "full",
    heading: "Kids",
    bg: "https://placehold.co/300x400"
  },
  {
    type: "full",
    heading: "Baby",
    bg: "https://placehold.co/300x400"
  }
];

export const products: CardType[] = [
  {
    type: "basic",
    category: "featured",
    heading: "Ultra Light Down",
    text: "Formal",
    subheading: "$59.9",
    button: { name: "Add", href: "/" },
    image: "/products/4.jpg"
  },
  {
    type: "basic",
    category: "featured",
    heading: "Heattech Crew",
    text: "Skateboarding",
    subheading: "$19.9",
    button: { name: "Add", href: "/" },
    image: "/products/3.jpg"
  },
  {
    type: "basic",
    category: "featured",
    heading: "Cashmere Crew",
    text: "Formal",
    subheading: "$79.9",
    button: { name: "Add", href: "/" },
    image: "/products/2.jpg"
  },
  {
    type: "basic",
    category: "featured",
    heading: "Flannel Checked",
    text: "Casual",
    subheading: "$29.9",
    button: { name: "Add", href: "/" },
    image: "/products/1.jpg"
  },
];

export const collections: CardType[] = [
  {
    type: "full",
    heading: "Summer Essentials",
    text: "Light, breathable pieces for warm weather",
    bg: "/products/8.jpg"
  },
  {
    type: "full",
    heading: "Workwear",
    text: "Professional attire for the modern workplace",
    bg: "/products/7.jpg"
  },
  {
    type: "full",
    heading: "Loungewear",
    text: "Comfortable styles for home and relaxation",
    bg: "/products/6.jpg"
  },
  {
    type: "full",
    heading: "Activewear",
    text: "Everyday activewear for any workout, any pace.",
    bg: "/products/5.jpg"
  }
];

export const hero: HeroType = {
  image: "https://placehold.co/600x400",
  heading: "Swiftly Catch Attention",
  text: "Break the mold with sharp lines, unexpected textures, and a punch of attitude. This is fashion that refuses to blend in. Engineered for the bold, built for the now—gear up and make your own statement.",
  button: { name: "Shop now →", href: "/" }
};

export const newsletter: NewsletterType = {
  heading: "Stay in the Loop",
  text: "Be the first to know about new arrivals, exclusive offers, and special events. Join our newsletter today.",
  button: { name: "Subscribe", placeholder: "Enter your email", onClick: () => { } }
}

export const footer: FooterType[] = [
  {
    name: "Shop",
    items: [
      { name: "New Arrivals", href: "/", },
      { name: "Best Sellers", href: "/", },
      { name: "Sale", href: "/", },
      { name: "Gift Cards", href: "/", },
    ],
  },
  {
    name: "Tech & Materials",
    items: [
      { name: "Ultra Light Outerwear", href: "/", },
      { name: "Thermal Layers", href: "/", },
      { name: "Quick-Dry", href: "/", },
      { name: "Stretch Fabric", href: "/", },
    ],
  },
  {
    name: "Services",
    items: [
      { name: "Store Locator", href: "/", },
      { name: "Alterations & Tailoring", href: "/", },
      { name: "Click & Collect", href: "/", },
      { name: "Student Discount", href: "/", },
    ],
  },
  {
    name: "Support",
    items: [
      { name: "Size Guide", href: "/", },
      { name: "Accessibility", href: "/", },
      { name: "Warranty", href: "/", },
      { name: "Care Instructions", href: "/", },
    ],
  },
]
