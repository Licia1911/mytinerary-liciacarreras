import React, { useState, useEffect } from 'react'
import like_actions from '../store/actions/likes';
import { useDispatch, useSelector } from "react-redux"
import Swal from 'sweetalert2';


const { read_likes, create_likes } = like_actions


export default function LikeButton({ id }) {

    console.log(id)


    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [activo, setActivo] = useState(false);



    async function toggleEstado() {
        dispatch(create_likes({ itinerary_id: id }))

            // console.log(id)

            .then(res => {

                if (res.payload.token) {

                    // El usuario no está logueado, mostrar el alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You must log in to be able to like!',
                    });
                } else {
                    // Usuario logueado, manejar el cambio de estado como antes
                    setActivo(!activo);
                    if (!isLiked) {
                        setIsLiked(true);
                        setLikeCount(likeCount + 1);

                    } else {
                        setIsLiked(false);
                        setLikeCount(likeCount - 1);
                    }
                };
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='like-button flex items-center space-x-2 pb-3'>
            <button onClick={toggleEstado} className={`w-8 h-8 focus:outline-none   ${isLiked ? "text-red-500" : "text-black"
                }`}>
                {isLiked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="red"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                )}
            </button>
            <span className={`text-gray-700 ${isLiked ? 'text-red-500' : ''}`}>
                {likeCount} {likeCount === 1 ? "like" : "likes"}
            </span>
        </div>
    );
}