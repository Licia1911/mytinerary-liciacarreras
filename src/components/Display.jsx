import { Link as Anchor } from "react-router-dom"
export default function Display({options}) {
    return (
        <div className=" absolute top-[70px] flex flex-col items-center justify-center bg-slate-300 w-[150px] h-[170px] gap-2">
            {options.map(each => <Anchor key={each.to} to={each.to} className="w-[100px] flex text-[16px] font-bold items-center justify-center rounded-lg" style={{backgroundColor: each.backgroundColor, color:each.color}}>{each.icon}{each.title}</Anchor>)}
        </div>
    )
}
