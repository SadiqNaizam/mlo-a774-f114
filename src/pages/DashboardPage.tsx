import React from 'react';

// Import custom layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import shadcn/ui components for content
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* The Header component contains user info and logout functionality */}
      <Header />

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>You have successfully logged in.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                This is your protected dashboard. From here, you can access all the application's features.
              </p>
              <p className="text-sm text-muted-foreground">
                You can manage your profile or log out using the user menu in the top-right corner.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* The Footer component provides consistent branding and links */}
      <Footer />
    </div>
  );
};

export default DashboardPage;