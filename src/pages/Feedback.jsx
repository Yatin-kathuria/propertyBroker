import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Feedback.css'

export default function Feedback() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      navigate("/products");
      alert('Thanks for your Feedback!')
    }, 2000);
  }
  
  return (
    <div id='feedback'>
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Feedback Form</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="message">Feedback Message</label>
                    <textarea name="message" />
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
