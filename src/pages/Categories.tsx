
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/mockData';

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Browse Material Categories</h1>
            <p className="text-muted-foreground">
              Explore a wide range of raw material categories for your procurement needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/categories/${category.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-muted/50 rounded-lg p-4 mr-4 w-16 h-16 flex items-center justify-center">
                          <img 
                            src={category.image} 
                            alt={category.name} 
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      
                      <div className="mt-auto">
                        <h4 className="font-medium mb-2">Subcategories:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.map((subcategory) => (
                            <span 
                              key={subcategory.id} 
                              className="inline-block bg-muted px-2 py-1 text-xs font-medium rounded"
                            >
                              {subcategory.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
