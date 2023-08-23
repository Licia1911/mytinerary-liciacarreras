import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import apiUrl from "../apiUrl"
import { Link as Anchor } from "react-router-dom"
import IconoAnimado from "../components/IconoAnimado"




export default function CityDetails() {
    const { city_id } = useParams()
    const [city, setCity] = useState([])


    useEffect(
        () => {
            axios(apiUrl + 'cities/' + city_id)
                .then(res => {
                    setCity(res.data.response)
                    console.log(city_id)
                })
                .catch(err => console.log(err))
        }, []
    )


    return (
        <>

            <div className=" text-black mt-10 flex justify-center items-center text-5xl font-bold">
                <h1>City Details</h1>
            </div>
            <div className=" p-5 ">
                <img className=" rounded-xl w-[100%]" src={city.photo} alt={city.country} />
            </div>
            <div className="flex flex-col justify-center items-center" >
                <p className="text-black text-2xl font-bold " >{city.city} </p>
                <p className="text-black font-semibold flex mt-2"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.69008 16.932L6.69288 16.9333C6.89 17.019 7 16.999 7 16.999C7 16.999 7.11 17.019 7.30791 16.9329L7.30992 16.932L7.31565 16.9294L7.33381 16.921C7.34884 16.9141 7.36967 16.9043 7.39591 16.8916C7.44837 16.8663 7.52255 16.8296 7.61533 16.7812C7.80078 16.6845 8.06121 16.5409 8.37166 16.3485C8.99123 15.9645 9.81736 15.3816 10.6455 14.5834C12.3022 12.9866 14 10.4915 14 6.99902C14 3.13303 10.866 -0.000976562 7 -0.000976562C3.13401 -0.000976562 0 3.13303 0 6.99902C0 10.4915 1.69783 12.9866 3.35452 14.5834C4.18264 15.3816 5.00877 15.9645 5.62834 16.3485C5.93879 16.5409 6.19922 16.6845 6.38467 16.7812C6.47745 16.8296 6.55163 16.8663 6.60409 16.8916C6.63033 16.9043 6.65116 16.9141 6.66619 16.921L6.68435 16.9294L6.69008 16.932ZM7 9.24902C8.24264 9.24902 9.25 8.24166 9.25 6.99902C9.25 5.75638 8.24264 4.74902 7 4.74902C5.75736 4.74902 4.75 5.75638 4.75 6.99902C4.75 8.24166 5.75736 9.24902 7 9.24902Z" fill="black" />
                </svg>{city.country}</p>
            </div>
            <div className="flex pt-[50px] ml-5 mb-9 items-center justify-center">
                <Anchor to={'/cities'} className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-xl text-center items-center cursor-pointer w-[200px] h-13 ml-10 p-3">Back to Cities</Anchor>
                <IconoAnimado />
            </div>
            <div className="flex items-center justify-center text-black font-bold mt-2 mb-8" >
                <p className="flex justify-between w-[30%]" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
                    <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                    <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
                    Page Cities Detail under construction<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
                        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                        <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                </p>
            </div>
        </>
    )
}