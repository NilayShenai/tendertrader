
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';

const Auth: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users away from the auth page
  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome to TenderTrader</h1>
            <p className="mt-2 text-muted-foreground">
              The leading B2B marketplace for raw materials procurement
            </p>
          </div>
          
          <AuthForm />
          
          <div className="mt-8">
            <Card className="p-4 text-sm text-center bg-primary/5 border-primary/20">
              <p>For development purposes, you might want to disable email verification in the Supabase Dashboard.</p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
