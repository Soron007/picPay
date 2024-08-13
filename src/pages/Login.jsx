import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
                <h1 className="text-2xl font-bold mb-4 text-center">Join Us!</h1>
                <form>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="enter email" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black" />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="enter password" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black" />
                    </div>

                    <a href="#" className='text-xs text-blue-600 hover:text-black'>Forgot Password</a>

                    {/* login with account */}
                    <div className='flex items-center justify-center mt-5 mb-4 px-3 py-3 rounded-md border-2 border-gray-400 hover:border-black hover:bg-black  bg-slate-300/[0.2]'>
                        <button type="submit" className='text-xs text-green-600 transition-all duration-200'>Login</button>

                        
                        
                    </div>
                    <button className='flex items-center justify-center mt-5 mb-4 px-3 py-3 rounded-md border-2 border-gray-400 bg-black  bg-slate-300/[0.2] w-full text-white'>
                    <Link className='text-xs text-black font-semibold' to={'/signup'}>Create Account</Link>
                    </button>
                    
                </form>

            </div>
        </div>
    )
}

export default Login
