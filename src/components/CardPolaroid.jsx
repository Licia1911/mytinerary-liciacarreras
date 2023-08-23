import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({ src, alt, text, id }) {
    return (
        <Anchor to={ '/city/'+id } className="w-5/12 flex flex-col items-center p-2 m-4 bg-slate-100">
            <img className="w-[240px] h-[75px]" src={src} alt={alt} />
            <p className="text-[14px] font-bold">{text}</p>
        </Anchor>
    )
}
