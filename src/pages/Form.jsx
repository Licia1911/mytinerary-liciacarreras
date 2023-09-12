import { useRef } from 'react'
import Swal from "sweetalert2";
import { Link as Anchor, useNavigate } from 'react-router-dom'
import IconoAnimado from '../components/IconoAnimado';
import { useDispatch } from "react-redux"
import user_actions from '../store/actions/users'
const { register } = user_actions;


export default function FormSignUp() {
    const navigate = useNavigate();
    const name = useRef("")
    const lastName = useRef("")
    const country = useRef("")
    const photo = useRef("")
    const mail = useRef("")
    const password = useRef("")
    const dispatch = useDispatch()

    let countries = ["Argentina", "France", "Spain", "Canada", "United States", "Germany", "Brazil", "Chile"]

    async function handleSignUp() {

        let data = {
            name: name.current.value,
            lastName: lastName.current.value,
            country: country.current.value,
            photo: photo.current.value,
            mail: mail.current.value,
            password: password.current.value
        }

        if (photo.current.value === "") {
            delete data.photo
        }

        try {
            dispatch(register({ data }))
                .then(response => {
                    console.log(response);
                    if (response.payload.userId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successfully registered!',
                            showConfirmButton: false,
                            timer: 3500
                        })
                        navigate('/signin')
                    } else {
                        let html = response.payload.messages.map(each => (`<p>${each}</p>`)).join('');
                        console.log(html);
                        Swal.fire({
                            icon: 'error',
                            title: 'Something went wrong!',
                            html
                        })
                    }
                })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Register Error',
                text: 'Something went wrong!',
            })
        }

    }



    return (
        <>
            <div className="flex grow flex-col h-[120vh] bg-cover bg-center justify-around items-center sm:flex-row" style={{ backgroundImage: `url(../img/backgroundLog.jpg)` }}>
                <div className="w-[50%] flex items-center text-center justify-center sm:pl-20 pb-10">
                    <h1 className="text-4xl mx-3 font-bold " >My Tinerary</h1>
                    <IconoAnimado />
                </div>
                <div className='flex  flex-col  w-[400px]  bg-neutral-50 p-6 '>

                    <h1 className=' text-[20px] items-start justify-center pb-2'>Create account</h1>
                    <div className='flex items-center justify-start '>
                        <img src="../../public/img/google.png" alt="Google" className=' w-[50px] h[50px] mr-2' />
                        <img src="../../public/img/faceb.png" alt="Facebook" className=' w-[50px] h[50px]' />
                    </div>

                    <p className=' text-[12px] tetx-[#1C1C1C] font-semibold mt-4'>Sign up with email</p>
                    <Anchor to='/signin' className=' text-[12px] tetx-[#1C1C1C] pb-2'>Already have an account? <span className='text-bold cursor-pointer text-blue-600 underline '>Sign in</span></Anchor>
                    <form className=' text-[12px] mb-4'>
                        <input ref={mail} type="email" className=' w-[346px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='mail' id='mail' placeholder='Email' />
                        <input ref={password} type="password" className=' w-[346px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='password' id='password' placeholder='Password' />
                        <input ref={name} type="text" className=' w-[166px] text-[12px] border-b border-[#1c1c1c] h-[60px] m-1' name='name' id='name' placeholder='First Name' />
                        <input ref={lastName} type="text" className=' w-[166px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='lastName' id='lastName' placeholder='Last Name' />
                        <input ref={photo} type="text" className=' w-[346px] text-[12px] border-b border-[#1c1c1c] h-[60px]' name='photo' id='photo' placeholder='Type Photo' />
                        <div className='flex items-center justify-start w-full mt-2'>
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select ref={country} id="countries" className=" w-[166px] flex text-sm">
                                <option value="">Country/Region</option>
                                {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                            </select>
                        </div>
                        <div className="flex">
                            <div className="flex items-center h-5 mt-2">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            </div>
                            <div className="ml-2 text-sm mt-2">
                                <label htmlFor="helper-checkbox" className="text-[12px] tetx-[#1C1C1C]">Please contact me via email</label>
                            </div>
                        </div>
                        <div>
                            <p className='text-[12px] tetx-[#1C1C1C] mt-1'>By clicking Create account, I agree that I have read and accepted the <span className='text-blue-600 underline cursor-pointer'>Terms of Use</span>Terms of Use and <span className='text-blue-600 underline cursor-pointer'>Privacy Policy</span>.</p>
                        </div>
                        <div className="flex h-[80px] items-end justify-end">
                            <div className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[16px] text-center cursor-pointer w-[100px] h-13 p-1 mr-2" onClick={handleSignUp}>Continue </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
