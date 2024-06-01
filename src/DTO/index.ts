export interface Product {
  _id: string
  title: { en: string; fa: string; ar: string }
  src: string
  link: string
  description: { en: string; fa: string; ar: string }
  keywords: { en: string[]; fa: string[]; ar: string[] }
}

export interface Category {
  _id: string
  name: { en: string; fa: string; ar: string }
  src: string
  keywords: { en: string[]; fa: string[]; ar: string[] }
}
export interface Carousel {
  _id: string
  src: string
  alt: { en: string; fa: string; ar: string }
  keywords: { en: string[]; fa: string[]; ar: string[] }
}
export interface Form {
  _id: string
  name: string
  contact: string
  description: string
  date: Date
}
