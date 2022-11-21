import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.svg';


function Header({ userAuth, userEmail, handleLogout }) {
    const [link, setLink] = useState("");
    const [linkText, setLinkText] = useState("");

    const location = useLocation();
    const currentLocation = location.pathname;

    useEffect(() => {
        switch(currentLocation) {
            case '/register':
            setLink('/login');
            setLinkText("Войти");
            break;
            case '/login':
            setLink('/register');
            setLinkText("Регистрация");
            break;
        }
    }, [currentLocation, userAuth]);

    return (
    <header className="header">
        <img
            className="header__logo"
            alt="логотип"
            src={logo}
        />
        <div className='header__auth'>
            {userEmail && (
            <h3 className='header__auth_email'>{userEmail}</h3> 
            )}
            {userEmail ? (
                <button type='button' className='header__auth_link' onClick={handleLogout}>
                <Link
                to = {'/sign-in'}
                className="signup__link">
                    Выйти
                </Link>
            </button>
            ) : (
                <button
            type='button'
            className='header__auth_link'>
                <Link 
                to={link}
                className="signup__link"
                >
                    {linkText}
                </Link>
            </button>
            )}
        </div>
    </header>
    )
}

export default Header; 