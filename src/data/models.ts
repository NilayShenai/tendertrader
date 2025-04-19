
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: Subcategory[];
  image?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

export interface Tender {
  id: string;
  title: string;
  description: string;
  buyerId: string;
  buyerName: string;
  buyerLocation: string;
  categoryId: string;
  subcategoryId: string;
  quantity: string;
  unit: string;
  budget?: string;
  currency?: string;
  deadline: string;
  createdAt: string;
  status: 'active' | 'closed' | 'awarded' | 'cancelled';
  attachments?: string[];
  specifications?: Record<string, string>;
  hasQualityRequirements: boolean;
  requiresAudit: boolean;
  bidsCount: number;
}

export interface Bid {
  id: string;
  tenderId: string;
  sellerId: string;
  sellerName: string;
  price: number;
  currency: string;
  deliveryTime: string;
  description: string;
  status: 'pending' | 'accepted' | 'rejected' | 'awarded';
  createdAt: string;
  documents?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  companyName: string;
  companyId: string;
  location: string;
  verified: boolean;
  joinedAt: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  logo?: string;
  location: string;
  establishedYear: number;
  employeesCount: string;
  website?: string;
  categories: string[];
  verificationStatus: 'pending' | 'verified' | 'rejected';
  documents?: string[];
  rating?: number;
  reviewsCount?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  subcategoryId: string;
  sellerId: string;
  sellerName: string;
  specifications: Record<string, string>;
  price?: number;
  minOrder?: number;
  maxOrder?: number;
  unit: string;
  images?: string[];
  certifications?: string[];
  auditReports?: AuditReport[];
}

export interface AuditReport {
  id: string;
  productId: string;
  inspectorId: string;
  inspectorName: string;
  date: string;
  status: 'passed' | 'failed' | 'conditionalPass';
  summary: string;
  details: string;
  certificates: string[];
  images?: string[];
}
