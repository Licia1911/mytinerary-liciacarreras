import { useRef, useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import IconoAnimado from '../components/IconoAnimado'
import { Link as Anchor } from 'react-router-dom'

export default function SingIn() {
    
    const name = useRef("")
    const lastName = useRef("")
    const country = useRef("")
    const photo = useRef("")
    const mail = useRef("")
    const password = useRef("")

    const [changeForm, setChangeForm] = useState(true)

    return (
            <div className="row flex h-[100vh] bg-cover bg-center justify-around items-center" style={{ backgroundImage: `url(./img/backgroundLog.jpg)` }}>
                <div className="w-[50%] flex items-center pl-20 pb-16">
                    <h1 className="text-4xl mx-3 font-bold" >My Tinerary</h1>
                    <IconoAnimado />
                </div>
                <div className='flex flex-col w-[400px] h-[500px] bg-neutral-50 p-10'>
                    <div>
                    <p className=' text-[12px] tetx-[#1C1C1C] pb-4'>step 1 of 2</p>
                    <h1 className=' text-[30px] font-semibold items-start justify-center pb-4'>Sign in</h1>
                    </div>
                    <div className='flex h-[30px] w-full'>
                    <p className='flex h-[30px] text-[12px] tetx-[#1C1C1C] pb-2 mr-2'>New User?</p>
                    <Anchor to={ '/auth/signup' } className=" text-[#4F46E5] hover:text-sky-600 flex text-[12px] ">Create an account </Anchor> 
                    </div>
                    <form className=' text-[12px] mb-4'>
                        <input ref={mail} type="text" className=' w-[300px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='mail' id='mail' placeholder='Email' />
                    </form>
                    <div className="flex h-[70px] items-end justify-end">
                        <div className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[14px] text-center cursor-pointer w-[80px] h-13 p-1 mb-2 mr-2" onClick={() => setChangeForm(!changeForm)} >Continue </div>
                    </div>
                    <div className='flex items-end justify-center'>
                        <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2'></div>
                        <img src="../../public/img/O.png" alt="O" className='flex m-2'/>
                        <div className=' w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2'></div>
                    </div>
                    <div className=' flex items-center w-[310px] h-[25px] border-solid border-slate-900 mt-10 p-[15px]'>
                        <img src="../../public/img/google.png" alt="" />
                    </div>
                </div>

            </div>

    )
}
