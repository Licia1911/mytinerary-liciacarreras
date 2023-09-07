import { Link as Anchor } from "react-router-dom"
import LoginIcon from "./LoginIcon";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
const { signout } = user_actions





export default function LogIn_Out() {

    // Función para manejar la acción de logout
    const handleLogout = () => {
        // Realiza la acción de logout aquí
        dispatch(signout());
    };

    let photo = useSelector((store) => store.users.user?.photo);
    let mail = useSelector((store) => store.users.user?.mail);
    let dispatch = useDispatch();
    return (
        <div>

            {mail ? ( // Verifica si el usuario está autenticado
                <button
                    className="flex items-center justify-center font-bold gap-2 bg-[#4F46E5] py-2 w-[150px] text-white rounded-lg hover:bg-blue-300 hover:text-slate-900" 
                    onClick={handleLogout}
                >
                    <img className=" w-[40px] rounded-full" src={photo} alt="Photo User" /> Log Out
                </button>
            ) : (
                // Si el usuario no está autenticado, muestra el botón de Log In
                <Anchor
                    to="/signin"
                    className="flex items-center font-bold gap-2 bg-white px-3 py-2 w-[100px] text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900"
                    style={{ backgroundColor: "#4F46E5", color: "white" }}
                >

                    <LoginIcon />
                    Login
                </Anchor>
            )}
        </div>
    )
}