import { headers } from 'next/headers';
import SignIn from '@/src/routing/SignIn';
import MainLayout from '../components/Layouts/MainLayout';


const PrivateRoute = async ({ children, rejected, isPublic, session }: any) => {
    if (session === undefined || session === null) {
        return <SignIn />
    }

    if (!rejected) return <MainLayout>{children}</MainLayout>;

    return <div>You are not authorized to view this site.</div>;
}

export default PrivateRoute;

