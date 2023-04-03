// import { Navigate, redirect } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname;
    // const isLoggedIn = true;
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) {
        // throw redirect('/login');
        throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);

        // return redirect('/login');
        // return <Navigate to="/login?message=You must log in first." />;
    }
    // return null;
}
