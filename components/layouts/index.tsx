"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layouts/header";

type AppLayoutProps = { children: React.ReactNode };

export default function AppLayout({ children }: AppLayoutProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
