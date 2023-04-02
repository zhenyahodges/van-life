import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const [status, setStatus] = useState('idle');
    const [err, setErr] = useState(null);

    const message = useLoaderData();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(loginFormData);
        setStatus('submitting');
        setErr(null);

        loginUser(loginFormData)
            // .then((data) => console.log(data))
            .then((data) => {
                navigate('/host',{replace:true});
            })
            .catch((err) => setErr(err))
            .finally(() => setStatus('idle'));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className='login-container'>
            <h1>Sign in to your account</h1>
            {message && <h2 className='red'>{message}</h2>}
            {err && <h2 className='red'>{err.message}</h2>}
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    name='email'
                    onChange={handleChange}
                    type='email'
                    placeholder='Email address'
                    value={loginFormData.email}
                />
                <input
                    name='password'
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                    value={loginFormData.password}
                />
                <button disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Loggin in...' : 'Login in'}
                </button>
            </form>
        </div>
    );
}
