import Arrows from "./Arrows"
import CardPolaroid from "./CardPolaroid"
import { useState } from "react"


export default function Carousel({ data }) {
    console.log(data)
    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    function next_slide() {
        if (data.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
        }
    }

    function prev_slide() {
        if (counter <= 0) {
            setCounter(data.length - 4)
            setCounterTo(data.length)
        } else {
            setCounter(counter - 4)
            setCounterTo(counterTo - 4)
        }
    }

    return (
        <div className="flex w-full mt-4 justify-center items-center">
            <Arrows direction="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" onClick={prev_slide} />
            <div className="flex w-full flex-wrap justify-center mt-5">
                {data.slice(counter, counterTo).map(each => <CardPolaroid key={each._id} src={each.photo} alt={each.id} text={each.city} id={each._id} />)}
            </div>
            <Arrows direction="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" onClick={next_slide} />
        </div>
    )
}
