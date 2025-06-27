import React from 'react';
import { Link } from 'react-router-dom';
import { Bolt } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  console.log('BrandLogo loaded');

  return (
    <Link to="/" className={cn("flex items-center gap-2 text-foreground transition-colors hover:text-primary", className)}>
      <Bolt className="h-6 w-6" />
      <h1 className="text-2xl font-bold tracking-tight">
        SwiftLogin
      </h1>
    </Link>
  );
};

export default BrandLogo;