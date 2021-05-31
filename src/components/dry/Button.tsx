import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-32 h-10 text-xs font-semibold text-white border-none rounded sm:w-48 sm:h-12 sm:text-base bg-dtblue-600 font-body"
      {...props}
    />
  );
}
