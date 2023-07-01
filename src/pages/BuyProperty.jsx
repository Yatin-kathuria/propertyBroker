import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addOrder } from '../store/userSlice';
import './BuyProperty.css'

const BuyProperty = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const loggesInUser = useSelector(state => state.user.loggesInUser);

  const [form, setForm] = useState({
    fullName: loggesInUser.fullName,
    contact: loggesInUser.contact,
    address: loggesInUser.address,
  })

  function handleChange(event) {
    const { value, name } = event.target
    setForm((prev) => ({...prev, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { fullName, contact, address } = form
    try {
      if(!fullName || !contact || !address) {
        throw new Error('All Fields are Mandatory')
      }

      const user = { id: loggesInUser.id, fullName, contact, address }
      const order = { user,  productId: searchParams.get('id') }
      setTimeout(() => {
        dispatch(addOrder(order));
        navigate('/orders')
        alert('Buy request successfull submited!')
      }, 2000);
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='buy-property'>
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">We love you find your sweet home, Please Fill the form with your updated details. We will reach out to you as soon as possible to assist you.</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" name="contact" value={form.contact} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}/>
                  </div>
                  <div className="field">
                    <input type="submit" name="submit" value="Confirm" />
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

export default BuyProperty