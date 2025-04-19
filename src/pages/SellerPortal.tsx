
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  FileText, 
  BarChart, 
  Package, 
  Clock, 
  CheckCircle, 
  PlusCircle, 
  Filter,
  Briefcase
} from 'lucide-react';

const SellerPortal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Seller Portal</h1>
            <p className="text-muted-foreground">
              Find tender opportunities, submit bids, and manage your products.
            </p>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="dashboard">
              <TabsList className="mb-6">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="tenders">Browse Tenders</TabsTrigger>
                <TabsTrigger value="products">My Products</TabsTrigger>
                <TabsTrigger value="bids">My Bids</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-primary text-primary-foreground">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">43</CardTitle>
                      <CardDescription className="text-primary-foreground/80">Active Tenders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/tenders" className="text-sm hover:underline inline-flex items-center">
                        Browse tenders <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">12</CardTitle>
                      <CardDescription>My Products</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/products" className="text-sm text-primary hover:underline inline-flex items-center">
                        Manage products <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">8</CardTitle>
                      <CardDescription>Active Bids</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/bids" className="text-sm text-primary hover:underline inline-flex items-center">
                        View bids <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/tenders">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <Search className="h-8 w-8 mb-2" />
                            <span>Find Tenders</span>
                          </Button>
                        </Link>
                        
                        <Link to="/products/add">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <PlusCircle className="h-8 w-8 mb-2" />
                            <span>Add Product</span>
                          </Button>
                        </Link>
                        
                        <Link to="/request-audit">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <CheckCircle className="h-8 w-8 mb-2" />
                            <span>Request Audit</span>
                          </Button>
                        </Link>
                        
                        <Link to="/analytics">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <BarChart className="h-8 w-8 mb-2" />
                            <span>Analytics</span>
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <Briefcase className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">New tender matches your products</p>
                            <p className="text-xs text-muted-foreground">Steel Supply for Construction Project</p>
                            <p className="text-xs text-muted-foreground">Today, 10:24 AM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Bid accepted</p>
                            <p className="text-xs text-muted-foreground">Tender: Industrial Polymers</p>
                            <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <FileText className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Quality audit completed</p>
                            <p className="text-xs text-muted-foreground">Product: Structural Steel Beams</p>
                            <p className="text-xs text-muted-foreground">Oct 15, 2023</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <Package className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Order received</p>
                            <p className="text-xs text-muted-foreground">Order #ORD-2023-10-123</p>
                            <p className="text-xs text-muted-foreground">Oct 12, 2023</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recommended Tenders For You</CardTitle>
                      <Link to="/tenders">
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center flex-1 mr-4">
                          <div>
                            <p className="font-medium">High Grade Steel Supply for Construction</p>
                            <p className="text-sm text-muted-foreground">
                              Quantity: 2000 tons | Deadline: Dec 30, 2023
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Matches your products
                          </span>
                          <Link to="/tenders/1">
                            <Button size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center flex-1 mr-4">
                          <div>
                            <p className="font-medium">Industrial Grade Polymers for Manufacturing</p>
                            <p className="text-sm text-muted-foreground">
                              Quantity: 50,000 kg | Deadline: Nov 25, 2023
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                            95% match
                          </span>
                          <Link to="/tenders/2">
                            <Button size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center flex-1 mr-4">
                          <div>
                            <p className="font-medium">Organic Wheat Supply for Food Processing</p>
                            <p className="text-sm text-muted-foreground">
                              Quantity: 1000 tons | Deadline: Dec 15, 2023
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                            82% match
                          </span>
                          <Link to="/tenders/3">
                            <Button size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tenders">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Browse Tenders</CardTitle>
                      <CardDescription>Find tender opportunities matching your products</CardDescription>
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to view and bid on tenders
                      </p>
                      <Link to="/sign-in">
                        <Button>Sign In</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="products">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>My Products</CardTitle>
                      <CardDescription>Manage your product catalog</CardDescription>
                    </div>
                    <Link to="/products/add">
                      <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to manage your products
                      </p>
                      <Link to="/sign-in">
                        <Button>Sign In</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="bids">
                <Card>
                  <CardHeader>
                    <CardTitle>My Bids</CardTitle>
                    <CardDescription>Track the status of your bids on tenders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to view your bids
                      </p>
                      <Link to="/sign-in">
                        <Button>Sign In</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <Card className="bg-business-800 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to grow your business?</h3>
                  <p className="text-business-100 mb-4 md:mb-0">
                    Create an account to access tender opportunities and showcase your products.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-accent hover:bg-accent-600 text-white">
                    Create Account
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-business-700">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Add missing ChevronRight icon
const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default SellerPortal;
