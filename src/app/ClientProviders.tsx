'use client';
import Layout from "@/app/models/Layout.interface";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function ClientProviders(
  {children }: Layout
) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
