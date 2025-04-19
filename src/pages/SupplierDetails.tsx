
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Building, 
  Calendar, 
  Globe, 
  Phone, 
  Mail,
  Star,
  Package,
  FileCheck,
  CheckCircle,
  User,
  MessageSquare,
  FileText
} from 'lucide-react';

const SupplierDetails = () => {
  const { supplierId } = useParams<{ supplierId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock supplier data - this would normally come from an API
  const supplier = {
    id: supplierId,
    name: 'Global Metal Solutions',
    description: 'Leading supplier of industrial-grade metals and alloys with over 20 years of experience serving manufacturing industries worldwide. Specializing in steel, aluminum, copper, and specialty alloys for automotive, aerospace, construction, and general manufacturing applications.',
    logo: '/placeholder.svg',
    location: 'Frankfurt, Germany',
    address: 'Industriestrasse 45, 60313 Frankfurt am Main, Germany',
    phone: '+49 69 1234567',
    email: 'contact@globalmetalsolutions.com',
    website: 'www.globalmetalsolutions.com',
    establishedYear: 2001,
    employeesCount: '50-200',
    categories: ['Metals & Alloys', 'Industrial Supplies', 'Raw Materials', 'Construction Materials'],
    verificationStatus: 'verified',
    documents: ['Business License', 'ISO 9001 Certificate', 'ISO 14001 Certificate', 'Financial Statement'],
    rating: 4.8,
    reviewsCount: 187,
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001', 'Bureau Veritas'],
    products: [
      {
        id: 'prod1',
        name: 'Carbon Steel Sheets',
        image: '/placeholder.svg',
        category: 'Metals & Alloys'
      },
      {
        id: 'prod2',
        name: 'Aluminum Extrusions',
        image: '/placeholder.svg',
        category: 'Metals & Alloys'
      },
      {
        id: 'prod3',
        name: 'Stainless Steel Pipes',
        image: '/placeholder.svg',
        category: 'Industrial Supplies'
      },
      {
        id: 'prod4',
        name: 'Copper Wires',
        image: '/placeholder.svg',
        category: 'Raw Materials'
      },
      {
        id: 'prod5',
        name: 'Metal Fasteners',
        image: '/placeholder.svg',
        category: 'Construction Materials'
      },
      {
        id: 'prod6',
        name: 'Alloy Rods',
        image: '/placeholder.svg',
        category: 'Metals & Alloys'
      }
    ],
    reviews: [
      {
        id: 'rev1',
        user: 'Manufacturing Corp',
        date: '2023-08-15',
        rating: 5,
        comment: 'Excellent quality materials and always on time with deliveries. Their steel sheets meet all our specifications consistently.'
      },
      {
        id: 'rev2',
        user: 'BuildTech Solutions',
        date: '2023-07-22',
        rating: 4,
        comment: 'Good products and responsive customer service. Occasionally have some delays with larger orders but quality is never compromised.'
      },
      {
        id: 'rev3',
        user: 'Precision Engineering',
        date: '2023-06-10',
        rating: 5,
        comment: 'Their aluminum extrusions are perfect for our aerospace components. Material consistency is outstanding.'
      }
    ],
    capabilities: [
      'Custom alloy formulations to meet specific requirements',
      'Just-in-time delivery for manufacturing clients',
      'Material certification and testing services',
      'Cutting and pre-processing of metal products',
      'Global shipping and logistics management',
      'Technical consultation on material selection',
      'Warehousing and inventory management solutions'
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/suppliers" className="text-muted-foreground hover:text-foreground">Suppliers</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{supplier.name}</span>
          </div>
          
          {/* Supplier Header */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-muted rounded-md overflow-hidden p-4">
                    <img 
                      src={supplier.logo} 
                      alt={supplier.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {supplier.verificationStatus === 'verified' && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified Supplier
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:w-2/4 md:px-6">
                <h1 className="text-2xl font-bold mb-2">{supplier.name}</h1>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Est. {supplier.establishedYear}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{supplier.employeesCount} employees</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="bg-amber-50 text-amber-800 px-2 py-1 rounded flex items-center">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                    <span className="font-medium">{supplier.rating}</span>
                    <span className="text-muted-foreground ml-1 text-sm">({supplier.reviewsCount} reviews)</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{supplier.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {supplier.categories.map((category, idx) => (
                    <Badge key={idx} variant="outline">{category}</Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {supplier.certifications.map((cert, idx) => (
                    <Badge key={idx} variant="outline" className="bg-accent/10 text-accent-600">
                      <FileCheck className="h-3 w-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/4 mt-6 md:mt-0">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
                        <span className="text-sm">{supplier.address}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{supplier.phone}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{supplier.email}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a href={`https://${supplier.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {supplier.website}
                        </a>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Supplier
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Package className="h-4 w-4 mr-2" />
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Supplier Details Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-6">
                    Global Metal Solutions has been providing high-quality metal and alloy products to industries worldwide since 2001. 
                    With headquarters in Frankfurt and distribution centers across Europe, we serve clients in automotive, aerospace, 
                    construction, and general manufacturing sectors.
                  </p>
                  
                  <p className="mb-6">
                    Our commitment to quality is reflected in our rigorous quality control processes and international certifications. 
                    We source materials from trusted mills and refineries to ensure consistent quality and properties that meet or 
                    exceed industry standards.
                  </p>
                  
                  <p>
                    With a dedicated team of metallurgists and industry experts, we provide not just materials but comprehensive 
                    solutions including technical consultation, custom processing, and logistics management to streamline our 
                    clients' supply chains.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Key Information</h4>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-md">
                      <h5 className="font-medium mb-2">Primary Products</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Carbon and alloy steel products</li>
                        <li>Aluminum extrusions and sheets</li>
                        <li>Stainless steel and specialty alloys</li>
                        <li>Copper and brass products</li>
                        <li>Metal fasteners and components</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md">
                      <h5 className="font-medium mb-2">Key Markets</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Automotive manufacturing</li>
                        <li>Aerospace and defense</li>
                        <li>Construction and infrastructure</li>
                        <li>Energy sector</li>
                        <li>Industrial machinery</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md">
                      <h5 className="font-medium mb-2">Quality Assurance</h5>
                      <p className="text-muted-foreground">
                        Our state-of-the-art testing facilities include spectrometry, mechanical testing, 
                        and metallographic examination to ensure all products meet required specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Products & Materials</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {supplier.products.map(product => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">
                        <Link to={`/products/${product.id}`} className="hover:text-primary">
                          {product.name}
                        </Link>
                      </h4>
                      <Badge variant="outline" className="mb-4">
                        {product.category}
                      </Badge>
                      <Button size="sm" variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="capabilities" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Supplier Capabilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3">Services & Capabilities</h4>
                  <ul className="space-y-4">
                    {supplier.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-600 shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Production Facilities</h4>
                  <div className="bg-muted/30 p-4 rounded-md mb-4">
                    <h5 className="font-medium mb-2">Main Manufacturing Plant</h5>
                    <p className="text-muted-foreground mb-2">
                      Our 15,000 m² facility in Frankfurt includes cutting, shearing, and processing equipment 
                      for metal products, with an annual capacity of 50,000 tons.
                    </p>
                    <p className="text-muted-foreground">
                      All facilities are ISO 9001 and ISO 14001 certified, with strict quality control protocols.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md">
                    <h5 className="font-medium mb-2">Processing Equipment</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>CNC cutting and milling machines</li>
                      <li>Precision shearing and bending equipment</li>
                      <li>Heat treatment furnaces</li>
                      <li>Surface finishing lines</li>
                      <li>Advanced material testing laboratory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="bg-card rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center">
                  <div className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-md flex items-center mr-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500 mr-2" />
                    <span className="text-xl font-semibold">{supplier.rating}</span>
                    <span className="text-muted-foreground ml-1">/ 5</span>
                  </div>
                  <Button>Write a Review</Button>
                </div>
              </div>
              
              <div className="space-y-6">
                {supplier.reviews.map(review => (
                  <div key={review.id} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-muted h-10 w-10 rounded-full flex items-center justify-center mr-3">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium">{review.user}</h4>
                          <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-muted'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="certification" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications & Documentation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3">Quality Certifications</h4>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-md">
                      <div className="flex items-center">
                        <FileCheck className="h-5 w-5 mr-2 text-green-600" />
                        <h5 className="font-medium">ISO 9001:2015</h5>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Quality Management System certification, ensuring consistent product quality 
                        and customer satisfaction. Certified by Bureau Veritas.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md">
                      <div className="flex items-center">
                        <FileCheck className="h-5 w-5 mr-2 text-green-600" />
                        <h5 className="font-medium">ISO 14001:2015</h5>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Environmental Management System certification, demonstrating commitment to 
                        minimizing environmental impact of operations.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md">
                      <div className="flex items-center">
                        <FileCheck className="h-5 w-5 mr-2 text-green-600" />
                        <h5 className="font-medium">OHSAS 18001</h5>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Occupational Health and Safety Management certification, ensuring safe 
                        working conditions throughout all facilities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Business Documentation</h4>
                  <div className="space-y-4">
                    {supplier.documents.map((doc, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                            <h5 className="font-medium">{doc}</h5>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Verification Status</h4>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        <h5 className="font-medium text-green-800">Verified Supplier</h5>
                      </div>
                      <p className="text-sm text-green-700">
                        This supplier has undergone our comprehensive verification process, 
                        including document verification, facility inspection, and background checks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupplierDetails;
