import { useEffect, useState, useRef } from "react"
import axios from "axios"
import apiUrl from '../../src/apiUrl.js'
import Card from "../components/Card"


export default function Cities() {

    const [cities, setCities] = useState([])
    const [reEffect,setReEffect] = useState(true)
    const text = useRef()


    useEffect(
        () => {
            axios(apiUrl + 'cities?city='+text.current.value)
                //.then(res => console.log(res.data.response))
                .then(res => setCities(res.data.response))
                .catch(err => console.log(err))
        }, //callback, no retorna nada y no puede ser asincrona (por eso le pongo llaves)
        [reEffect]       //Array de dependencias - Cuando está vacio se ejecuta una sola vez cuando se monta el componente.
        //Cuando tiene variables de dependencia el EFECTO se ejecuta cada vez que cambia alguna de esas variables.
    )

    function handleFilter() {
        console.log(text.current.value)
        setReEffect(!reEffect)
    }


    return (
        <main className="flex flex-col grow">
            <div className="w-full relative">
                <img className="w-full" src="../../public/img/GARDENStrees.jpg" alt="" />
                <div className="flex flex-col items-center justify-center text-center w-[470px] absolute top-2/3 left-1/3">
                    <h1 className="text-5xl text-white" >Cities</h1>
                    <p className="text-3xl text-white" >Collection of the most beautiful places and experience</p>
                </div>
                /</div>
            <div className="w-auto bg-slate-200 items-center justify-center">
            <div className='max-w-md mx-auto mt-6'>
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        ref={text}
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search your city"
                        onKeyUp={handleFilter} />
                </div>
            </div>
                <div className="flex w-full items-center justify-between px-6 mt-12 ">
                    <div className="relative flex flex-wrap justify-between">
                        {cities.map(each => <Card key={each._id} src={each.photo} alt={each.id} text={each.city} country={each.country} id={each._id}/>)}
                    </div>
                </div>
            </div>
        </main>
    )
}
