import { useRef, useEffect } from "react";
import apiUrl from "../apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
const { user_google } = user_actions


export default function () {

    let googleButton = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCredentialResponse = async (response) => {
        console.log(response)

        const data = { token_google: response.credential };
        console.log(data)
        const userResponse = await axios.post(apiUrl + "auth/google", data);
        dispatch(user_google(userResponse.data.response))

    };
    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_ID,
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "outline", size: "large", text: 'signin_with' }  // customization attributes
            );
        }

    }, []);

    navigate("/");


    return <div ref={googleButton}></div>;

}