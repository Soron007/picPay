import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
                <h1 className="text-2xl font-bold mb-4 text-center">Join Us!</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <input type="text" name="username" id="username" placeholder="enter username" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black" />


                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="enter email" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black" />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="enter password" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black" />
                    </div>

                    {/* for account selection */}
                    <div className="mb-4">
                        <label htmlFor="accountType" className="block text-sm font-medium text-gray-:700 mb-2">Select your account Type</label>
                        <select name="account type" className="shadow-md rounded-md w-full px-3 py-2 border border-green-700 focus:border-blue-400 focus:outline-none focus:ring-black">

                            <option value="">Type</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    {/* login with account */}
                    <div className='flex items-center justify-center mb-4 px-3 py-3 rounded-md border-2 border-gray-400 hover:border-black hover:bg-black  bg-slate-300/[0.2]'>
                        <Link className='text-xs text-green-600 transition-all duration-200' to={'/login'}>Login with Account</Link>
                    </div>

                    <button className='w-full px-3 py-3 rounded-md shadow-md text-sm font-medium text-white bg-black' type='submit'>Signup</button>
                </form>

            </div>
        </div>
    )
}

export default Signup
