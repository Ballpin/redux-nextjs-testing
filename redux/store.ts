import { configureStore } from '@reduxjs/toolkit'
import { userSelector, userStateSlice } from './userStateSlice'

export const reducers = {
  user: userStateSlice.reducer
}

// configureStore helps you createStore with less fuss
export const store = configureStore({
  reducer: reducers
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>