import React from 'react'
import './Payment.css'

export default function Payment() {
  function handleSubmit() {

  }

  return (
    <div id='payment'>
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15 header">
                  <span className="material-symbols-outlined">lock</span>Payment
                </span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="first_name">CARDHOLDER'S NAME</label>
                    <input type="text" placeholder='Name on card' name="cardholder_name" />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="last_name">CARD NUMBER</label>
                    <input type="text" placeholder='---- ---- ---- ----' name="card_number" />
                  </div>
                  <div className='horizontal'>
                    <div className="field padding-bottom--24">
                      <label htmlFor="last_name">EXPIRY DATE</label>
                      <input type="text" placeholder='MM/YYYY' name="expiry_date" />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="last_name">CVV</label>
                      <input type="text" placeholder='Code' name="cvv" />
                    </div>
                  </div>

                  <div className="field padding-bottom--24">
                    <input type="submit" name="pay_now" value="Pay Now" />
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
