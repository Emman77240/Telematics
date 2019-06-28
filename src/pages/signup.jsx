import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

export default class SignUp extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <div className="login__title">
                        Register
                    </div>
                    <div className="login-form">
                        <div className="form-group">
                            <label className="form-group__label" htmlFor="firstname">First name</label>
                            <input className="form-group__input" type="text" name="firstname" id=""/>
                        </div>

                        <div className="form-group">
                            <label className="form-group__label" htmlFor="lastname">Last name</label>
                            <input className="form-group__input" type="text" name="lastname" id=""/>
                        </div>

                        <div className="form-group">
                            <label className="form-group__label" htmlFor="email">Email</label>
                            <input className="form-group__input" type="email" name="email" id=""/>
                        </div>

                        <div className="form-group">
                            <label className="form-group__label" htmlFor="password">Password</label>
                            <input className="form-group__input" type="password" name="password" id=""/>
                        </div>
                    </div>
                    <div className="login-controls">
                        <p className="link-text">Already registered? <Link to={routes.SIGNIN}>Login</Link></p>
                        <button className="btn btn--blue">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}