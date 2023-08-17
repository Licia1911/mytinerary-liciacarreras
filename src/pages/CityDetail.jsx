import { useParams } from "react-router-dom"

export default function CityDetail() {
    const { city_id } = useParams() // Este hook se engancha a la URL para evaluar todos los parametros que tiene la URL
                                //Devuelve un objeto donde cada clave es la ruta dinamica definida en el enrutador y donde cada valor es el valor de la URL.
    return (
        <div className="flex grow bg-white items-center justify-center">
            <img src="../../public/img/construction.jpg" alt="" />
        </div>
    )
}
