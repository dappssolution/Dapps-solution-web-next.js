"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hide = pathname.startsWith("/rafih-book");
  return (
    <>
      {!hide && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hide && <Footer />}
    </>
  );
}

