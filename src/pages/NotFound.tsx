
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="bg-muted/30 p-4 rounded-full inline-block mb-6">
            <AlertTriangle className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! The page you're looking for does not exist.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The page might have been moved or deleted, or you might have mistyped the URL.
            </p>
            <Link to="/">
              <Button size="lg">Return to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
