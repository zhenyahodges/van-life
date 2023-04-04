// import { useState } from 'react';
import {
    Form,
    redirect,
    useActionData,
    useNavigation,
    useLoaderData,
    // useNavigate,
} from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const pathname =
        new URL(request.url).searchParams.get('redirectTo') || '/host';

    try {
        const data = await loginUser({ email, password });
        localStorage.setItem('loggedin', true);
        return redirect(pathname);
    } catch (err) {
        return err.message;
    }
}

export default function Login() {
    // const [loginFormData, setLoginFormData] = useState({
    //     email: '',
    //     password: '',
    // });

    // const [status, setStatus] = useState('idle');
    // const [err, setErr] = useState(null);
    // const navigate = useNavigate();
    const message = useLoaderData();
    const errorMessage = useActionData();
    const navigation = useNavigation();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     // console.log(loginFormData);
    //     setStatus('submitting');
    //     // setErr(null);

    //     loginUser(loginFormData)
    //         // .then((data) => console.log(data))
    //         .then((data) => {
    //             navigate('/host', { replace: true });
    //         })
    //         // .catch((err) => setErr(err))
    //         .finally(() => setStatus('idle'));
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setLoginFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // }

    return (
        <div className='login-container'>
            <h1>Sign in to your account</h1>
            {message && <h3 className='red'>{message}</h3>}
            {errorMessage && <h3 className='red'>{errorMessage}</h3>}
            {/* {err && <h3 className='red'>{err.message}</h3>} */}
            <Form method='post' className='login-form' replace>
                {/* <form onSubmit={handleSubmit} className='login-form'> */}
                <input
                    name='email'
                    type='email'
                    placeholder='Email address'
                    // onChange={handleChange}
                    // value={loginFormData.email}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    // onChange={handleChange}
                    // value={loginFormData.password}
                />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting'
                        ? 'Logging in ...'
                        : 'Log in'}
                </button>
            </Form>
        </div>
    );
}
