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
export interface Carouselo {
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

export interface Producted {
  _id: string
  title: string
  src: string
  link: string
  description: string
  keywords: string[]
}

export interface Categored {
  _id: string
  name: string
  src: string
  keywords: string[]
}
export interface Carouseled {
  _id: string
  src: string
  alt: string
  keywords: string[]
}
