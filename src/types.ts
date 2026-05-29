export interface Service {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  score: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  characteristic: string;
  fragmented: {
    text: string;
    isPositive: boolean;
  };
  aab: {
    text: string;
    isPositive: boolean;
  };
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
