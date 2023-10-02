import { useSelector, useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"
const { read_activities_from_itinerary } = activity_actions
import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from "../apiURL"



export default function Activity({ id }) {



    const [activities, setActivities] = useState()
    // let name = useSelector((store =>store.activities?.activities_from_itinerary));
    // console.log(name)
    const fillActivities = () => {
        console.log(id)
        axios(apiUrl + 'activities?itinerary_id=' + id)
            .then(res => setActivities(res.data.response))
            .catch(err => {
                setActivities([])
                console.log(err)
            })
    }
    useEffect(
        () => {

            fillActivities()
        }, []
    )
    return (
        <>
            <div className="w-[350px] h-[300px] flex grow items-center  justify-start bg-slate-100 mb-4 sm:w-[650px] ">
                {activities?.map(each => <div key={each._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-1 m-4 bg-slate-300">
                    <img className="w-[200px] h-[130px]" src={each.photo} alt={each.name} />
                    <p className="text-[16px] font-bold">{each.name}</p>
                </div>
                )}
            </div>
        </>
    )

}
