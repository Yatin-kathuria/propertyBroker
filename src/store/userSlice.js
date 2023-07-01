import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
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