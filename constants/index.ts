import { Feature, GalleryImage, NavLink, Property, Testimonial } from '@/types';

export const siteConfig = {
  name: 'Emerald Residences',
  tagline: 'Hunian Premium untuk Kehidupan Berkualitas',
  description: 'Temukan hunian impian Anda dengan standar kualitas tertinggi',
  phone: '+62 812-3456-7890',
  email: 'info@emeraldresidences.com',
  address: 'Jl. Emerald Boulevard No. 1, Jakarta Selatan',
  whatsapp: '6281234567890',
};

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Fasilitas', href: '#features' },
  { label: 'Properti', href: '#properties' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Lokasi', href: '#location' },
  { label: 'Kontak', href: '#contact' },
];

export const properties: Property[] = [
  {
    id: 1,
    name: 'Emerald Type A',
    type: 'Rumah 2 Lantai',
    price: 1850000000,
    area: 120,
    bedrooms: 4,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    features: ['Smart Home System', 'Carport 2 Mobil', 'Taman Belakang'],
    isNew: true,
  },
  {
    id: 2,
    name: 'Emerald Type B',
    type: 'Rumah 2 Lantai',
    price: 1450000000,
    area: 90,
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    features: ['Modern Design', 'Carport 1 Mobil', 'Rooftop Area'],
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Emerald Type C',
    type: 'Rumah 1 Lantai',
    price: 950000000,
    area: 70,
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features: ['Compact Living', 'Carport', 'Taman Depan'],
  },
  {
    id: 4,
    name: 'Emerald Premium',
    type: 'Rumah 3 Lantai',
    price: 2850000000,
    area: 180,
    bedrooms: 5,
    bathrooms: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: ['Private Pool', 'Home Theater', 'Elevator Ready'],
    isNew: true,
  },
];

export const features: Feature[] = [
  {
    id: 1,
    icon: 'shield',
    title: 'Keamanan 24 Jam',
    description: 'Sistem keamanan terintegrasi dengan CCTV dan petugas keamanan profesional yang berpatroli sepanjang waktu.',
  },
  {
    id: 2,
    icon: 'trees',
    title: 'Lingkungan Hijau',
    description: 'Lebih dari 40% area dikembangkan sebagai ruang terbuka hijau dengan taman-taman indah.',
  },
  {
    id: 3,
    icon: 'building',
    title: 'Clubhouse Premium',
    description: 'Fasilitas clubhouse eksklusif dengan gym, kolam renang, dan ruang serbaguna.',
  },
  {
    id: 4,
    icon: 'car',
    title: 'Akses Mudah',
    description: 'Lokasi strategis dengan akses langsung ke jalan tol dan transportasi umum.',
  },
  {
    id: 5,
    icon: 'home',
    title: 'Smart Home',
    description: 'Setiap unit dilengkapi dengan sistem smart home untuk kenyamanan maksimal.',
  },
  {
    id: 6,
    icon: 'heart',
    title: 'Fasilitas Kesehatan',
    description: 'Dekat dengan rumah sakit dan klinik kesehatan ternama.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pengusaha',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'Keputusan terbaik yang pernah saya buat! Kualitas bangunan sangat baik dan lingkungannya sangat nyaman untuk keluarga.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'Dokter',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'Lokasi yang strategis dan fasilitas lengkap membuat saya memilih Emerald Residences. Sangat puas dengan investasi ini.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'Manager IT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content: 'Smart home system-nya canggih dan tim after sales-nya sangat responsif. Recommended untuk yang mencari hunian modern!',
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Tampak Depan Rumah', category: 'Eksterior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Ruang Tamu', category: 'Interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Kolam Renang', category: 'Fasilitas' },
  { id: 4, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Tampak Samping', category: 'Eksterior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Dapur Modern', category: 'Interior' },
  { id: 6, src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', alt: 'Taman Cluster', category: 'Fasilitas' },
];
