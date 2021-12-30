import { configureStore } from "@reduxjs/toolkit";
import {appReducer} from '../features/appStore/AppReducer'

export store = configureStore({reducer: appReducer})