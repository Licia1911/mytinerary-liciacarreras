import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Itinerary from "../components/Itinerary"
import IconoAnimado from "../components/IconoAnimado"
import { useDispatch, useSelector } from "react-redux"
import city_actions from "../store/actions/cities"
import itinerary_actions from "../store/actions/itineraries"
const { read_city } = city_actions
const { read_itineraries_from_city } = itinerary_actions




export default function CityDetails() {
    const [show, setShow] = useState(false)
    const { city_id } = useParams()
    const dispatch = useDispatch()

    // const [mostrarIt, setMostrarIt] = useState(false)



    useEffect(
        () => {
            dispatch(read_city({ id: city_id }))
            dispatch(read_itineraries_from_city({ city_id }))
        }, []
    )

    const city = useSelector(store => store.cities.city)
    const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
    console.log(itineraries)

    return (
        <main>
            <div className=" h-[600px] grow flex flex-col items-center justify-center bg-no-repeat bg-center " style={{ backgroundImage: `url(${city.photo})` }}>
                <div className="flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-black bg-stone-400 rounded-2xl p-2 mt-10">
                    <h1>{city.city}</h1>
                </div>
                <div className="flex flex-col justify-center items-center" >
                    <p className="text-white font-semibold flex mt-10"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.69008 16.932L6.69288 16.9333C6.89 17.019 7 16.999 7 16.999C7 16.999 7.11 17.019 7.30791 16.9329L7.30992 16.932L7.31565 16.9294L7.33381 16.921C7.34884 16.9141 7.36967 16.9043 7.39591 16.8916C7.44837 16.8663 7.52255 16.8296 7.61533 16.7812C7.80078 16.6845 8.06121 16.5409 8.37166 16.3485C8.99123 15.9645 9.81736 15.3816 10.6455 14.5834C12.3022 12.9866 14 10.4915 14 6.99902C14 3.13303 10.866 -0.000976562 7 -0.000976562C3.13401 -0.000976562 0 3.13303 0 6.99902C0 10.4915 1.69783 12.9866 3.35452 14.5834C4.18264 15.3816 5.00877 15.9645 5.62834 16.3485C5.93879 16.5409 6.19922 16.6845 6.38467 16.7812C6.47745 16.8296 6.55163 16.8663 6.60409 16.8916C6.63033 16.9043 6.65116 16.9141 6.66619 16.921L6.68435 16.9294L6.69008 16.932ZM7 9.24902C8.24264 9.24902 9.25 8.24166 9.25 6.99902C9.25 5.75638 8.24264 4.74902 7 4.74902C5.75736 4.74902 4.75 5.75638 4.75 6.99902C4.75 8.24166 5.75736 9.24902 7 9.24902Z" fill="white" />
                    </svg>{city.country}</p>
                </div>
                <div className="flex flex-col w-[600px] justify-center items-center mt-10" >
                    <p className="  text-white font-semibold flex mt-1 text-center bg-stone-500 rounded-2xl shadow-2xl p-2">{city.smalldescription}</p>
                </div>
            </div>
            <div className="flex h-[20px] items-end justify-center">
                <div onClick={() => setShow(!show)} className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[16px] text-center cursor-pointer w-[150px] h-13 p-1 mb-8">{show ? ('Close') : ('View Itineraries ↓')} </div>
                <IconoAnimado />
            </div>
            <div>
                {show && itineraries.map(each => <Itinerary key={each._id} name={each.name} price={each.price}  duration={each.duration} tags={each.tags} photo={each.photo} />)}
            </div>


            {/* {mostrarIt ? itineraries.map(each => <Itinerary key={each._id} name={each.name} price={each.price} duration={each.duration} tags={each.tags} photo={each.photo} />) : <div></div>} */}

        </main>
    )
}