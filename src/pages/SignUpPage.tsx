import React from 'react';
import AuthForm from '@/components/AuthForm';
import Footer from '@/components/layout/Footer';

/**
 * SignUpPage Component
 * 
 * This page allows new users to create an account for the SwiftLogin application.
 * It features a centrally-aligned form for user registration and a consistent footer.
 * The core functionality is handled by the reusable AuthForm component, configured for sign-up.
 */
const SignUpPage: React.FC = () => {
  console.log('SignUpPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main content area that grows to fill available space and centers the form */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthForm type="signup" />
      </main>
      
      {/* Consistent application footer */}
      <Footer />
    </div>
  );
};

export default SignUpPage;