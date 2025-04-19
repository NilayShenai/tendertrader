
import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, tenders, products } from '@/data/mockData';
import { 
  ChevronRight, 
  FileText, 
  Package, 
  Tag, 
  CircleDot, 
  PanelTopClose, 
  FlaskConical,
  CircleDashed
} from 'lucide-react';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams] = useSearchParams();
  const subcategoryFilter = searchParams.get('sub');
  const [activeTab, setActiveTab] = useState('tenders');
  
  const category = categories.find(cat => cat.slug === categorySlug);
  
  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="mb-6">The category you are looking for does not exist or has been removed.</p>
            <Link to="/categories">
              <Button>Browse All Categories</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get filtered tenders and products
  const categoryTenders = tenders.filter(tender => {
    if (subcategoryFilter) {
      const subcategory = category.subcategories.find(sub => sub.slug === subcategoryFilter);
      return tender.categoryId === category.id && tender.subcategoryId === subcategory?.id;
    }
    return tender.categoryId === category.id;
  });
  
  const categoryProducts = products.filter(product => {
    if (subcategoryFilter) {
      const subcategory = category.subcategories.find(sub => sub.slug === subcategoryFilter);
      return product.categoryId === category.id && product.subcategoryId === subcategory?.id;
    }
    return product.categoryId === category.id;
  });

  // Function to get icon for subcategory
  const getSubcategoryIcon = (index: number) => {
    const icons = [
      <CircleDot className="h-5 w-5 text-blue-500" />,
      <PanelTopClose className="h-5 w-5 text-indigo-500" />,
      <FlaskConical className="h-5 w-5 text-green-500" />,
      <CircleDashed className="h-5 w-5 text-orange-500" />,
      <Tag className="h-5 w-5 text-purple-500" />
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-slate-600 hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-slate-400" />
              <Link to="/categories" className="text-slate-600 hover:text-primary transition-colors">Categories</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-slate-400" />
              <span className="text-slate-900 font-medium">{category.name}</span>
            </div>
          </div>
        </div>
        
        {/* Category Header Card */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-slate-800 rounded-lg p-5 w-20 h-20 flex items-center justify-center">
                  {category.slug === 'chemicals' ? (
                    <FlaskConical className="h-10 w-10 text-white" />
                  ) : (
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
                  <p className="text-slate-300">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-slate-800/50 p-5 rounded-md text-center">
                  <p className="text-3xl font-bold text-white">{categoryTenders.length}</p>
                  <p className="text-sm text-slate-300">Active Tenders</p>
                </div>
                
                <div className="bg-slate-800/50 p-5 rounded-md text-center">
                  <p className="text-3xl font-bold text-white">{categoryProducts.length}</p>
                  <p className="text-sm text-slate-300">Available Products</p>
                </div>
                
                <div className="bg-slate-800/50 p-5 rounded-md text-center">
                  <p className="text-3xl font-bold text-white">{category.subcategories.length}</p>
                  <p className="text-sm text-slate-300">Subcategories</p>
                </div>
                
                <div className="bg-slate-800/50 p-5 rounded-md text-center">
                  <p className="text-3xl font-bold text-white">24</p>
                  <p className="text-sm text-slate-300">Verified Suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subcategories */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {category.subcategories.map((subcategory, index) => (
              <Link 
                key={subcategory.id} 
                to={`/categories/${category.slug}?sub=${subcategory.slug}`}
              >
                <div className={`bg-white border hover:border-primary hover:shadow-md transition-all rounded-lg p-4 flex items-center ${
                  subcategoryFilter === subcategory.slug ? 'border-primary shadow-sm' : ''
                }`}>
                  <div className="mr-3">
                    {getSubcategoryIcon(index)}
                  </div>
                  <span className="font-medium">{subcategory.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Tabs for Tenders and Products */}
        <div className="container mx-auto px-4 py-6">
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              <button 
                className={`pb-4 px-1 font-medium text-lg transition-colors ${
                  activeTab === 'tenders' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab('tenders')}
              >
                Active Tenders
              </button>
              <button 
                className={`pb-4 px-1 font-medium text-lg transition-colors ${
                  activeTab === 'products' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab('products')}
              >
                Available Products
              </button>
              <button 
                className={`pb-4 px-1 font-medium text-lg transition-colors ${
                  activeTab === 'suppliers' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab('suppliers')}
              >
                Suppliers
              </button>
            </div>
          </div>
          
          {activeTab === 'tenders' && (
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Tenders in {category.name}</h2>
                <Link to="/tenders">
                  <Button className="bg-slate-900 hover:bg-slate-800">View All Tenders</Button>
                </Link>
              </div>
              
              {categoryTenders.length > 0 ? (
                <div className="space-y-6 mb-8">
                  {categoryTenders.map((tender) => (
                    <Card key={tender.id} className="border hover:border-primary hover:shadow-md transition-all">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex justify-between flex-col lg:flex-row gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Link 
                                  to={`/categories/${category.slug}?sub=${
                                    category.subcategories.find(s => s.id === tender.subcategoryId)?.slug || ''
                                  }`}
                                  className="inline-block bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium rounded-full"
                                >
                                  {category.subcategories.find(s => s.id === tender.subcategoryId)?.name || category.name}
                                </Link>
                                <span className="inline-block bg-gray-100 px-3 py-1 text-xs font-medium rounded-full">
                                  Bids: {tender.bidsCount}
                                </span>
                              </div>
                              
                              <h3 className="text-xl font-bold mb-2">{tender.title}</h3>
                              <p className="text-slate-600 mb-4 line-clamp-2">{tender.description}</p>
                              
                              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                                <div>
                                  <p className="font-semibold text-slate-700">Quantity</p>
                                  <p>{tender.quantity} {tender.unit}</p>
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-700">Buyer</p>
                                  <p>{tender.buyerName}</p>
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-700">Location</p>
                                  <p>{tender.buyerLocation}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col justify-between items-end">
                              <div className="text-right">
                                <p className="font-semibold text-slate-700">Deadline</p>
                                <p className="text-red-600 font-medium">{new Date(tender.deadline).toLocaleDateString()}</p>
                              </div>
                              
                              <Link to={`/tenders/${tender.id}`} className="mt-4 lg:mt-0">
                                <Button>View Details</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border rounded-lg">
                  <FileText className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No active tenders</h3>
                  <p className="text-slate-500 mb-6">
                    There are currently no active tenders in this category.
                  </p>
                  <Link to="/tenders">
                    <Button>Browse All Tenders</Button>
                  </Link>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'products' && (
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Products in {category.name}</h2>
                <Link to="/products">
                  <Button className="bg-slate-900 hover:bg-slate-800">View All Products</Button>
                </Link>
              </div>
              
              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {categoryProducts.map((product) => (
                    <Card key={product.id} className="border hover:border-primary hover:shadow-md transition-all overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-gray-50 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium rounded-full">
                              {category.subcategories.find(s => s.id === product.subcategoryId)?.name || category.name}
                            </span>
                            {product.auditReports && product.auditReports.length > 0 && (
                              <span className="inline-block bg-green-50 text-green-700 px-3 py-1 text-xs font-medium rounded-full">
                                Audited
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold">{product.name}</h3>
                        </div>
                        
                        <div className="p-4">
                          <p className="text-slate-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                          
                          {product.price && (
                            <div className="bg-blue-50 p-3 rounded mb-4 text-center">
                              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                              <span className="text-sm text-slate-600"> / {product.unit}</span>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center">
                            <div className="text-sm">
                              <p className="font-medium text-slate-700">Supplier</p>
                              <p>{product.sellerName}</p>
                            </div>
                            <Link to={`/products/${product.id}`}>
                              <Button size="sm">View Details</Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border rounded-lg">
                  <Package className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products available</h3>
                  <p className="text-slate-500 mb-6">
                    There are currently no products in this category.
                  </p>
                  <Link to="/products">
                    <Button>Browse All Products</Button>
                  </Link>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'suppliers' && (
            <div className="text-center py-16 bg-white border rounded-lg">
              <p className="text-lg text-slate-600 mb-4">
                Sign in to view suppliers in this category
              </p>
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
