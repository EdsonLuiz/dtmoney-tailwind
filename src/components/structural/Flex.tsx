import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Flex({ ...props }: Props) {
  return <div className="flex items-center justify-between" {...props} />;
}
