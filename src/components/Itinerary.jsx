import { useState } from "react"
import Activity from "../components/Activity"

export default function Itinerary({ name, price, duration, tags, photo }) {

    const [show, setShow] = useState(false)
    return (
        <main>
            <div className="flex grow flex-col items-center justify-center mt-5 px-20">
                <div className="w-[750px] h-[850px] flex flex-col items-center justify-start bg-slate-100 mb-4">
                    <p className=" flex items-center justify-center mb-5 text-[28px] font-bold m-4">{name}</p>
                    <div className=" w-[650px] h-[500px] flex items-center justify-center bg-slate-700">
                        <img className="w-[650px] h-[500px]" src={photo} alt="photo" />
                    </div>
                    <div className="flex w-[650px] h-[120px] mt-10 py-5 m-6 items-center justify-between ">
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px]">
                            <p className=" flex text-md font-bold">User:</p>
                            <img className="flex p-2" src="../../public/img/Ellipse705.png" alt="User" />
                            <p className=" flex text-center text-sm">Usuario</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[200px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Hashtags:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{tags}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Duration:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{duration}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Price:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{price} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg></p>
                        </div>
                    </div>
                    <div className="flex w-[650px] h-[40px] mt-5 p-5 items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        {show ? (<div onClick={() => setShow(!show)} className="hidden sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></div>) : (<div onClick={() => setShow(!show)} className="hidden sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>)}
                    </div>
                </div>
                {show ? <Activity /> : <h1></h1>}
                
            </div>
        </main>
    )
}
