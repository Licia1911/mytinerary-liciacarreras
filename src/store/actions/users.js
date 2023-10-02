import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_user = createAsyncThunk(
    'read_user',
    async ({ userId }) => {
        try {
            let data = await axios(apiUrl + 'users/' + userId)
            console.log(data)
            return {
                user: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                users: []
            }
        }
    }
)
const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signin', obj.data)
            console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)
const signin_token = createAsyncThunk(
    'signin_token',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/token', null, authorization)
            //console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/signout', null, authorization)
            //console.log(data);
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const register = createAsyncThunk(
    'register',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/register', obj.data)
            console.log(data);
            return {
                success: data.data.success,
                userId: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const update_user = createAsyncThunk(
    'update_user',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.put(apiUrl + 'users', obj.data, authorization)
            console.log(data);
            return {
                user: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                user: {}
            }
        }

    }
)

const user_google = createAsyncThunk(
    'user_google',
    async (obj) => {
        const data = obj.data ? obj.data : obj
        if (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            window.location.reload();
            return {
                user: data.user,
                token: data.token
            }
        }
        return {
            user: null
        }
    })


const user_actions = { read_user, signin, signin_token, signout, update_user, register, user_google }
export default user_actions