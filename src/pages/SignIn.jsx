import { useRef, useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import IconoAnimado from '../components/IconoAnimado'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import user_actions from '../store/actions/users'
const { singin } = user_actions

export default function SingIn() {

    // const name = useRef("")
    // const lastName = useRef("")
    // const country = useRef("")
    // const photo = useRef("")
    // const mail = useRef("")
    // const password = useRef("")

    const mail_signin = useRef("");
    const password_signin = useRef("");
    const dispatch = useDispatch()

    async function handleSignIn() {
        let data = {
            mail: mail_signin.current.value,
            password: password_signin.current.value,
        };
        dispatch(singin({data}));
    }

    let user = useSelector(store => store)
    console.log(user)

    //const [changeForm, setChangeForm] = useState(true)

    return (
        <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white m-auto">
            <h1 className="text-[36px] font-bold text-center mb-[10px]">Sign In!</h1>
            <input
                ref={mail_signin}
                type="text"
                className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="mail_signin"
                id="mail_signin"
                defaultValue=""
                placeholder="Type Mail"
            />
            <input
                ref={password_signin}
                type="password"
                className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="password_signin"
                id="password_signin"
                defaultValue=""
                placeholder="Type Password"
            />
            <input
                type="button"
                className="mb-[10px] w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                value="Sign In!"
                onClick={handleSignIn}
            />
            <p>
                Don't you have an account?{" "}
                <Anchor
                    className="text-[20px] font-bold text-purple-500 cursor-pointer"
                    to='/signup'
                >
                    Sign up!
                </Anchor>
            </p>
        </form>

        // <div className=" flex flex-col h-[120vh] bg-cover bg-center justify-around items-center sm:flex-row" style={{ backgroundImage: `url(./img/backgroundLog.jpg)` }}>
        //     <div className="w-[50%] flex items-center text-center justify-center md:pl-20 pb-16 mt-20">
        //         <h1 className="text-4xl mx-3 font-bold" >My Tinerary</h1>
        //         <IconoAnimado />
        //     </div>
        //     {changeForm ? <div className='flex flex-col w-[360px] h-[480px] bg-neutral-50 p-10 md:w-[400px]'>
        //         <div>
        //             <p className=' text-[12px] tetx-[#1C1C1C] pb-1'>step 1 of 2</p>
        //             <h1 className=' text-[30px] font-semibold items-start justify-center pb-4'>Sign in</h1>
        //         </div>
        //         <div className='flex h-[30px] w-full'>
        //             <p className='flex h-[30px] text-[12px] tetx-[#1C1C1C] pb-1 mr-2'>New User?</p>
        //             <Anchor to={'/auth/signup'} className=" text-[#4F46E5] hover:text-sky-600 flex text-[12px] ">Create an account </Anchor>
        //         </div>
        //         <form className=' text-[12px] mb-2'>
        //             <input ref={mail} type="text" className=' w-[300px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='mail' id='mail' placeholder='Email' />
        //         </form>
        //         <div className="flex h-[70px] items-end justify-end">
        //             <div className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[14px] text-center cursor-pointer w-[80px] h-13 p-1 mb-2 mr-2" onClick={() => setChangeForm(!changeForm)} >Continue </div>
        //         </div>
        //         <div className='flex items-end justify-center'>
        //             <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-1'></div>
        //             <img src="../../public/img/O.png" alt="O" className='flex m-1' />
        //             <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-1'></div>
        //         </div>
        //         <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer'>
        //             <img src="../../public/img/google.png" alt="" className='w-[30px] h-[30px]' />
        //             <p className=' text-[14px] text-[#1c1c1c] font-semibold ml-2'>Continue with Google</p>
        //         </div>
        //         <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] bg-[#1877f2] p-[15px] cursor-pointer'>
        //             <img src="../../public/img/faceb.png" alt="" className='w-[23px] h-[23px]' />
        //             <p className=' text-[14px] text-white font-semibold ml-2'>Continue with facebook</p>
        //         </div>
        //     </div> : <div className='flex flex-col w-[400px] h-[500px] bg-neutral-50 p-10'>
        //         <div>
        //             <p className=' text-[12px] tetx-[#1C1C1C] pb-1'>step 2 of 2</p>
        //             <h1 className=' text-[30px] font-semibold items-start justify-center pb-4'>Enter your password</h1>
        //         </div>
        //         <div className='flex h-[60px] w-full'>
        //             <img src="../../public/img/Ellipse 707.png" alt="User" className=' w-[55px] h-[54px] '/>
        //             <div className=' flex flex-col items-start justify-center ml-2 '>
        //                 <p className=' text-[12px] '>miemail@gmail.com</p>
        //                 <p className=' text-[12px] '>Personal Account</p>
        //             </div>
        //         </div>
        //         <form className=' text-[12px] mb-2 flex items-center justify-between'>
        //             <input ref={password} type="password" className=' w-[300px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='password' id='password' placeholder='Password' />
        //             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 mt-8">
        //                 <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
        //                 <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
        //                 <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /> 
        //             </svg> */}

        //         </form>
        //         <div className="flex h-[70px] items-end justify-end">
        //             <div className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[14px] text-center cursor-pointer w-[80px] h-13 p-1 mb-2 mr-2">Continue </div>
        //         </div>
        //         <div className='flex items-end justify-center'>
        //             <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-1'></div>
        //             <img src="../../public/img/O.png" alt="O" className='flex m-1' />
        //             <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-1'></div>
        //         </div>
        //         <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer'>
        //             <img src="../../public/img/google.png" alt="" className='w-[30px] h-[30px]' />
        //             <p className=' text-[14px] text-[#1c1c1c] font-semibold ml-2'>Continue with Google</p>
        //         </div>
        //         <div className=' flex items-center justify-center w-[310px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] bg-[#1877f2] p-[15px] cursor-pointer'>
        //             <img src="../../public/img/faceb.png" alt="" className='w-[23px] h-[23px]' />
        //             <p className=' text-[14px] text-white font-semibold ml-2'>Continue with facebook</p>
        //         </div>
        //     </div>}
        // </div>
    )
}
