import Navbar from "@/components/nav/Navbar";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
