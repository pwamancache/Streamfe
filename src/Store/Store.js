import {configureStore} from '@reduxjs/toolkit'
import RootReducers from '../Reducers/RootReducer.js'
import logger from 'redux-logger'
export const store = configureStore({reducer:RootReducers,middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)})