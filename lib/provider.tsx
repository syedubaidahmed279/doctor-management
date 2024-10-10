'use client';

import { Toaster } from 'sonner';
import ContextProvider, { useAppContext } from './context';
import Whatsapp from '@/components/global/whatsapp';

export default function Provider({ children }: any) {
  const { user } = useAppContext();
  console.log(user);
  return (
    <ContextProvider>
      {children}

      <Toaster />
    </ContextProvider>
  );
}
