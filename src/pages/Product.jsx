import React, { useMemo } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../store/productSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const products = useSelector(state => state.product.products)
  const loggesInUser = useSelector(state => state.user.loggesInUser);
  const users = useSelector(state => state.user.users);

  const isAdmin = useMemo(() => loggesInUser?.role === 'admin', [loggesInUser])

  function onPropertyDelete(id) {
    setTimeout(() => {
      dispatch(deleteProduct(id))
      alert('Product successfull delete')
    }, 1000);
  }

  function onBuyRequestClick(id) {
    const user = users.find(user => user.id === loggesInUser.id);
    if(user?.orders?.some(order => order == id)) {
      alert('Product already in request')
      return;
    }

    setTimeout(() => {
      navigate(`/buy-request?id=${id}`)
    }, 1000);
  }

  function onQueryClick(id) {
    setTimeout(() => {
      navigate(`/support?id=${id}`)
    }, 1000);
  }

  return (
    <div id='products'>
      {products.map(product => (<div className='property' key={product.id}>
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
              {!isAdmin && <>
                <div className='owner' onClick={() => onBuyRequestClick(product.id)}>Buy Request</div>
                <div className='owner' onClick={() => onQueryClick(product.id)}>Have Query</div>
              </>}
              {isAdmin && <div className='delete' onClick={() => onPropertyDelete(product.id)}>Delete</div>}
            </div>
          </div>
        </div>
      </div>))}
    </div>
  )
}
