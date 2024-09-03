"use client";

import { Toaster } from "sonner";
import ContextProvider, { useAppContext } from "./context";

export default function Provider({ children }: any) {
  return (
    <ContextProvider>
      {children}

      <Toaster />
    </ContextProvider>
  );
}
