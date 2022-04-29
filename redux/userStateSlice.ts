
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { getAuth } from './auth/getAuth'

interface UserState {
  loaded: boolean
  apiHost?: string
  username?: string
  user: string;
}

const initialState: UserState = { loaded: false, user: 'Ben' }

export const userStateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<UserState>) =>
      (state = { ...action.payload, loaded: true, user: 'Ben' })
  }
})

// this internally uses Thunk
// store.dispatch(loadUserAsync())
export const loadUserAsync = () => dispatch =>
  getAuth().then(user => dispatch(userStateSlice.actions.loadUser(user)))

export const userSelector = (state: RootState) => state.user