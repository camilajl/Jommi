import { headers } from 'next/headers';
import SignIn from '@/src/routing/SignIn';


const PrivateRoute = async ({ children, rejected, isPublic, session }: any) => {
    if (session === undefined || session === null) {
        return <SignIn />
    }

    if (isPublic) return children;
    if (!rejected) return children;

    return <div>You are not authorized to view this site.</div>;
}

export default PrivateRoute;

