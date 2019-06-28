import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

export default class SignIn extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <div className="login__title">
                        Login
                    </div>
                    <div className="login-form">
                        <div className="form-group">
                            <label className="form-group__label" htmlFor="username">Username</label>
                            <input className="form-group__input" type="text" name="username" id=""/>
                        </div>

                        <div className="form-group">
                            <label className="form-group__label" htmlFor="password">Password</label>
                            <input className="form-group__input" type="password" name="password" id=""/>
                        </div>
                    </div>
                    <div className="login-controls">
                        <p className="link-text">Not yet a member? <Link to={routes.SIGNUP}>Register</Link></p>
                        <button className="btn btn--blue">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}