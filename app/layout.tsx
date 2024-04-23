
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MuiThemeProvider } from "@/src/providers/MuiThemeProvider";
import { NextAuthProvider } from '@/src/providers/AuthProvider';
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import PrivateRoute from '@/src/routing/PrivateRoute';
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          <NextAuthProvider session={session}>
            <PrivateRoute
              rejected={false}
              isPublic={false}
              session={session}
            >
              {children}
            </PrivateRoute>
          </NextAuthProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
