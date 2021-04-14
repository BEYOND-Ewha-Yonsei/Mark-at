import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

interface User {
  userId: string
  isLoggedIn: boolean
}
interface SetUserAction {
  userId: string
}
export const userInitialState: User = {
  userId: '',
  isLoggedIn: false
}

const loginSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserId: (state, action: PayloadAction<SetUserAction>) => {
      const { userId } = action.payload
      state.userId = userId
    },
    setisLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    resetLogin: () => userInitialState,
  },
})

export const {
  setUserId,
  setisLoggedIn,
  resetLogin
} = loginSlice.actions
const loginReducer = loginSlice.reducer

const walletPersistConfig = {
  key: 'user',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  // whitelist: ['address', 'balances', 'type', 'derivationPath', 'secretType', 'account'], //we don't want to persist everything in the wallet store
}
export const persistLoginReducer = persistReducer<ReturnType<typeof loginReducer>>(
  walletPersistConfig,
  loginReducer
)
