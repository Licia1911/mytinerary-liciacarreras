import { useRef } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import IconoAnimado from "../components/IconoAnimado"
import { useDispatch, useSelector } from "react-redux"
import user_actions from "../store/actions/users"
import UserLogged from "../components/UserLogged"
const { signin } = user_actions
import Swal from "sweetalert2"


export default function FormSignIn() {

    const navigate = useNavigate()
    const mail_signin = useRef()
    const password_signin = useRef()
    const dispatch = useDispatch()

    async function handleSignIn() {
        let data = {
            mail: mail_signin.current.value,
            password: password_signin.current.value,
        };
        dispatch(signin({ data }))
            .then(res => {
                console.log(res)
                if (res.payload.token) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Logged in!',
                    });
                    navigate("/");
                } else if (res.payload.messages.length > 0) {
                    //let html = res.payload.messages.join('<br>')
                    let html = res.payload.messages
                        .map((each) => `<p>${each}</p>`)
                        .join("");
                    Swal.fire({
                        title: "Something went wrong!",
                        icon: "error",
                        html,
                    });
                }
            })
            .catch(err => console.log(err))
    }
    let user = useSelector(store => store.users.user)
    console.log(user)



    return (
        <>
            <div className=" flex flex-col h-[120vh] bg-cover bg-center justify-around items-center sm:flex-row" style={{ backgroundImage: `url(./img/backgroundLog.jpg)` }}>
                <div className="flex flex-col justify-center items-center">
                    <UserLogged />
                    <div className="w-[50%] flex flex-col items-center text-center justify-center sm:pl-20 pb-16 mt-20">
                        <h1 className="text-4xl mx-3 font-bold mb-16" >My Tinerary</h1>
                        <IconoAnimado />
                    </div>
                </div>
                <div className='flex flex-col w-[400px]  bg-neutral-50 p-6 lg:ml-[300px] '>

                    <h1 className=' text-[20px] items-start justify-center pb-4'>Sign In</h1>
                    <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer'>
                        <img src="../../public/img/google.png" alt="" className='w-[30px] h-[30px] mr-2' />
                        <p className=' text-[14px] font-semibold ml-2'>Continue with Google</p>
                    </div>
                    <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer'>
                        <img src="../../public/img/faceb.png" alt="" className='w-[23px] h-[23px] mr-2' />
                        <p className=' text-[14px] font-semibold ml-2'>Continue with facebook</p>
                    </div>
                    <div className='flex items-end justify-center'>
                        <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2'></div>
                        <img src="../../public/img/O.png" alt="O" className='flex m-2' />
                        <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2'></div>
                    </div>
                    <p className=' text-[12px] tetx-[#1C1C1C] font-semibold mt-4'>Sign up with email</p>
                    <Anchor to='/auth/signup' className=' text-[12px] tetx-[#1C1C1C] pb-2'>Already have an account? <span className='text-bold cursor-pointer text-blue-600 underline '>Sign up</span></Anchor>
                    <form className="flex flex-col grow justify-center items-center ">

                        <input
                            ref={mail_signin}
                            type="email"
                            className=" w-[350px] text-[12px] border-b  h-[60px]"
                            name="mail_signin"
                            id="mail_signin"
                            defaultValue=""
                            placeholder="Type Mail" />
                        <input
                            ref={password_signin}
                            type="password"
                            className=" w-[350px] text-[12px] border-b  h-[60px] "
                            name="password_signin"
                            id="password_signin"
                            defaultValue=""
                            placeholder="Type Password" />
                        <input
                            type="button"
                            className="text-white w-[350px] py-1 text-center bg-[#4F46E5] cursor-pointer mt-10  rounded-xl"
                            value="Sign In!"
                            onClick={handleSignIn}
                        />

                    </form>

                </div>
            </div>

        </>
    )
}
