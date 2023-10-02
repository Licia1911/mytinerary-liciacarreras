import { useState } from "react"
import Display from "./Display"
import Label from "./Label"

import LogIn_Out from "./LogIn_Out"
import user_actions from "../store/actions/users"
const { signout } = user_actions

export default function NavBar() {
    let [show, setShow] = useState(false)
    let options = [
        { to: '/', title: 'Home' },
        { to: '/cities', title: 'Cities' },
        // { to: '/profile', title: 'Profile' }

    ]

    return (
        <header className=" h-[70px] bg-slate-300 flex items-center justify-between md:ps-[50px] pe-[200px]">
            <div className="flex items-center justify-start">
                <img className="w-[60px]" src="/img/logo_mt.png" alt="Logo My Tinerary" />
                <h1 className="text-xl mx-3 font-bold" >My Tinerary</h1>
            </div>
            <div className="w-[300px] flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setShow(!show)} className="w-[30px] h-[30px] ml-28 cursor-pointer md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {show ? <Display options={options} /> : (null)}
                <Label options={options} />
                <LogIn_Out />

            </div>
        </header>
    )
}
