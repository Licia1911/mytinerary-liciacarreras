import { useEffect, useState, useRef } from "react"
import Card from "../components/Card"
import CityNotFound from "../components/CityNotFound.jsx"
import IconoAnimado from "../components/IconoAnimado.jsx"
import { useSelector, useDispatch } from "react-redux" 
import  city_actions  from '../store/actions/cities'
const { read_cities } = city_actions



export default function Cities() {
    const cities = useSelector(store => store.cities.cities)
    const [reEffect, setReEffect] = useState(true)
    const text = useRef()
    const dispatch = useDispatch()
    console.log(cities)


    useEffect(
        () => {
            dispatch( read_cities({text: text.current?.value}) )
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
            <div className='h-[50vh] bg-cover bg-center justify-center items-center flex' style={{ backgroundImage: `url(./img/welcome.jpg)` }}>

                <div className='flex flex-col justify-center w[20px] items-center'>
                    <p className='text-5xl bg-slate-300 rounded-xl'>Cities</p>
                    <p className='text-3xl bg-slate-300 rounded-xl mb-8'>Collection of the most beatiful places and experience</p>
                    <IconoAnimado />
                </div>
            </div>
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
                            name="text"
                            id="text"
                            placeholder="Search your city"
                            onKeyUp={handleFilter} />
                    </div>
                </div>
                <div className="flex w-full items-center justify-between px-6 mt-12 ">
                    <div className="relative flex flex-wrap justify-between">
                        {cities.length != 0 ?
                            cities.map(each => <Card key={each._id} src={each.photo} alt={each.id} text={each.city} country={each.country} id={each._id} />) : <div><CityNotFound /></div>}
                    </div>
                </div>
            </div>
        </main>
    )
}
