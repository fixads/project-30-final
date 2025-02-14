import React from 'react';
import { images } from '../assets/images/config';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="airflow-experts Logo"
      className={className}
    />
  );
}