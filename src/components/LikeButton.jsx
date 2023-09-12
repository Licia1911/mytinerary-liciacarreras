import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [activo, setActivo] = useState(false);
    const mail = useSelector((store) => store.users.user?.mail);

    const toggleEstado = () => {
        if (!mail) {
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
        }
    };


    return (
        <div>
            <button className='heart-toglle like-button' onClick={toggleEstado}>
                {activo ? '❤️' : '🤍'}
                {isLiked ? '1' : ''}
            </button>
        </div>
    )
}
