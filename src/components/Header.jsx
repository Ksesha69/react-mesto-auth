import {useState, useEffect} from 'react';
import { Link, Routes, Route, useLocation, Navigate } from "react-router-dom";
import logo from '../images/logo.svg';


function Header({ userEmail, handleLogout }) {


    return (
    <header className="header">
        <img
            className="header__logo"
            alt="логотип"
            src={logo}
        />
        <div className='header__auth'>
        <h3 className='header__auth_email'>{userEmail}</h3> 
            <Routes>
            <Route path="/login"
            element={
            <Navigate to="/register" className="header__link">
                Регистрация
                </Navigate>
            }
            />
            <Route path="/register"
            element={
            <Navigate to="/login" className="header__link">
                Войти
            </Navigate>
            }
            />
            <Route exact path="/"
            element={
                
            <button type='button' className='header__auth_link' onClick={handleLogout}>
            Выйти
    </button>}
            >
            <>
            
                
            </>
            </Route>
            </Routes>
            
            
            
        </div>
    </header>
    )
}

export default Header; 