import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthheader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try{
            const res = await axios.post('users/signup', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try{
            const res = await axios.post('users/login', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/login',
    async (_, thunkAPI) => {
        try{
            await axios.post('users/logout');
            clearAuthheader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async(_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        setAuthHeader(reduxState.auth.token);
        const res = await axios.get('users/current');
        return res.data;
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    }
)