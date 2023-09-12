export default function Users({ user, show, setShow }) {
    return (
        <div className="w-[360px] h-[460px] flex flex-col justify-center items-center bg-tertiary sm: bg-gray-200 p-[20px] mt-[6px] ">
            <p className="my-2 text-center">{user.name}</p>
            <p className="my-2 text-center">{user.lastName}</p>
            <p className="my-2 text-center">{user.country}</p>
            <img className="my-2 h-full object-cover rounded-full" src={user.photo} />
            {show ? (
                <input
                    type="button"
                    className="w-full shadow bg-[#4F46E5] hover:bg-blue-300 hover:text-slate-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                    value="Hide!"
                    onClick={() => setShow(!show)}
                />
            ) : (
                <input
                    type="button"
                    className="w-full shadow bg-[#4F46E5] hover:bg-blue-300 hover:text-slate-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                    value="Update!"
                    onClick={() => setShow(!show)}
                />
            )}
        </div>
    );
}