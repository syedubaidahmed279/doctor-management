'use client';

import { Toaster } from 'sonner';
import ContextProvider from './context';

export default function Provider({ children }) {
  return (
    <ContextProvider>
      {children}

      <Toaster />
    </ContextProvider>
  );
}
