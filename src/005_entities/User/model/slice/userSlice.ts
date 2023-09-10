import {UserScheme} from '005_entities/User/model/types/user';
import { createSlice } from '@reduxjs/toolkit';


const initialState: UserScheme = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
