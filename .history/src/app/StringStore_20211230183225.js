import { configureStore } from "@reduxjs/toolkit";
import {StringReducer} from '../features/string/String'

const store = configureStore({ reducer: StringReducer})

