
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
  ChevronRight, 
  Check, 
  AlertCircle, 
  Clock, 
  FileText, 
  Camera, 
  Building, 
  Package, 
  ListChecks,
  CreditCard,
  FileCheck,
  Calendar
} from 'lucide-react';
import { products, categories } from '@/data/mockData';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
            <Link to="/suppliers">
              <Button>Browse Suppliers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const category = categories.find(c => c.id === product.categoryId);
  const subcategory = category?.subcategories.find(s => s.id === product.subcategoryId);
  const latestAudit = product.auditReports && product.auditReports.length > 0 
    ? product.auditReports[0] 
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
            {category && (
              <>
                <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
                <Link to={`/categories/${category.slug}`} className="text-muted-foreground hover:text-foreground">
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground">{product.name}</span>
          </div>
          
          {/* Product Header */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  {category && (
                    <Badge variant="outline" className="bg-muted/50">
                      {category.name}
                    </Badge>
                  )}
                  {subcategory && (
                    <Badge variant="outline" className="bg-muted/50">
                      {subcategory.name}
                    </Badge>
                  )}
                  {product.certifications && product.certifications.map(cert => (
                    <Badge key={cert} variant="outline" className="bg-accent/10 text-accent-600">
                      {cert}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center mb-6">
                  <Link to={`/suppliers/${product.sellerId}`} className="text-primary hover:underline flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    {product.sellerName}
                  </Link>
                </div>
                
                {latestAudit && (
                  <div className="bg-muted/30 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <FileCheck className="h-5 w-5 mr-2 text-accent" />
                      <h3 className="font-medium">Quality Audit Status:</h3>
                      <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                        latestAudit.status === 'passed' 
                          ? 'bg-green-100 text-green-800' 
                          : latestAudit.status === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {latestAudit.status === 'passed' 
                          ? 'Passed' 
                          : latestAudit.status === 'failed'
                            ? 'Failed'
                            : 'Conditional Pass'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {latestAudit.summary}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Pricing & Order</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-4">
                      ${product.price?.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">per {product.unit}</span>
                    </div>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Min. Order:</span>
                        <span>{product.minOrder} {product.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max. Order:</span>
                        <span>{product.maxOrder} {product.unit}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Availability:</span>
                        <span className="text-green-600 flex items-center">
                          <Check className="h-4 w-4 mr-1" /> In Stock
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Request Quote
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Package className="h-4 w-4 mr-2" />
                        Sample Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="audit">Quality Audit</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="bg-card rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Product Overview</h3>
                  <p className="mb-4">{product.description}</p>
                  
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
                    {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                      <li key={key}>{key}: {String(value)}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications?.map(cert => (
                      <Badge key={cert} variant="outline" className="bg-accent/10 text-accent-600">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.images?.[0] || '/placeholder.svg'} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {product.images?.map((img, idx) => (
                      <div key={idx} className="aspect-square bg-muted rounded-md overflow-hidden">
                        <img 
                          src={img} 
                          alt={`Product image ${idx + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
              
              <div className="bg-muted/20 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-muted/30'}>
                        <td className="py-3 px-4 font-medium border-b border-border">{key}</td>
                        <td className="py-3 px-4 text-muted-foreground border-b border-border">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="audit" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-6">Quality Audit Reports</h3>
              
              {product.auditReports && product.auditReports.length > 0 ? (
                <div className="space-y-6">
                  {product.auditReports.map(audit => (
                    <div key={audit.id} className="border border-border rounded-lg overflow-hidden">
                      <div className="p-4 bg-muted/10">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Audit Report #{audit.id}</h4>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            audit.status === 'passed' 
                              ? 'bg-green-100 text-green-800' 
                              : audit.status === 'failed'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {audit.status === 'passed' 
                              ? 'Passed' 
                              : audit.status === 'failed'
                                ? 'Failed'
                                : 'Conditional Pass'}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            <span>Inspector: {audit.inspectorName}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Date: {new Date(audit.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border-t border-border">
                        <h5 className="font-medium mb-2">Summary</h5>
                        <p className="text-muted-foreground mb-4">{audit.summary}</p>
                        
                        <h5 className="font-medium mb-2">Detailed Findings</h5>
                        <p className="text-muted-foreground mb-4">{audit.details}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 flex items-center">
                              <FileText className="h-4 w-4 mr-1" />
                              Certificates
                            </h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {audit.certificates.map((cert, idx) => (
                                <li key={idx}>{cert}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {audit.images && audit.images.length > 0 && (
                            <div>
                              <h5 className="font-medium mb-2 flex items-center">
                                <Camera className="h-4 w-4 mr-1" />
                                Inspection Images
                              </h5>
                              <div className="grid grid-cols-3 gap-2">
                                {audit.images.map((img, idx) => (
                                  <div key={idx} className="aspect-square bg-muted rounded-md overflow-hidden">
                                    <img 
                                      src={img} 
                                      alt={`Inspection image ${idx + 1}`} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No audit reports available</h3>
                  <p className="text-muted-foreground">
                    This product does not have any quality audit reports yet.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="documents" className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Product Documents</h3>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Product Specification Sheet</h4>
                        <p className="text-sm text-muted-foreground">PDF, 2.4 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Material Safety Data Sheet</h4>
                        <p className="text-sm text-muted-foreground">PDF, 1.8 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Quality Certification</h4>
                        <p className="text-sm text-muted-foreground">PDF, 1.1 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Usage Guidelines</h4>
                        <p className="text-sm text-muted-foreground">PDF, 3.2 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
