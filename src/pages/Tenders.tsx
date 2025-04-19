
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { categories, tenders } from '@/data/mockData';
import { Search, Calendar, Filter, ArrowDown, ArrowUp } from 'lucide-react';

const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('deadline');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({
    auditRequired: false,
    activeOnly: true,
  });

  // Filter tenders based on search and filters
  const filteredTenders = tenders.filter(tender => {
    // Search term filter
    if (searchTerm && !tender.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !tender.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'all' && tender.categoryId !== selectedCategory) {
      return false;
    }
    
    // Audit requirement filter
    if (filters.auditRequired && !tender.requiresAudit) {
      return false;
    }
    
    // Active only filter
    if (filters.activeOnly && tender.status !== 'active') {
      return false;
    }
    
    return true;
  });

  // Sort tenders
  const sortedTenders = [...filteredTenders].sort((a, b) => {
    if (sortBy === 'deadline') {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'createdAt') {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'bids') {
      return sortOrder === 'asc' ? a.bidsCount - b.bidsCount : b.bidsCount - a.bidsCount;
    }
    
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Active Tenders</h1>
            <p className="text-muted-foreground">
              Browse through current tender requests from verified buyers.
            </p>
          </div>
          
          {/* Filters and Search */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <Label htmlFor="search" className="mb-2 block">Search Tenders</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search by title or description"
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="category" className="mb-2 block">Filter by Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="sort" className="mb-2 block">Sort By</Label>
                <div className="flex space-x-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort" className="flex-1">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deadline">Deadline</SelectItem>
                      <SelectItem value="createdAt">Date Posted</SelectItem>
                      <SelectItem value="bids">Number of Bids</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  >
                    {sortOrder === 'asc' ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="auditRequired"
                  checked={filters.auditRequired}
                  onCheckedChange={(checked) => 
                    setFilters({...filters, auditRequired: !!checked})
                  }
                />
                <Label htmlFor="auditRequired">Requires Quality Audit</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activeOnly"
                  checked={filters.activeOnly}
                  onCheckedChange={(checked) => 
                    setFilters({...filters, activeOnly: !!checked})
                  }
                />
                <Label htmlFor="activeOnly">Active Tenders Only</Label>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-4 text-sm text-muted-foreground">
            Found {sortedTenders.length} tenders matching your criteria
          </div>
          
          {sortedTenders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTenders.map((tender) => (
                <Card key={tender.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-accent-100 text-accent-600 px-2 py-1 text-xs font-medium rounded">
                        {categories.find(c => c.id === tender.categoryId)?.name}
                      </span>
                      {tender.requiresAudit && (
                        <span className="inline-block bg-business-100 text-business-700 ml-2 px-2 py-1 text-xs font-medium rounded">
                          Audit Required
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{tender.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{tender.description}</p>
                    
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <p className="font-medium">Quantity</p>
                        <p>{tender.quantity} {tender.unit}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Deadline</p>
                        <p className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(tender.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <p className="font-medium">Buyer</p>
                        <p>{tender.buyerName}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Location</p>
                        <p>{tender.buyerLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium mr-2">Bids:</span>
                        <span>{tender.bidsCount}</span>
                      </div>
                      <Link to={`/tenders/${tender.id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <div className="mb-4">
                <Search className="h-12 w-12 mx-auto text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No tenders found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setFilters({ auditRequired: false, activeOnly: true });
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tenders;
