/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const handleLogOut = () => {
        localStorage.clear()
        sessionStorage.clear();
        setLoggedOut(true);
    }

    if (loggedOut) {
        return <Redirect to="/" />
    }

    return (
        <header className="header">
            <div className="header__breadcrumbs">
                <div className="header__breadcrumb"></div>
                <div className="header__breadcrumb"></div>
                <div className="header__breadcrumb"></div>
            </div>
            <div className="logo">telematics</div>
            <ul className="header__navigation">
                <li className="header__navigation-items">
                    <a href="#" className="header__navigation-link">Home</a>
                </li>
            </ul>

            <a href="/" className="header__navigation-link" onClick={handleLogOut}>logout</a>
        </header>
    );
}

export default Logout;