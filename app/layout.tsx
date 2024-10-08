import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MuiThemeProvider } from '@/src/providers/MuiThemeProvider';
import { ApolloWrapper } from '@/src/graphql/apollo-wrapers';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MuiThemeProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
