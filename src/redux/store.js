import { configureStore } from "@reduxjs/toolkit";

import basketReducer from './basket/basketSlice'
import userReducer from './user/userSlice'

export default configureStore({
    reducer:{
        basket: basketReducer,
        user: userReducer
    }
})