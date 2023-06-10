import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toollkitReducer from './toollkitReducer'

const rootReducer = combineReducers({
  toolkit: toollkitReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
