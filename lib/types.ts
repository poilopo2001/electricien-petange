export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  priceRange?: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  metric?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  type: string;
  urgency: string;
  surface?: string;
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  message?: string;
  consent: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}
