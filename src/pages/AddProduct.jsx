import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addProduct } from '../store/productSlice';
import { getBase64 } from '../utils';
import './AddProduct.css'

export const AddProduct = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    price: '',
    buildupArea: '',
    facing: '',
    apartmentType: '',
    bathrooms: '',
    parking: '',
    address: '',
    image: ''
  })
  const [file, setFile] = useState()

  function handleChange(event) {
    const { value, name } = event.target
    setForm((prev) => ({...prev, [name]: value}))
  }

  async function handleUploadImage(event) {
    let file;
    if (event.target.files) {
      file = event.target.files[0]
    }
    try {
      const url = await getBase64(file);
      setFile(file);
      setForm((prev) => ({...prev, image: url}))
    } catch (error) {
      alert('Uploading failed, Please try again')
    }
  }

  function handleReset() {
    setForm({
      price: '',
      buildupArea: '',
      facing: '',
      apartmentType: '',
      bathrooms: '',
      parking: '',
      address: '',
      image: ''
    })
    setFile(undefined)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { price, buildupArea, facing, apartmentType, bathrooms, parking, address, image } = form
    try {
      if(!price || !buildupArea || !facing || !apartmentType || !bathrooms || !parking || !address || !image) {
        throw new Error('All Fields are Mandatory')
      }

      const product = { id: uuid(), price, buildupArea, facing, apartmentType, bathrooms, parking, address, image }
      console.log(product);
      setTimeout(() => {
        dispatch(addProduct(product));
        alert('Property successfull added!')
        handleReset()
      }, 2000);
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className='add-product'>
      <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1 }}>
        <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Add Property</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="price">Price (₹)</label>
                    <input type="text" name="price" value={form.price} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="buildupArea">BuildUp Area (sqft)</label>
                    <input type="number" name="buildupArea" value={form.buildupArea} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="facing">Facing</label>
                    <select name="facing" value={form.facing} onChange={handleChange}>
                      <option value=""></option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North East">North East</option>
                      <option value="North West">North West</option>
                      <option value="South East">South East</option>
                      <option value="South West">South West</option>
                    </select>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="apartmentType">Apartment Type (BHK)</label>
                    <input type="number" name="apartmentType" value={form.apartmentType} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <input type="number" name="bathrooms" value={form.bathrooms} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="parking">Parking</label>
                    <input type="text" name="parking" value={form.parking} onChange={handleChange}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="image">Upload Image</label>
                    <input type="file" name="image" onChange={handleUploadImage}/>
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Add" />
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
