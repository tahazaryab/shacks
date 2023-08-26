import { useNavigate } from "react-router-dom";
const Login = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full rounded-md border-slate-200 mx-auto mt-4 bg-white p-8 border">
                <div className="mt-5">
                    <div className="text-3xl font-bold text-gray-900 mb-3 text-center">Welcome to</div>
                    <img src={process.env.PUBLIC_URL + '/assets/scotia-logo-4.png'} className="mx-auto mb-10 h-10 object-cover" alt="logo" />
                </div>
                <form action="" className="space-y-6 mx-5">
                    <div className="flex items-center border-b border-black py-2">
                        <img src={process.env.PUBLIC_URL + '/assets/profile.webp'} className="mx-auto h-7 object-cover" alt="logo" />
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Username or card number" />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        <img src={process.env.PUBLIC_URL + '/assets/lock.png'} className="mx-auto h-7 object-cover" alt="logo" />
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Password" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="ml-1 my-1 h-5 w-5 text-blue-300 rounded" />
                        <label htmlFor="" className="ml-2 text-sm text-black">Remember me</label>
                    </div>
                    <div>
                        <button className="mt-3 w-full py-2 px-4 bg-red-100 hover:bg-red-700 rounded-md text-white font-bold text-base" onClick={() => navigate('/home')}>Sign In</button>
                    </div>
                    <div>
                        <p className="text-center font-bold text-base text-sky-700 mb-10"><a href="" className="hover:underline underline-offset-3">Need help signing in?</a> &gt;</p>
                    </div>
                </form>
            </div>
            <div className="max-w-md w-full mx-auto mt-6">
                <p className="text-center font-light text-lg ">Don't have an account? <a href="" className="font-semibold underline decoration-1 decoration-dotted hover:decoration-solid underline-offset-4">Set one up now.</a></p>
            </div>
        </div>
    );
  };
  
  export default Login;
  
