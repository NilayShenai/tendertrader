
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tenders, categories } from '@/data/mockData';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Tag, 
  FileText, 
  Users, 
  CheckCircle, 
  AlertCircle,
  BarChart,
  Download
} from 'lucide-react';

const TenderDetails = () => {
  const { tenderId } = useParams<{ tenderId: string }>();
  
  // Find the tender from mock data
  const tender = tenders.find(t => t.id === tenderId) || tenders[0]; // Fallback to first tender if not found
  const category = categories.find(c => c.id === tender.categoryId);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{tender.title}</h1>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {category?.name}
                  </Badge>
                  {tender.requiresAudit && (
                    <Badge variant="outline" className="bg-business-100 text-business-700 border-business-200">
                      Audit Required
                    </Badge>
                  )}
                  <Badge 
                    variant="outline" 
                    className={
                      tender.status === 'active' ? "bg-green-50 text-green-700 border-green-200" :
                      tender.status === 'closed' ? "bg-red-50 text-red-700 border-red-200" :
                      "bg-amber-50 text-amber-700 border-amber-200"
                    }
                  >
                    {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Posted on {new Date(tender.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Deadline: {new Date(tender.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{tender.buyerLocation}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </Button>
                <Button className="gap-2 shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  Submit Bid
                </Button>
              </div>
            </div>
            
            <Card className="overflow-hidden bg-gradient-to-br from-card to-background/95 shadow-md">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start px-6 pt-4 bg-transparent">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="bids">Bids & Inquiries</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-4">Tender Description</h3>
                      <p className="mb-6 text-muted-foreground">
                        {tender.description}
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                        <li>Quantity: {tender.quantity} {tender.unit}</li>
                        <li>Quality: Industrial grade, conforming to ISO standards</li>
                        <li>Delivery: Expected within 30 days after bid acceptance</li>
                        <li>Payment Terms: Net 60 after delivery and inspection</li>
                        {tender.requiresAudit && (
                          <li>Quality Audit: Required pre-shipment inspection by third party</li>
                        )}
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4">Bid Evaluation Criteria</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            Price (40%)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Competitive pricing including all costs, taxes, and delivery
                          </p>
                        </div>
                        
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Delivery Time (25%)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Ability to meet or exceed delivery timeline requirements
                          </p>
                        </div>
                        
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Quality (25%)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Material quality, certifications, and compliance documentation
                          </p>
                        </div>
                        
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Vendor Profile (10%)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Previous experience, reliability, and customer feedback
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Card className="bg-card shadow-sm mb-6">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-4">Buyer Information</h3>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium">Company</p>
                              <p className="text-muted-foreground">{tender.buyerName}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Location</p>
                              <p className="text-muted-foreground">{tender.buyerLocation}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Member since</p>
                              <p className="text-muted-foreground">January 2020</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t">
                            <Button variant="outline" className="w-full">
                              View Buyer Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-card shadow-sm">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-4">Tender Statistics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">Views</p>
                              <p className="text-muted-foreground">342</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">Bids received</p>
                              <p className="text-muted-foreground">{tender.bidsCount}</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">Days remaining</p>
                              <p className="text-muted-foreground">
                                {Math.max(0, Math.ceil((new Date(tender.deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24)))}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t">
                            <div className="flex items-center mb-2">
                              <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                              <p className="text-sm">Bid activity: Medium</p>
                            </div>
                            <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="specifications" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <p className="mb-6 text-muted-foreground">
                    This tender requires materials that meet the following technical specifications.
                    All suppliers must ensure their bids meet these minimum requirements.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted/70">
                          <th className="py-3 px-4 text-left font-semibold border-b border-border">Specification</th>
                          <th className="py-3 px-4 text-left font-semibold border-b border-border">Requirement</th>
                          <th className="py-3 px-4 text-left font-semibold border-b border-border">Standards</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Material</td>
                          <td className="py-3 px-4 text-muted-foreground">Carbon Steel</td>
                          <td className="py-3 px-4 text-muted-foreground">ASTM A36</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="py-3 px-4 font-medium">Dimensions</td>
                          <td className="py-3 px-4 text-muted-foreground">1200mm x 2400mm</td>
                          <td className="py-3 px-4 text-muted-foreground">Tolerance: ±2mm</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Thickness</td>
                          <td className="py-3 px-4 text-muted-foreground">3mm</td>
                          <td className="py-3 px-4 text-muted-foreground">Tolerance: ±0.2mm</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="py-3 px-4 font-medium">Surface Treatment</td>
                          <td className="py-3 px-4 text-muted-foreground">Hot-dip galvanized</td>
                          <td className="py-3 px-4 text-muted-foreground">ISO 1461</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Minimum Yield Strength</td>
                          <td className="py-3 px-4 text-muted-foreground">250 MPa</td>
                          <td className="py-3 px-4 text-muted-foreground">ASTM E8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Tender Documents</h3>
                  <p className="mb-6 text-muted-foreground">
                    The following documents are available for download. These contain detailed information about the tender requirements, 
                    specifications, and submission guidelines.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Tender Specification Document</h4>
                          <p className="text-sm text-muted-foreground">PDF, 2.4 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Technical Requirements</h4>
                          <p className="text-sm text-muted-foreground">PDF, 1.8 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Bid Submission Template</h4>
                          <p className="text-sm text-muted-foreground">XLSX, 520 KB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Terms and Conditions</h4>
                          <p className="text-sm text-muted-foreground">PDF, 890 KB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="bids" className="p-6">
                  <div className="text-center py-16">
                    <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/60" />
                    <h3 className="text-xl font-semibold mb-2">Bid Information</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      You need to be logged in and a verified supplier to view bid information for this tender.
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="outline">Log In</Button>
                      <Button>Register as Supplier</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TenderDetails;
