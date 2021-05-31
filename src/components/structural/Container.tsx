import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ className, ...props }: Props) {
  return <div className={`max-w-6xl mx-auto ${className}`} {...props} />;
}
