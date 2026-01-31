export interface Property {
  id: number;
  name: string;
  type: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}
