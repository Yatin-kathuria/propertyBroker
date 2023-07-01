import React, { useState } from 'react'
import './SignUp.css'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { signUpUser } from '../store/userSlice'
import { validateEmail } from '../utils'

export default function SignUp() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    contact: ''
  })

  function handleChange(event) {
    const { value, name } = event.target
    setForm((prev) => ({...prev, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { fullName, email, password, confirmPassword, gender, dateOfBirth, address, contact } = form
    try {
      if(!fullName || !email || !password || !confirmPassword || !gender || !dateOfBirth || !address || !contact) {
        throw new Error('All Fields are Mandatory')
      }

      if(!validateEmail(email)) {
        throw new Error('Please Provide Valid Email')
      }

      if(password.length < 8) {
        throw new Error('Password must be greater than 8 Characters')
      }

      if(password !== confirmPassword) {
        throw new Error('Password and Confirm Pasword must be same')
      }

      if(contact.length !== 10 || isNaN(contact)) {
        throw new Error('Please Provide Valid Contact')
      }

      const isExist = users.some((user) => user.email === email);
      if(isExist) {
        throw new Error('User Already Exist With this Email account')
      }

      const user = { id: uuid(), fullName, email, password, gender, dateOfBirth, address, contact, role: 'user' }
      dispatch(signUpUser(user));

      setTimeout(() => {
        navigate("/login");
        alert('Successfull Sign Up, Please Login')
      }, 2000);
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="signup-root">
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Create New Account</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" value={form.gender} onChange={handleChange}>
                      <option value=""></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="contact">Contact</label>
                    <input type="tel" name="contact" value={form.contact} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Sign Up" />
                  </div>
                  <div className="field">
                    <a className="ssolink" href=''>Use single sign-on (Google) instead</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Do you have an account? <Link to='/login'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
