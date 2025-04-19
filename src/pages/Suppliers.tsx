
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  Clock, 
  Building,
  CheckCircle
} from 'lucide-react';

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock supplier data - this would normally come from an API
  const suppliers = [
    {
      id: 'sup1',
      name: 'Global Metal Solutions',
      description: 'Leading supplier of industrial-grade metals and alloys with over 20 years of experience serving manufacturing industries.',
      logo: '/placeholder.svg',
      location: 'Frankfurt, Germany',
      establishedYear: 2001,
      employeesCount: '50-200',
      categories: ['Metals & Alloys', 'Industrial Supplies'],
      verificationStatus: 'verified',
      rating: 4.8,
      reviewsCount: 187
    },
    {
      id: 'sup2',
      name: 'EcoPolymer Industries',
      description: 'Sustainable polymer and plastic materials manufacturer with focus on recyclable and biodegradable solutions.',
      logo: '/placeholder.svg',
      location: 'Milan, Italy',
      establishedYear: 2008,
      employeesCount: '10-50',
      categories: ['Polymers & Plastics', 'Chemical Materials'],
      verificationStatus: 'verified',
      rating: 4.5,
      reviewsCount: 93
    },
    {
      id: 'sup3',
      name: 'PrecisionWood Exports',
      description: 'Premium timber and wood product supplier specializing in sustainably sourced hardwoods and engineered wood products.',
      logo: '/placeholder.svg',
      location: 'Stockholm, Sweden',
      establishedYear: 2012,
      employeesCount: '10-50',
      categories: ['Wood & Timber', 'Construction Materials'],
      verificationStatus: 'verified',
      rating: 4.7,
      reviewsCount: 124
    },
    {
      id: 'sup4',
      name: 'IndusTech Electronics',
      description: 'Manufacturer and supplier of electronic components, circuit boards, and automation equipment for various industries.',
      logo: '/placeholder.svg',
      location: 'Barcelona, Spain',
      establishedYear: 2005,
      employeesCount: '200-500',
      categories: ['Electronics', 'Electrical Components'],
      verificationStatus: 'pending',
      rating: 4.2,
      reviewsCount: 76
    },
    {
      id: 'sup5',
      name: 'AgriResource Supplies',
      description: 'Agricultural raw materials supplier providing seeds, fertilizers, and related products to farming businesses.',
      logo: '/placeholder.svg',
      location: 'Warsaw, Poland',
      establishedYear: 2010,
      employeesCount: '50-200',
      categories: ['Agricultural Materials', 'Chemicals'],
      verificationStatus: 'verified',
      rating: 4.6,
      reviewsCount: 112
    }
  ];
  
  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Suppliers Directory</h1>
            <p className="text-muted-foreground">
              Browse verified suppliers of raw materials and industrial products
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-9"
                  placeholder="Search suppliers by name, description, or category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button variant="outline" className="flex gap-2 items-center">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              
              <Button>Find Suppliers</Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Metals & Alloys</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Polymers & Plastics</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Wood & Timber</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Electronics</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Chemical Materials</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Textiles & Fabrics</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Agricultural Materials</Badge>
            </div>
          </div>
          
          {/* Suppliers List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map(supplier => (
                <Card key={supplier.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-muted p-6 flex items-center justify-center">
                        <div className="w-32 h-32 relative">
                          <img 
                            src={supplier.logo} 
                            alt={supplier.name} 
                            className="w-full h-full object-contain"
                          />
                          {supplier.verificationStatus === 'verified' && (
                            <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h2 className="text-xl font-bold hover:text-primary">
                              <Link to={`/suppliers/${supplier.id}`}>{supplier.name}</Link>
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                <span>{supplier.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>Est. {supplier.establishedYear}</span>
                              </div>
                              <div className="flex items-center">
                                <Building className="h-3.5 w-3.5 mr-1" />
                                <span>{supplier.employeesCount} employees</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center mt-2 md:mt-0">
                            <div className="bg-amber-50 text-amber-800 px-2 py-1 rounded flex items-center">
                              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500 mr-1" />
                              <span className="font-medium">{supplier.rating}</span>
                              <span className="text-muted-foreground ml-1 text-xs">({supplier.reviewsCount})</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{supplier.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {supplier.categories.map((category, idx) => (
                            <Badge key={idx} variant="outline">{category}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Link to={`/suppliers/${supplier.id}`}>
                            <Button>View Profile</Button>
                          </Link>
                          <Button variant="outline">Contact</Button>
                          <Button variant="ghost">Request Quote</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No suppliers found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or removing filters
                </p>
                <Button onClick={() => setSearchTerm('')}>Clear Search</Button>
              </div>
            )}
          </div>
          
          {/* Pagination would go here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Suppliers;
