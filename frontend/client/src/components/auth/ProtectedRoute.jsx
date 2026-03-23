import React from 'react';

const ProtectedRoute = () => {
    const isAuthenticated = true; 
    const loading = false;
    
    if(loading){
        return <div>Loading...</div>; 
    }// Replace with actual authentication logic
  return isAuthenticated ? (
    <AppLayout>
        <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" replace/>
  );
};

export default ProtectedRoute;