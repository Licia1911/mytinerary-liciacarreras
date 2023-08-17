import Card from "../components/Card"
import SearchBar from "../components/SearchBar"
import { Link as Anchor } from 'react-router-dom'


export default function Cities() {
    return (
        <main className="flex flex-col grow">
            <div className="w-full relative">
                <img className="w-full" src="../../public/img/acts/GARDENStrees.jpg" alt="" />
                <div className="flex flex-col items-center justify-center text-center w-[470px] absolute top-1/2 left-1/3">
                    <h1 className="text-5xl text-white" >Cities</h1>
                    <p className="text-3xl text-white" >Collection of the most beautiful places and experience</p>
                </div>

            </div>
            <div className="w-auto h-[300px] bg-slate-200 items-center justify-center">
                <SearchBar />
                <div className="flex items-center justify-between px-6 mt-12">
                    <div className="relative">
                        <Card />
                        <div className="flex items-center justify-center sm:w-full sm:justify-start absolute top-[7rem] left-5">
                            <Anchor to='/cities:city_id' className="w-[80px] h-[20px] bg-[#4F46E5] hover:bg-sky-600 flex text-white text-xs items-center justify-center shadow-xl">View More</Anchor>
                        </div>
                    </div>
                    <div className="relative">
                        <Card />
                        <div className="flex items-center justify-center sm:w-full sm:justify-start absolute top-[7rem] left-5">
                            <Anchor to='/cities:city_id' className="w-[80px] h-[20px] bg-[#4F46E5] hover:bg-sky-600 flex text-white text-xs items-center justify-center shadow-xl">View More</Anchor>
                        </div>
                    </div>
                    <div className="relative">
                        <Card />
                        <div className="flex items-center justify-center sm:w-full sm:justify-start absolute top-[7rem] left-5">
                            <Anchor to='/cities:city_id' className="w-[80px] h-[20px] bg-[#4F46E5] hover:bg-sky-600 flex text-white text-xs items-center justify-center shadow-xl">View More</Anchor>
                        </div>
                    </div>
                    <div className="relative">
                        <Card />
                        <div className="flex items-center justify-center sm:w-full sm:justify-start absolute top-[7rem] left-5">
                            <Anchor to='/cities:city_id' className="w-[80px] h-[20px] bg-[#4F46E5] hover:bg-sky-600 flex text-white text-xs items-center justify-center shadow-xl">View More</Anchor>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
