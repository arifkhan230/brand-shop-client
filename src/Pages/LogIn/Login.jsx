import { FaLock, FaUserCircle } from 'react-icons/fa';
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="max-w-[1440px] mx-4 lg:mx-auto">
            <div className="lg:w-1/3 lg:mx-auto border p-4 lg:p-10 my-10 lg:my-40 bg-gray-200 rounded">
                <h2 className="text-2xl text-center font-bold mb-6">LogIn Now!!</h2>
                <form >
                    <div className='relative'>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered rounded-full w-full placeholder:text-black" id="" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaUserCircle></FaUserCircle></span>
                    </div>
                    <div className='relative mt-6'>
                        <input type="password" name="password" placeholder="Your Password" className="input input-bordered rounded-full w-full placeholder:text-black" id="" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaLock></FaLock></span>
                    </div>
                    <div className='mt-4 flex justify-between px-2'>
                        <div>
                            <input type="checkbox" name="remember" id="" />
                            <span className='ml-2'>Remember me</span>
                        </div>
                        <div>
                            <a className='text-blue-600 ' href="#">Forgot password</a>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <button className='btn w-full text-white rounded-full bg-purple-400 hover:bg-purple-600' type="submit">LogIn</button>
                    </div>
                </form>

                <div className='flex items-center border-2 border-purple-400 py-2 rounded-full mt-6'>
                    <img className='w-6 h-6 ml-6' src={google} alt="" />
                    <p className='text-lg ml-12'>Login with google</p>
                </div>
                
                    <p className='mt-4 text-center font-medium'>Do not have an account? Please <Link to="/register" className='text-blue-800 underline'>Register</Link> </p>
                

            </div>
        </div>
    );
};

export default Login;