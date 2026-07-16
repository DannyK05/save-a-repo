"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layouts/header";
import { queryClient } from "@/api/client";

type AppLayoutProps = { children: React.ReactNode };

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <body className="h-full">
        <Header />
        <QueryClientProvider client={queryClient}>
          <main className="w-full h-full">{children}</main>
        </QueryClientProvider>
      </body>
    </>
  );
}
