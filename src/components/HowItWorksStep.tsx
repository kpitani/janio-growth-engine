import React from 'react';
import { cn } from "@/lib/utils";

interface HowItWorksStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  stepNumber,
  title,
  description,
  icon,
  isLast = false
}) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connection line - hidden on mobile, visible on desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-primary transform translate-x-1/2 z-0" />
      )}
      
      {/* Step circle */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground shadow-medium mb-4 group-hover:shadow-strong transition-all duration-300">
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          {icon}
        </div>
      </div>
      
      {/* Step number */}
      <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
        Step {stepNumber}
      </div>
      
      {/* Step title */}
      <h3 className="text-xl font-semibold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      {/* Step description */}
      <p className="text-muted-foreground leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksStep;