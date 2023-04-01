import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className='site-logo' to='/'>
                #VanLife
            </Link>
            <nav>
                <NavLink
                    to='/host'
                    className={({ isActive }) => (isActive ? 'my-link' : '')}
                >
                    Host
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) => (isActive ? 'my-link' : '')}
                >
                    About
                </NavLink>
                <NavLink
                    to='/vans'
                    className={({ isActive }) => (isActive ? 'my-link' : '')}
                >
                    Vans
                </NavLink>

                <Link to='login' className='login-link'>
                    <img
                        src='/avatar-icon.png'
                        className='login-icon'
                        alt='avatar'
                    />
                </Link>
            </nav>
        </header>
    );
}
