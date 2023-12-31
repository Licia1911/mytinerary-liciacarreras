import { useState } from "react"
import { useSelector } from "react-redux"
import Activity from "../components/Activity"
import Money from "./Money"
import LikeButton from "./LikeButton"
import Comments from "./Comments"

export default function Itinerary({ name, price, duration, tags, photo, admin_id, admin_photo, id }) {

    const user = useSelector((store) => store.users?.user)
    console.log(user)

    const [show, setShow] = useState(false)
    const money = Math.floor(price);
    const time = Math.floor(duration / 60);


    return (
        <main>
            <div className="flex grow flex-col items-center justify-center mt-5 px-20">
                <div className="w-[350px] h-[850px] flex flex-col items-center justify-start bg-slate-100 sm:w-[650px] ">
                    <p className=" flex items-center justify-center mb-5 text-[28px] font-bold m-4">{name}</p>
                    <div className=" w-[350px] h-[500px] flex items-center justify-center bg-slate-700 sm:w-[650px] ">
                        <img className="w-[650px] h-[500px]" src={photo} alt="photo" />
                    </div>
                    <div className="flex w-[350px] h-[120px] mt-10 py-5 m-6 items-center justify-between sm:w-[650px]">
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px]">
                            <p className=" flex text-md font-bold">User:</p>
                            <img className="flex p-2 w-[90px] h-[80px] rounded-full" src={admin_photo} alt="User" />
                            <p className=" flex text-center text-sm">{admin_id}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[200px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Hashtags:</p>
                            <div className="flex flex-col items-center justify-start text-center text-sm">
                                {tags.map((tag, index) => (
                                    <span key={index} className=" px-2 py-1 mb-2">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Duration:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{time} hs.</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Price:</p>
                            <p className=" flex  items-center justify-start text-center text-sm"></p>
                            <div className=" flex ">
                                <Money money={money} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[350px] h-[40px] mt-1 p-3 items-center justify-between sm:w-[550px]" >
                        <LikeButton id={id} />

                        {show ? (<div onClick={() => setShow(!show)} className=" sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></div>) : (<div onClick={() => setShow(!show)} className=" sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>)}
                    </div>
                </div>
                {show && <Activity id={id} />}
                <Comments id={id} user={user} />
            </div>
        </main>
    )
}
