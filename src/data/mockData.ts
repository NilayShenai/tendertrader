
import { Category, Tender, Company, Product, AuditReport } from './models';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Metals & Mining',
    slug: 'metals',
    description: 'Raw metals, ores, and processed metal products',
    image: '/placeholder.svg',
    subcategories: [
      { id: '101', name: 'Steel Products', slug: 'steel', categoryId: '1' },
      { id: '102', name: 'Aluminum Products', slug: 'aluminum', categoryId: '1' },
      { id: '103', name: 'Copper Materials', slug: 'copper', categoryId: '1' },
      { id: '104', name: 'Iron Ore', slug: 'iron-ore', categoryId: '1' },
      { id: '105', name: 'Precious Metals', slug: 'precious-metals', categoryId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Chemicals',
    slug: 'chemicals',
    description: 'Industrial chemicals, solvents, and chemical compounds',
    image: '/placeholder.svg',
    subcategories: [
      { id: '201', name: 'Industrial Solvents', slug: 'solvents', categoryId: '2' },
      { id: '202', name: 'Polymers & Plastics', slug: 'polymers', categoryId: '2' },
      { id: '203', name: 'Petrochemicals', slug: 'petrochemicals', categoryId: '2' },
      { id: '204', name: 'Specialty Chemicals', slug: 'specialty', categoryId: '2' },
      { id: '205', name: 'Paints & Coatings', slug: 'paints', categoryId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Agricultural Products',
    slug: 'agriculture',
    description: 'Grains, produce, and other agricultural commodities',
    image: '/placeholder.svg',
    subcategories: [
      { id: '301', name: 'Grains & Cereals', slug: 'grains', categoryId: '3' },
      { id: '302', name: 'Oilseeds', slug: 'oilseeds', categoryId: '3' },
      { id: '303', name: 'Fruits & Vegetables', slug: 'fruits', categoryId: '3' },
      { id: '304', name: 'Animal Feed', slug: 'feed', categoryId: '3' },
      { id: '305', name: 'Spices & Herbs', slug: 'spices', categoryId: '3' },
    ]
  },
  {
    id: '4',
    name: 'Energy Resources',
    slug: 'energy',
    description: 'Coal, petroleum products, and other energy resources',
    image: '/placeholder.svg',
    subcategories: [
      { id: '401', name: 'Coal', slug: 'coal', categoryId: '4' },
      { id: '402', name: 'Petroleum Products', slug: 'petroleum', categoryId: '4' },
      { id: '403', name: 'Natural Gas', slug: 'natural-gas', categoryId: '4' },
      { id: '404', name: 'Biofuels', slug: 'biofuels', categoryId: '4' },
      { id: '405', name: 'Energy Minerals', slug: 'energy-minerals', categoryId: '4' },
    ]
  },
  {
    id: '5',
    name: 'Textiles & Fibers',
    slug: 'textiles',
    description: 'Raw textiles, fabrics, and fiber materials',
    image: '/placeholder.svg',
    subcategories: [
      { id: '501', name: 'Cotton', slug: 'cotton', categoryId: '5' },
      { id: '502', name: 'Synthetic Fibers', slug: 'synthetic', categoryId: '5' },
      { id: '503', name: 'Wool', slug: 'wool', categoryId: '5' },
      { id: '504', name: 'Silk', slug: 'silk', categoryId: '5' },
      { id: '505', name: 'Yarn & Thread', slug: 'yarn', categoryId: '5' },
    ]
  },
];

export const tenders: Tender[] = [
  {
    id: '1',
    title: 'High Grade Steel Supply for Construction Project',
    description: 'We are looking for suppliers of high-grade structural steel for a large commercial construction project. The steel should meet ASTM A572 Grade 50 standards.',
    buyerId: 'b1',
    buyerName: 'MetroBuild Construction',
    buyerLocation: 'Chicago, IL, USA',
    categoryId: '1',
    subcategoryId: '101',
    quantity: '2000',
    unit: 'tons',
    budget: '1500000',
    currency: 'USD',
    deadline: '2023-12-30',
    createdAt: '2023-10-15',
    status: 'active',
    hasQualityRequirements: true,
    requiresAudit: true,
    bidsCount: 7
  },
  {
    id: '2',
    title: 'Industrial Grade Polymers for Manufacturing',
    description: 'Seeking suppliers for industrial grade polymers to be used in automotive parts manufacturing. Material should be heat resistant up to 120°C.',
    buyerId: 'b2',
    buyerName: 'AutoParts Global',
    buyerLocation: 'Detroit, MI, USA',
    categoryId: '2',
    subcategoryId: '202',
    quantity: '50000',
    unit: 'kg',
    budget: '750000',
    currency: 'USD',
    deadline: '2023-11-25',
    createdAt: '2023-10-01',
    status: 'active',
    hasQualityRequirements: true,
    requiresAudit: true,
    bidsCount: 12
  },
  {
    id: '3',
    title: 'Organic Wheat Supply for Food Processing',
    description: 'Looking for certified organic wheat suppliers for our food processing plant. Must include certification documentation and pass quality control inspection.',
    buyerId: 'b3',
    buyerName: 'NaturalFoods Inc.',
    buyerLocation: 'Portland, OR, USA',
    categoryId: '3',
    subcategoryId: '301',
    quantity: '1000',
    unit: 'tons',
    budget: '600000',
    currency: 'USD',
    deadline: '2023-12-15',
    createdAt: '2023-10-10',
    status: 'active',
    hasQualityRequirements: true,
    requiresAudit: true,
    bidsCount: 5
  },
  {
    id: '4',
    title: 'Premium Coal Supply for Energy Production',
    description: 'Seeking high-caloric-value coal for our energy production facility. Coal should have low ash content and high thermal efficiency.',
    buyerId: 'b4',
    buyerName: 'PowerGen Utilities',
    buyerLocation: 'Pittsburgh, PA, USA',
    categoryId: '4',
    subcategoryId: '401',
    quantity: '10000',
    unit: 'tons',
    budget: '900000',
    currency: 'USD',
    deadline: '2023-11-30',
    createdAt: '2023-09-25',
    status: 'active',
    hasQualityRequirements: true,
    requiresAudit: false,
    bidsCount: 9
  },
  {
    id: '5',
    title: 'Cotton Fabric for Clothing Manufacturing',
    description: 'Need high-quality cotton fabric for premium clothing manufacturing. Looking for long-staple cotton with certification of origin.',
    buyerId: 'b5',
    buyerName: 'Fashion Forward Apparel',
    buyerLocation: 'New York, NY, USA',
    categoryId: '5',
    subcategoryId: '501',
    quantity: '100000',
    unit: 'yards',
    budget: '450000',
    currency: 'USD',
    deadline: '2023-12-10',
    createdAt: '2023-10-05',
    status: 'active',
    hasQualityRequirements: true,
    requiresAudit: true,
    bidsCount: 14
  }
];

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'SteelWorks International',
    description: 'Global supplier of high-quality steel products for construction and manufacturing industries.',
    logo: '/placeholder.svg',
    location: 'Pittsburgh, PA, USA',
    establishedYear: 1985,
    employeesCount: '1000-5000',
    website: 'https://steelworks.example.com',
    categories: ['1'],
    verificationStatus: 'verified',
    rating: 4.8,
    reviewsCount: 156
  },
  {
    id: 'c2',
    name: 'ChemSolutions Ltd.',
    description: 'Leading manufacturer and supplier of industrial chemicals and polymers.',
    logo: '/placeholder.svg',
    location: 'Houston, TX, USA',
    establishedYear: 1992,
    employeesCount: '500-1000',
    website: 'https://chemsolutions.example.com',
    categories: ['2'],
    verificationStatus: 'verified',
    rating: 4.6,
    reviewsCount: 124
  },
  {
    id: 'c3',
    name: 'Harvest Global',
    description: 'International trader of agricultural products with focus on sustainable farming practices.',
    logo: '/placeholder.svg',
    location: 'Minneapolis, MN, USA',
    establishedYear: 2001,
    employeesCount: '100-500',
    website: 'https://harvestglobal.example.com',
    categories: ['3'],
    verificationStatus: 'verified',
    rating: 4.7,
    reviewsCount: 98
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Structural Steel Beams - Grade 50',
    description: 'High-strength structural steel beams suitable for construction projects. Meets ASTM A572 Grade 50 standards.',
    categoryId: '1',
    subcategoryId: '101',
    sellerId: 'c1',
    sellerName: 'SteelWorks International',
    specifications: {
      'Material': 'Steel A572',
      'Grade': '50',
      'Yield Strength': '50 ksi (345 MPa)',
      'Tensile Strength': '65 ksi (450 MPa)',
      'Dimensions': 'Various',
      'Finish': 'Hot-rolled'
    },
    price: 950,
    minOrder: 20,
    maxOrder: 5000,
    unit: 'tons',
    images: ['/placeholder.svg'],
    certifications: ['ISO 9001', 'ASTM Compliant'],
    auditReports: [
      {
        id: 'a1',
        productId: 'p1',
        inspectorId: 'i1',
        inspectorName: 'Quality Assurance International',
        date: '2023-09-15',
        status: 'passed',
        summary: 'Product meets all quality standards and specifications.',
        details: 'Detailed inspection conducted on batch #87652. Random samples tested for tensile strength, yield strength, and chemical composition. All tests passed within acceptable parameters.',
        certificates: ['Test Certificate #QA-87652', 'Mill Certificate #MC-34521'],
        images: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'p2',
    name: 'Industrial Polymer PP-H5000',
    description: 'High-grade polypropylene for industrial applications requiring heat resistance and chemical stability.',
    categoryId: '2',
    subcategoryId: '202',
    sellerId: 'c2',
    sellerName: 'ChemSolutions Ltd.',
    specifications: {
      'Material': 'Polypropylene',
      'Grade': 'H5000',
      'Melt Flow Index': '5.0 g/10min',
      'Density': '0.905 g/cm³',
      'Heat Resistance': 'Up to 130°C',
      'Form': 'Pellets'
    },
    price: 3.5,
    minOrder: 1000,
    maxOrder: 100000,
    unit: 'kg',
    images: ['/placeholder.svg'],
    certifications: ['ISO 9001', 'ISO 14001', 'REACH Compliant'],
    auditReports: [
      {
        id: 'a2',
        productId: 'p2',
        inspectorId: 'i2',
        inspectorName: 'ChemSpec Labs',
        date: '2023-08-20',
        status: 'passed',
        summary: 'Product meets all quality and safety standards.',
        details: 'Full laboratory analysis conducted on batch #P5629. Tests included melt flow index, density measurement, thermal stability, and chemical composition analysis. All parameters within specification limits.',
        certificates: ['Lab Report #CSL-5629', 'Material Safety Data Sheet'],
        images: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'p3',
    name: 'Organic Wheat - Premium Grade',
    description: 'Certified organic wheat grown without synthetic pesticides or fertilizers. Ideal for food production.',
    categoryId: '3',
    subcategoryId: '301',
    sellerId: 'c3',
    sellerName: 'Harvest Global',
    specifications: {
      'Type': 'Hard Red Winter Wheat',
      'Certification': 'USDA Organic',
      'Protein Content': '12-14%',
      'Moisture': '<12%',
      'Purity': '>99%',
      'Origin': 'USA'
    },
    price: 420,
    minOrder: 10,
    maxOrder: 5000,
    unit: 'tons',
    images: ['/placeholder.svg'],
    certifications: ['USDA Organic', 'Non-GMO Project Verified'],
    auditReports: [
      {
        id: 'a3',
        productId: 'p3',
        inspectorId: 'i3',
        inspectorName: 'Organic Certification Services',
        date: '2023-07-10',
        status: 'passed',
        summary: 'Product meets all organic certification requirements.',
        details: 'Field inspection and product testing confirmed compliance with USDA Organic standards. Samples tested for pesticide residues, heavy metals, and nutritional content. Field history and farming practices reviewed.',
        certificates: ['USDA Organic Certificate #OC-78912', 'Lab Test Report #LT-3452'],
        images: ['/placeholder.svg']
      }
    ]
  }
];

export const auditReports: AuditReport[] = [
  ...products[0].auditReports || [],
  ...products[1].auditReports || [],
  ...products[2].auditReports || []
];
