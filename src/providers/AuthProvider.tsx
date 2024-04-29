"use client";

import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

type Props = {
    children?: React.ReactNode;
    session: any;
};

export const NextAuthProvider = ({ children, session }: Props) => {

    return (
        <>
            <ProgressBar
                height="4px"
                color="#3A85C5"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <SessionProvider
                session={session}
                refetchOnWindowFocus={false}
                refetchInterval={60 * 60} >
                {children}
            </SessionProvider>
        </>
    );
};