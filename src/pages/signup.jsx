import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signUp } from '../api'
import * as routes from '../constants/routes'

export function setStateOnChange (setState) {
  return (e) => {
    setState(e.target.value)
  }
}

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [done, setDone] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    setDisabled(true)
    const formData = new FormData()
    formData.append('name', `${firstName} ${lastName}`)
    formData.append('email', email)
    formData.append('password', password)
    signUp(formData).then(() => {
      setDisabled(false)
      setDone(true)
    }).catch(({ data }) => {
      const errorMessage = Object.values(data)[0][0]
      alert(errorMessage)
      setDisabled(false)
    })
  }

  if (done) {
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__title">
          Register
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="form-group">
              <label className="form-group__label" htmlFor="firstname">First
                name</label>
              <input className="form-group__input" type="text" name="firstname"
                     value={firstName} onChange={setStateOnChange(setFirstName)}
                     id="" required/>
            </div>

            <div className="form-group">
              <label className="form-group__label" htmlFor="lastname">Last
                name</label>
              <input className="form-group__input" type="text" name="lastname"
                     id="" value={lastName}
                     onChange={setStateOnChange(setLastName)} required/>
            </div>

            <div className="form-group">
              <label className="form-group__label" htmlFor="email">Email</label>
              <input className="form-group__input" type="email" name="email"
                     id="" value={email} onChange={setStateOnChange(setEmail)}
                     required/>
            </div>

            <div className="form-group">
              <label className="form-group__label"
                     htmlFor="password">Password</label>
              <input className="form-group__input" type="password"
                     name="password" id="" value={password}
                     onChange={setStateOnChange(setPassword)} required/>
            </div>
          </div>
          <div className="login-controls">
            <p className="link-text">Already registered? <Link
              to={routes.SIGNIN}>Login</Link></p>
            <button className="btn btn--blue" type="submit"
                    disabled={disabled}>Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
