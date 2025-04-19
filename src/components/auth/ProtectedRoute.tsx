
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  requiredRole?: 'buyer' | 'seller' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const { user, loading, session } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  // If no user is logged in, redirect to auth page
  if (!user || !session) {
    return <Navigate to="/auth" replace />;
  }

  // If a specific role is required, check if the user has that role
  if (requiredRole) {
    const userRole = (user.user_metadata?.role as string || 'seller');
    if (userRole !== requiredRole) {
      // Redirect to appropriate page or show access denied
      return <Navigate to="/" replace />;
    }
  }

  // User is authenticated (and has the required role if specified)
  return <Outlet />;
};

export default ProtectedRoute;
