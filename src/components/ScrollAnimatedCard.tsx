import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollAnimatedCard({ 
  children, 
  delay = 0, 
  className = "",
  threshold = 0.2 
}: ScrollAnimatedCardProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}


