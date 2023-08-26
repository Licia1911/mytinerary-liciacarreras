import IconoAnimado from "../components/IconoAnimado"

export default function Boton(props) {

    // const [mostrar, setMostrar] = useState(true)

    // const manejarClick = () => {
    //     setMostrar(!mostrar)
    // }

    return (
        <div className="flex h-[80px] items-end justify-center mt-40">
            <div className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[16px] text-center cursor-pointer w-[150px] h-13 p-1 mb-8" onClick={props.cambiarMostrar}>View Itineraries ↓ </div>
            <IconoAnimado />
        </div>
    )
}
