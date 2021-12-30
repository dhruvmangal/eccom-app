import { configureStore } from "@reduxjs/toolkit";
import {appReducer} from '../features/appStore/AppReducer'

export const store = configureStore({reducer: appReducer});