import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
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
                    <li className="header__navigation-items">
                        <a href="#" className="header__navigation-link">About</a>
                    </li>
                </ul>

                <a href="#" className="header__navigation-link">logout</a>
            </header>
        );
    }
}