import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import { Link as Anchor } from 'react-router-dom'
import IconoAnimado from '../components/IconoAnimado'
import apiUrl from '../../src/apiUrl.js'
import { useSelector,useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const {read_carousel} = city_actions

export default function Home() {

    //const store = useSelector(store => store)
    //console.log(store)
    //const city_reducer = useSelector(store => store.cities)
    //console.log(city_reducer)
    const carousel = useSelector(store => store.cities.carousel)
    console.log(carousel)
    const dispatch = useDispatch()
    

    useEffect(
        () => {
            if( carousel.length === 0 ) {
                dispatch(read_carousel())
            }

        }, //callback, no retorna nada y no puede ser asincrona (por eso le pongo llaves)
        []       //Array de dependencias - Cuando está vacio se ejecuta una sola vez cuando se monta el componente.
        //Cuando tiene variables de dependencia el EFECTO se ejecuta cada vez que cambia alguna de esas variables.
    )

    return (
        <main className="w-full flex flex-wrap items-center justify-center grow">
            <div className="flex h-[500px] items-center justify-center">
                <div className="w-full flex flex-col justify-center gap-5 mr-20 sm:w-[300px] md:w-[400px]">
                    <h1 className="text-[28px] font-bold">Find the perfect destination</h1>
                    <p className="text-sm pr-18">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                    </p>
                    <div className="flex items-center justify-center sm:w-full sm:justify-start">
                        <Anchor to='/cities' className="w-[160px] h-[38px] bg-[#4F46E5] hover:bg-sky-600 flex text-white items-center justify-center shadow-xl">View More</Anchor>
                        <IconoAnimado />
                    </div>
                    <p className="mt-10 text-2xl font-['Ultra'] text-purple-800 shadow-2xl rounded-lg">
                        "Find your perfect trip, designed by insiders
                        who know and love their cities!"
                    </p>
                </div>
            </div>
            <div className="w-full h-[600px] flex flex-col items-center justify-center sm:mr-20 md:w-[500px]">
                <h1 className="text-[18px] font-bold">"Popular Mytineraries"</h1>
                <Carousel data={carousel} />
            </div>

        </main>
    )
}
