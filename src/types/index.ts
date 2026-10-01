import React from 'react';
import { LucideIcon } from 'lucide-react';

// ==========================================
// 1. CONTENT & FEATURE BLOCK TYPES
// ==========================================

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface FeatureBlockContent {
  title: string;
  badge: string;
  description: string;
  features: FeatureItem[];
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
}

export interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
}

export interface FeatureBlockItemProps {
  number: string;
  title: string;
  description: string;
}

export interface ManifestPhase {
  title: string;
  subtitle: string;
  period: string;
  status: string;
  description: string;
  features: string[];
}

export interface QProductVariant {
  id: string;
  name: string;
  dimension: string;
  weight: string;
  material: string;
  coating: string;
  loadClass: string;
  flowRate: string;
  image: string;
  specs: string[];
}

export interface RebarLiteProduct {
  id: string;
  title: string;
  category: string;
  weight: string;
  yieldStrength: string;
  tensileStrength: string;
  standards: string;
  description: string;
  image: string;
  tags: string[];
}

export interface OfficeCardProps {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  type: string;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export interface FooterHeroPageProps {
  title: string;
  description: string;
  breadcrumb: string;
}

export interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// ==========================================
// 2. MEDIA, VIDEO & 3D TYPES
// ==========================================

export interface VideoItem {
  name: string;
  path: string;
}

export interface HotProductVideosProps {
  title?: string;
  videos?: VideoItem[];
}

export interface RelatedSearchProps {
  query?: string;
  tags?: string[];
}

export interface CategoryProductLinksProps {
  categoryName?: string;
}

export interface ModelViewerProps {
  src: string;
  alt: string;
  poster?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  className?: string;
}

export interface PopularProductVideo {
  id: string;
  title: string;
  tag: string;
  videoSrc: string;
  fallbackImage: string;
  model3dSrc: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface PopularCastingAsset {
  id: string;
  title: string;
  tag: string;
  videoSrc: string;
  fallbackImage: string;
  model3dSrc: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface MediaAsset {
  title: string;
  subtitle: string;
  videoSrc: string;
  posterSrc: string;
  views: string;
  rating: string;
  time: string;
  tags: string[];
  specs: {
    label: string;
    val: string;
  }[];
}

export type MediaType = 'video' | 'image' | '3d';

export interface Story {
  id: string;
  title: string;
  location: string;
  author: string;
  type: MediaType;
  url: string;
  thumbnail: string;
  timestamp: string;
  likes: number;
  comments: number;
}

// ==========================================
// 3. PRODUCT & MATERIAL TYPES
// ==========================================

export interface Category {
  title: string;
  slug: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  specs: string[];
  icon: LucideIcon;
  color: string;
}

export interface CategoryCardProps {
  item: Category;
  index: number;
}

export interface MetalProfile {
  name: string;
  subtitle: string;
  origin: string;
  badge: string;
  status: string;
  image: string;
  description: string;
  specs: {
    composition: string;
    tensileStrength: string;
    hardness: string;
    corrosionResistance: string;
    temperatureRange: string;
    machinability: string;
  };
}

export interface CastingZoneProduct {
  title: string;
  image: string;
  description: string;
  specs: string[];
}

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  summary?: string;
  date: string;
  readTime: string;
  category: string;
  author: string | {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  tag: string;
  specs: string[];
}

export interface ProductItemCardProps {
  title: string;
  image: string;
  description: string;
  specs: string[];
}

export interface ScrollRowProps {
  products: ProductItemCardProps[];
  direction?: 'left' | 'right';
  speed?: number;
}

export interface SeriesCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ProductDetail {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  specs: {
    material: string;
    loadClass: string;
    standards: string;
    coating: string;
  };
}

// ==========================================
// 4. API TYPES
// ==========================================

export interface ApiDocument {
  id: string;
  name: string;
  url: string;
  type: string;
  size?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  images: string[];
  documents?: ApiDocument[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CreateProductRequest {
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  images: string[];
  documents?: ApiDocument[];
}

// ==========================================
// 5. NAVIGATION & FOOTER TYPES
// ==========================================

export type FooterLink = {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterColumn = {
  id: string;
  title?: string;
  sections: FooterSection[];
  links?: FooterLink[];
};

export type fabrication = {
  name: string;
  description: string;
  image: string;
  link: string;
};
