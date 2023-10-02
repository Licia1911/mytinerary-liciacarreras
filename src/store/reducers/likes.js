import { createReducer } from "@reduxjs/toolkit";
import like_actions from "../actions/likes";
const { read_likes, create_likes } = like_actions;

const initial_state = {
    likes: {},

};

const like_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_likes.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                messages: action.payload.messages,
                likes: action.payload.likes,
            }
            return new_state

        }

    ).addCase(
        create_likes.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                likes: action.payload.likes
            }
            return new_state
        }
    )
)


export default like_reducer