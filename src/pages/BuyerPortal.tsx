
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, FileText, BarChart, Users, Search, Clock, CheckCircle, Package } from 'lucide-react';

const BuyerPortal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Buyer Portal</h1>
            <p className="text-muted-foreground">
              Manage your tenders, find suppliers, and streamline your procurement process.
            </p>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="dashboard">
              <TabsList className="mb-6">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="tenders">My Tenders</TabsTrigger>
                <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-primary text-primary-foreground">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">5</CardTitle>
                      <CardDescription className="text-primary-foreground/80">Active Tenders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/tenders" className="text-sm hover:underline inline-flex items-center">
                        View all <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">28</CardTitle>
                      <CardDescription>Supplier Bids</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/bids" className="text-sm text-primary hover:underline inline-flex items-center">
                        Review bids <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">12</CardTitle>
                      <CardDescription>Quality Audits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/audits" className="text-sm text-primary hover:underline inline-flex items-center">
                        View reports <ChevronRight className="h-3 w-3 ml-1" />
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
                        <Link to="/post-tender">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <PlusCircle className="h-8 w-8 mb-2" />
                            <span>Post New Tender</span>
                          </Button>
                        </Link>
                        
                        <Link to="/suppliers">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <Search className="h-8 w-8 mb-2" />
                            <span>Find Suppliers</span>
                          </Button>
                        </Link>
                        
                        <Link to="/audits/request">
                          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center justify-center">
                            <FileText className="h-8 w-8 mb-2" />
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
                            <PlusCircle className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">New tender posted</p>
                            <p className="text-xs text-muted-foreground">Steel Supply for Construction Project</p>
                            <p className="text-xs text-muted-foreground">Today, 10:24 AM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <Users className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">New bid received</p>
                            <p className="text-xs text-muted-foreground">From: SteelWorks International</p>
                            <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Audit completed</p>
                            <p className="text-xs text-muted-foreground">Product: Industrial Polymers</p>
                            <p className="text-xs text-muted-foreground">Oct 15, 2023</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-0.5 bg-muted rounded-full p-1 mr-3">
                            <Package className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Order confirmed</p>
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
                    <CardTitle>Upcoming Tender Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">High Grade Steel Supply</p>
                            <p className="text-sm text-muted-foreground">5 bids received</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-red-600">Due in 3 days</p>
                          <p className="text-xs text-muted-foreground">Dec 30, 2023</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Organic Wheat Supply</p>
                            <p className="text-sm text-muted-foreground">3 bids received</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-amber-600">Due in 15 days</p>
                          <p className="text-xs text-muted-foreground">Dec 15, 2023</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Cotton Fabric for Manufacturing</p>
                            <p className="text-sm text-muted-foreground">8 bids received</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-amber-600">Due in 10 days</p>
                          <p className="text-xs text-muted-foreground">Dec 10, 2023</p>
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
                      <CardTitle>My Tenders</CardTitle>
                      <CardDescription>Manage your active and past tender requests</CardDescription>
                    </div>
                    <Link to="/post-tender">
                      <Button>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Post New Tender
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to view your tenders
                      </p>
                      <Link to="/sign-in">
                        <Button>Sign In</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="suppliers">
                <Card>
                  <CardHeader>
                    <CardTitle>Verified Suppliers</CardTitle>
                    <CardDescription>Browse and connect with verified suppliers in our network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to view verified suppliers
                      </p>
                      <Link to="/sign-in">
                        <Button>Sign In</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics & Reports</CardTitle>
                    <CardDescription>View detailed reports on your procurement activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Please sign in to access your reports
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
                  <h3 className="text-xl font-bold mb-2">Ready to streamline your procurement?</h3>
                  <p className="text-business-100 mb-4 md:mb-0">
                    Create an account to post tenders and connect with verified suppliers.
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

export default BuyerPortal;
