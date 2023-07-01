import { createSlice } from '@reduxjs/toolkit';

// const products = [
//   {
//     id: 1,
//     price: '25,00,000',
//     buildupArea: 648,
//     facing: 'West',
//     apartmentType: 3,
//     bathrooms: 2,
//     parking: 'Bike and Car',
//     address: 'Plot No. 40, Pocket, 11, Pocket 10, Sector-24, Rohini, Delhi, 110085, India',
//     image: 'https://images.nobroker.in/images/8a9fc782849d829b01849e1948e16732/8a9fc782849d829b01849e1948e16732_26702_643597_thumbnail.jpg',
//   },
//   {
//     id: 2,
//     price: '80,00,000',
//     buildupArea: 900,
//     facing: 'North East',
//     apartmentType: 3,
//     bathrooms: 2,
//     parking: 'Car',
//     address: 'Standalone Building, Pocket 11, Sector-24, Rohini, New Delhi, Delhi',
//     image: 'https://images.nobroker.in/images/8a9f8e828384321f018384a188e43f98/8a9f8e828384321f018384a188e43f98_34069_490399_thumbnail.jpg',
//   },
//   {
//     id: 3,
//     price: '55,00,000',
//     buildupArea: 700,
//     facing: 'East',
//     apartmentType: 4,
//     bathrooms: 3,
//     parking: 'Car',
//     address: 'Plot No. 40, Pocket, 11, Pocket 10, Sector-24, Rohini, Delhi, 110085, India',
//     image: 'https://images.nobroker.in/images/8a9f8e828384321f018384a188e43f98/8a9f8e828384321f018384a188e43f98_20340_284747_large.jpg'
//   },
//   {
//     id: 4,
//     price: '75,00,000',
//     buildupArea: 700,
//     facing: 'South East',
//     apartmentType: 2,
//     bathrooms: 1,
//     parking: 'Bike',
//     address: 'Plot No. 114, Pocket 10, Sector-7, Rohini, Delhi, 110087, India',
//     image: 'https://images.nobroker.in/images/8a9f8e828384321f018384a188e43f98/8a9f8e828384321f018384a188e43f98_20340_284747_large.jpg'
//   },
//   {
//     id: 5,
//     price: '44,50,000',
//     buildupArea: 750,
//     facing: 'South West',
//     apartmentType: 3,
//     bathrooms: 2,
//     parking: 'Bike and Car',
//     address: 'standalone building, Sector-24, near Shri Balaji Babosa Mandir',
//     image: 'https://images.nobroker.in/images/8a9fbeae80dfcbf40180dfd3925b01b0/8a9fbeae80dfcbf40180dfd3925b01b0_599607_483413_medium.jpg'
//   }
// ]

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
  }
});

// this is for dispatch
export const { addProduct, deleteProduct } = productSlice.actions;

// this is for configureStore
export default productSlice.reducer;