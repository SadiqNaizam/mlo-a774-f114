import React from 'react';

// Custom Components
import AuthForm from '@/components/AuthForm';
import Footer from '@/components/layout/Footer';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex items-center justify-center p-4">
        {/* The AuthForm is configured for the 'login' view */}
        <AuthForm type="login" />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;