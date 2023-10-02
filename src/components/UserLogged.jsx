import { useSelector } from "react-redux"
import user_actions from "../store/actions/users"
const { signin, signout, user, user_google } = user_actions




export default function UserLogged() {
    let mail = useSelector((store) => store.users.user?.mail);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);

    return (
        <div>
            {mail && ( // Verifica si el usuario está autenticado
                <div className=" flex flex-row items-center justify-center">
                    <img className=" w-[150px] rounded-full" src={photo} alt="Photo User" />
                    <p className=" p-5 font-bold text-[24px]">Hola, {name}!</p>
                </div>
            )}
        </div>
    )
}
