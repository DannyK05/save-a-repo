"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layouts/header";
import { queryClient } from "@/api/client";

type AppLayoutProps = { children: React.ReactNode };

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
