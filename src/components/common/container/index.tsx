"use client"
import React from 'react';
import classNames from 'classnames';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  disableGutter?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, className, maxWidth = 'lg', disableGutter = false }) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  // "px-4 sm:px-6 lg:px-8"
  return (
    <div
      className={classNames(
        "mx-auto", // Center the container
        !disableGutter && "px-4", // Apply gutter unless disabled
        maxWidthClasses[maxWidth], // Set max width dynamically
        className // Allow custom className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
