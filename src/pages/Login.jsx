import React, { useState } from 'react'
import './Login.css'

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { logInUser } from '../store/userSlice';
import { validateEmail } from '../utils';

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { value, name } = event.target
    setForm((prev) => ({...prev, [name]: value}))
  }


  function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = form
    try {
      if(!email || !password) {
        throw new Error('All Fields are Mandatory')
      }

      if(!validateEmail(email)) {
        throw new Error('Please Provide Valid Email')
      }

      const user = users.find((user) => user.email === email);
      if(!user) {
        throw new Error('Invalid Email or Password')
      }

      if(user.password !== password) {
        throw new Error('Invalid Email or Password')
      }

      setTimeout(() => {
        dispatch(logInUser(user));
        navigate("/products");
        alert('Successfully login')
      }, 2000);
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Sign in to your account</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                      <div className="reset-pass">
                        <a href="#">Forgot your password?</a>
                      </div>
                    </div>
                    <input type="password" name="password" value={form.password} onChange={handleChange}/>
                  </div>
                  <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <label htmlFor="checkbox">
                      <input type="checkbox" name="checkbox" /> Stay signed in For a week
                    </label>
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Sign In" />
                  </div>
                  <div className="field">
                    <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Don't have an account? <Link to="/sign-up">Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
