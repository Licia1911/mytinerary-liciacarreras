import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const { read_user, signin, signin_token, signout, register, update_user, user_google } = user_actions;

const initial_state = {
    user: [],
    user: {},
    token: "",
    messages: [],
};

const user_reducer = createReducer(initial_state, (builder) =>
    builder
        .addCase(read_user.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
            };
            return new_state;
        })
        .addCase(signin.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            };
            return new_state;
        })
        .addCase(signin_token.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
            return new_state;
        })
        .addCase(signout.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
            return new_state;
        }).addCase(
            register.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    success: action.payload.success,
                    user: action.payload.user,
                    messages: action.payload.messages
                }
                return new_state
            }
        ).addCase(
            update_user.fulfilled,
            (state, action) => {
                let new_state = {
                    ...state,
                    user: action.payload.user
                }
                return new_state
            }
        ).addCase(user_google, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
);

export default user_reducer;
