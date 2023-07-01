import { createSlice } from '@reduxjs/toolkit';

const initialUsers = [{
  id: "0c9d3ec1-f3f7-71e1-9f05-dbca769bc9c4",
  fullName: "Admin",
  email: "admin@gmail.com",
  password: "admin@1234",
  gender: "male",
  dateOfBirth: "2023-07-19",
  address: "B-58A GALI NO.4",
  contact: "7011913515",
  role: "admin"
}]

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: initialUsers,
    loggesInUser: null
  },
  reducers: {
    logInUser: (state, action) => {
      state.loggesInUser = action.payload
    },
    logOutUser: (state, action) => {
      state.loggesInUser = null
    },
    signUpUser: (state, action) => {
      state.users.push(action.payload)
    },
    addOrder: (state, action) => {
      const { user: { id, fullName, contact, address }, productId } = action.payload;

      state.users = state.users.map(user => {
        if(user.id === id) {
          if(!user.orders) user.orders = [];
          user.orders.push(productId)
        }
        return user
      })
    },
    cancelOrder: (state, action) => {
      const userId = state.loggesInUser.id;
      state.users = state.users.map(user => {
        if(user.id === userId) {
          user.orders = user.orders.filter(order => order != action.payload)
        }
        return user
      })
    }
  }
});

// this is for dispatch
export const { logInUser, logOutUser, signUpUser, addOrder, cancelOrder } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;