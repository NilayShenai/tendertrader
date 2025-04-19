
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserAvatar from '@/components/auth/UserAvatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Menu, 
  ChevronDown, 
  LogIn, 
  User,
  X
} from 'lucide-react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">TenderTrader</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center px-3 py-2 transition-colors">
                    Categories <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 animate-in fade-in-80 zoom-in-95">
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories/metals" className="w-full">Metals & Mining</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories/chemicals" className="w-full">Chemicals</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories/agriculture" className="w-full">Agricultural Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories/energy" className="w-full">Energy Resources</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories/textiles" className="w-full">Textiles & Fibers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent/20 transition-colors cursor-pointer">
                    <Link to="/categories" className="w-full">All Categories</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/tenders" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
                Active Tenders
              </Link>
              <Link to="/suppliers" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
                Suppliers
              </Link>
              <Link to="/about" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            {isSearchOpen ? (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-0 md:relative md:inset-auto md:bg-transparent md:backdrop-blur-none animate-in fade-in-0">
                <div className="relative w-full max-w-xl md:w-[320px]">
                  <input
                    type="search"
                    placeholder="Search tenders, suppliers, materials..."
                    className="h-10 w-full rounded-md border border-input bg-background px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    autoFocus
                  />
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground" 
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
            
            <div className="ml-auto flex items-center gap-2">
              {user ? (
                <UserAvatar />
              ) : (
                <>
                  <Button variant="ghost" onClick={() => navigate('/auth')}>
                    Log In
                  </Button>
                  <Button onClick={() => navigate('/auth?signup')}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
            
            <Link to="/buyer-portal" className="hidden md:flex">
              <Button variant="outline" className="hover:bg-primary/10 transition-colors shadow-sm">Buyer Portal</Button>
            </Link>
            
            <Link to="/seller-portal" className="hidden md:flex">
              <Button className="shadow-md hover:shadow-lg transition-all hover:translate-y-[-1px]">Seller Portal</Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/tenders" 
                className="px-3 py-2 text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Active Tenders
              </Link>
              <Link 
                to="/suppliers" 
                className="px-3 py-2 text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Suppliers
              </Link>
              <Link 
                to="/categories" 
                className="px-3 py-2 text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pt-2 space-y-2">
                <Link 
                  to="/auth" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full gap-2">
                    <LogIn className="h-4 w-4" />
                    Log In
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    to="/buyer-portal" 
                    className="block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">Buyer Portal</Button>
                  </Link>
                  <Link 
                    to="/seller-portal" 
                    className="block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full">Seller Portal</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
