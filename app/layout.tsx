import "./globals.css";
import { Inter } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggle from "@/components/mode/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NhaBex Doc",
  description: "Aprenda como começar com nossa documentação",
  icons: "/favicon.ico",
  generator: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          
            <SidebarTrigger className="ml-3 mt-3" />
            {/* <ThemeToggle /> */}
          
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
