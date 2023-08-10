import { Link as Anchor } from "react-router-dom"
export default function Label({ options }) {
    return (
        <div className="hidden items-center ms-5 gap-2 rounded-xl md:flex w-[300px] justify-between">
            {options.map(each => <Anchor key={each.to} to={each.to} className="w-[100px] flex text-[16px] font-bold items-center justify-center rounded-lg"style={{backgroundColor: each.backgroundColor, color:each.color}}>{each.icon}{each.title}</Anchor>)}
        </div>
    )
}
