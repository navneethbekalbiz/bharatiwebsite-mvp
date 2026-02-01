export interface Configuration {
  type: string;
  size: string; // e.g., "785 sqft"
  price: string; // e.g., "Price on Request"
}

export interface SpecificationGroup {
  category: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UserReview {
  name: string;
  role: string;
  rating: number;
  positive?: string;
  negative?: string;
  time: string;
}

export interface ReviewData {
  average: number;
  count: number;
  likes?: string[];
  dislikes?: string[];
  userReviews?: UserReview[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  type: 'Residential' | 'Commercial' | 'Mixed Use';
  priceRange: string;
  image: string;
  gallery: string[];
  description: string;
  tagline?: string;
  specs: {
    beds: number | string;
    baths: number | string;
    sqft: number | string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  // New Fields
  overviewPoints?: string[];
  configurations?: Configuration[];
  locationPoints?: { name: string; distance: string }[];
  specifications?: SpecificationGroup[];
  amenitiesList?: string[];
  faqs?: FaqItem[];
  areaOverview?: string;
  areaHighlights?: string[];
  reviews?: ReviewData;
}

export interface Amenity {
  icon: any; 
  label: string;
  description: string;
}

export type LeadIntent = 'Investment' | 'Self-use';