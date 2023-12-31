import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../apiUrl'

const read_comments = createAsyncThunk(
    'read_comments',
    async (obj) => {
        try {
            let data = await axios(apiUrl + 'comments?itinerary_id=' + obj);
            return {
                comments: data.data.response
            }
        } catch (error) {
            // console.log(error)
            return {
                comments: []
            }
        }
    }
)

const create_comment = createAsyncThunk(
    'create_comment',
    async (obj) => {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } };
            let data = await axios.post(apiUrl + 'comments', obj, authorization);
            return {
                commentCreated: data.data.response

            }
        } catch (error) {
            console.log(error)
            return {
                commentCreated: {}
            }
        }
    }
)

const update_comment = createAsyncThunk(
    'update_comment',
    async (obj) => {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } };
            let data = await axios.put(apiUrl + 'comments/' + obj.comment_id, obj.data, authorization);
            console.log(data)
            return {
                commentUpdated: data.data.response,
                success: data.data.success
            }
        } catch (error) {
            console.log(error)
            return {
                commentUpdated: {}
            }
        }
    }
)

const delete_comment = createAsyncThunk(
    'delete_comment',
    async (comment_id) => {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } };
            let data = await axios.delete(apiUrl + 'comments/' + comment_id, authorization);
            // console.log(data.data.success)
            return {
                commentDeleted: data.data.success
            }
        } catch (error) {
            console.log(error)
            return {
                commentDeleted: false
            }
        }
    }
)
const comments_actions = { read_comments, create_comment, update_comment, delete_comment };
export default comments_actions;