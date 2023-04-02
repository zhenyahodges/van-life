// import { Navigate, redirect } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export async function requireAuth() {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return redirect('/login?message=You must log in first.');
        // return <Navigate to="/login?message=You must log in first." />;
    }
    return null;

}
