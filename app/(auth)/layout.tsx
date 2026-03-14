import type React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="overflow-x-hidden min-h-screen">{children}</main>;
}
