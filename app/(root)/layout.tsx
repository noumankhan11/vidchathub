import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
      <Toaster />
    </>
  );
}
