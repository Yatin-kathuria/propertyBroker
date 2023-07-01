import React, { useState } from 'react'
import './Support.css'
import { validateEmail } from '../utils'
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    contact: '',
    description: ''
  })

  function handleChange(event) {
    const { value, name } = event.target
    setForm((prev) => ({...prev, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { fullName, email, contact, description } = form
    try {
      if(!fullName || !email || !contact || !description) {
        throw new Error('All Fields are Mandatory')
      }

      if(!validateEmail(email)) {
        throw new Error('Please Provide Valid Email')
      }

      if(contact.length !== 10 || isNaN(contact)) {
        throw new Error('Please Provide Valid Contact')
      }

      setTimeout(() => {
        navigate("/products");
        alert('Query successfull submitted, Our team will reach out to you.')
      }, 2000);
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div id='support'>
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Need help!</span>
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
                    <label htmlFor="contact">Contact</label>
                    <input type="text" name="contact" value={form.contact} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
