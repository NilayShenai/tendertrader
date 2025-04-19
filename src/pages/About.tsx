
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Globe, ShieldCheck, BarChart3, Search } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="bg-business-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About TenderTrader</h1>
              <p className="text-xl mb-8 text-business-100">
                The leading B2B platform connecting buyers and suppliers in the global raw materials market.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  TenderTrader was founded with a simple mission: to create a transparent, efficient, and reliable marketplace for raw materials procurement.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  We believe that by connecting buyers directly with verified suppliers, implementing rigorous quality controls, and leveraging technology, we can revolutionize how businesses source raw materials.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform helps businesses of all sizes reduce procurement costs, minimize supply chain risks, and find reliable partners for long-term growth.
                </p>
              </div>
              
              <div className="bg-muted/20 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Why Choose TenderTrader?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 rounded-full p-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quality Assurance</h4>
                      <p className="text-muted-foreground">All suppliers and materials undergo thorough verification and quality audits.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 rounded-full p-2">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Global Reach</h4>
                      <p className="text-muted-foreground">Connect with suppliers and buyers from around the world in one platform.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 rounded-full p-2">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Secure Transactions</h4>
                      <p className="text-muted-foreground">Protected payment systems and contractual safeguards for all parties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-accent/10 rounded-full p-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Data-Driven Insights</h4>
                      <p className="text-muted-foreground">Market analytics and pricing trends to inform better procurement decisions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Platform Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                TenderTrader combines powerful tools and features to create the most effective raw materials procurement platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-business-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-business-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tender Marketplace</h3>
                  <p className="text-muted-foreground">
                    Post detailed tender requests specifying exact material requirements, quantities, and quality standards. Receive competitive bids from verified suppliers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="bg-business-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-business-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Audits</h3>
                  <p className="text-muted-foreground">
                    Professional third-party quality audits ensure materials meet specified standards before shipment, with detailed reports and certifications.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="bg-business-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-business-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Supplier Verification</h3>
                  <p className="text-muted-foreground">
                    All suppliers undergo thorough verification of business credentials, production capabilities, and quality management systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Team Section - Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the experienced professionals leading TenderTrader's mission to transform raw materials procurement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="bg-muted w-32 h-32 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">Executive Name</h3>
                  <p className="text-muted-foreground mb-3">Position/Title</p>
                  <p className="text-sm text-muted-foreground">
                    Brief bio with experience in industry, previous roles, and expertise.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-business-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Procurement Process?</h2>
              <p className="text-business-100 mb-8">
                Join thousands of businesses that trust TenderTrader for their raw material needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buyer">
                  <Button size="lg" className="bg-accent hover:bg-accent-600 text-white w-full sm:w-auto">
                    Start as Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-business-700 w-full sm:w-auto">
                    Start as Supplier
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
