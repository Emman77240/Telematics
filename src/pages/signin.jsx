import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logIn } from '../api'
import * as routes from '../constants/routes'
import { setStateOnChange } from './signup'

export default function SignIn () {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [done, setDone] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    setDisabled(true)
    const formData = new FormData()
    formData.append('username', userName)
    formData.append('password', password)
    logIn(formData).then(({ data: { token } }) => {
      localStorage.setItem('token', token)
      setDone(true);
      setDisabled(false)
    }).catch(({ data }) => {
      const errorMessage = Object.values(data)[0][0]
      alert(errorMessage)
      setDisabled(false)
    })
  }

  if (done) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__title">
          Login
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="form-group">
              <label className="form-group__label"
                     htmlFor="username">Username</label>
              <input className="form-group__input" type="text"
                     name="username" id="" value={userName}
                     onChange={setStateOnChange(setUserName)}/>
            </div>

            <div className="form-group">
              <label className="form-group__label"
                     htmlFor="password">Password</label>
              <input className="form-group__input" type="password"
                     name="password" id="" value={password}
                     onChange={setStateOnChange(setPassword)}/>
            </div>
          </div>
          <div className="login-controls">
            <p className="link-text">Not yet a member? <Link
              to={routes.SIGNUP}>Register</Link></p>
            <button className="btn btn--blue" type="submit"
                    disabled={disabled}>Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

