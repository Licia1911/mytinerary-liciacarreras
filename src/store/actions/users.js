import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_user = createAsyncThunk(
    'read_user',
    async({userId})=>{
        try {
            let data = await axios(apiUrl+'users/'+userId)
            console.log(data)
            return{
                user: data.data.response
            }
        } catch (error) {
            console.log(error)
            return{
                users: []
            }
        }
    }
)
const signin = createAsyncThunk(
    'signin',
    async(obj)=>{
        try {
            let data = await axios.post(apiUrl+'auth/signin',obj.data)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
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

const user_actions = { read_user, signin }
export default user_actions