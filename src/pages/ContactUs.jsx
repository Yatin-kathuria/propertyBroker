import React from 'react'
import './ContactUs.css'

export const ContactUs = () => {
  return (
    <div className='contact'>
      <div className='heading'>Contact Us</div>
      <div className="bold">Our mailing address:</div>
      <p className="address"><div>PropertyBroker.com</div> <div>New Delhi, Plot 25,</div><div>Sector 24, Rohini - 110042</div> <div>Delhi, India</div></p>
      <div className="query">In case of any queries:</div>
      <div className="phone"><span className="material-symbols-outlined">call</span>1800-313-4777</div>
      <div className="email"><span className="material-symbols-outlined">mail</span>support@propertybroker.com</div>
    </div>
  )
}
