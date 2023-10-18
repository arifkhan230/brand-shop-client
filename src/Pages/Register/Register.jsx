import { FaLock, FaUserCircle } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";


const Register = () => {



    const handleRegister = event =>{
        event.preventDefault()
        console.log('connected')
    }

    return (
        <div className="max-w-[1440px] mx-4 lg:mx-auto">
             <div className="lg:w-1/3 w-full p-4 my-8 lg:mx-auto border lg:p-10 lg:my-32 bg-gray-200 rounded">
                <h2 className="text-2xl text-center font-bold mb-6">Register Now!!</h2>
                <form onSubmit={handleRegister}>
                    {/* name */}
                    <div className='relative mb-6'>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered rounded-full w-full placeholder:text-black" id="name" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaUserCircle></FaUserCircle></span>
                    </div>
                    {/* email */}
                    <div className='relative'>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered rounded-full w-full placeholder:text-black" id="email" required />
                        <span className='absolute right-6 top-3 text-2xl'><HiMail></HiMail></span>
                    </div>
                    {/* password */}
                    <div className='relative mt-6'>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-full w-full placeholder:text-black" id="password" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaLock></FaLock></span>
                    </div>
                    {/* confirm password */}
                    <div className='relative mt-6'>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered rounded-full w-full placeholder:text-black" id="confirmPassword" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaLock></FaLock></span>
                    </div>
                    {/* photo */}
                    <div className='relative mt-6'>
                        <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered rounded-full w-full placeholder:text-black" id="photo" required />
                        <span className='absolute right-6 top-3 text-2xl'><FaImage></FaImage></span>
                    </div>
                    
                    <div className='mt-6'>
                        <button className='btn w-full text-white rounded-full bg-purple-400 hover:bg-purple-600' type="submit">Register</button>
                    </div>
                </form>
                    <p className='mt-4 text-center font-medium'>Do not have an account? Please <Link to="/login" className='text-blue-800 underline'>Login</Link> </p>
                
            </div>
        </div>
    );
};

export default Register;