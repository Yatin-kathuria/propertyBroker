import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelOrder } from '../store/userSlice';
import './Orders.css'

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const products = useSelector(state => state.product.products)
  const loggesInUser = useSelector(state => state.user.loggesInUser);
  const users = useSelector(state => state.user.users);

  const requestedProducts = useMemo(() => {
    const user = users.find(user => user.id == loggesInUser.id);
    const orders = user?.orders || []
    const pd = orders.map(id => {
      return products.find(p => p.id == id);
    })

    return pd
  }, [users, products, loggesInUser])

  function onRequestCancel(id) {
    setTimeout(() => {
      dispatch(cancelOrder(id));
      alert('Reuest successfull cancelled')
    }, 1000);
  }

  function onFeedback(id) {
    setTimeout(() => {
      navigate(`/feedback?id=${id}`)
    }, 1000);
  }

  if(!requestedProducts.length) {
    return (
      <div className='orders'>
        <div className="message">No Buy Property Requested</div>
      </div>
    )
  }

  return (
    <div className='orders'>
      {requestedProducts.map(product => (<div className='property' key={product.id}>
        <div className='address'>{product.address}</div>
        <div className='highlights'>
          <div className='info'>
            <div>₹{product.price}</div>
            <div>Price (Negotiable)</div>
          </div>
          <div className='info'>
            <div>{product.buildupArea}sqft</div>
            <div>Buildup Area</div>
          </div>
        </div>
        <div className='content'>
          <div className='img'>
            <img src={product.image} alt="" />
          </div>
          <div className='right-content'>
            <div className='info-box'>
              <div className='layer'>
                <div className='info'>
                  <div className='icon'>
                    <span className="material-symbols-outlined">explore</span>
                  </div>
                  <div className='desc'>
                    <div>{product.facing}</div>
                    <div>Facing</div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                  <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <div className='desc'>
                    <div>{product.apartmentType} BHK</div>
                    <div>Apartment Type</div>
                  </div>
                </div>
              </div>
              <div className='layer'>
                <div className='info'>
                  <div className='icon'>
                    <span className="material-symbols-outlined">bathtub</span>
                  </div>
                  <div className='desc'>
                    <div>{product.bathrooms}</div>
                    <div>Bathrooms</div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <span className="material-symbols-outlined">local_parking</span>
                  </div>
                  <div className='desc'>
                    <div>{product.parking}</div>
                    <div>Parking</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer'>
              <div className='feedback' onClick={() => onFeedback(product.id)}>Submit Feedback</div>
              <div className='delete' onClick={() => onRequestCancel(product.id)}>Cancel Request</div>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Orders