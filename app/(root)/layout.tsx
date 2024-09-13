import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidchat Hub",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

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
