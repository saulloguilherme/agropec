import type { ReactElement } from 'react';

interface PrivateRouteProps {
  children: ReactElement;
}

export default function PrivateRoute({ children }: PrivateRouteProps): ReactElement  {
  return children;
}
