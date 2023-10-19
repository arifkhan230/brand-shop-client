import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import userLogo from '../../assets/profile-user.png'


const Navbar = () => {
    const { logOut, user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My cart</NavLink></li>
    </>

    return (
        <div className="navbar max-w-[1440px] lg:mx-auto py-4 bg-gray-200 rounded">
            <div className="flex lg:navbar-start border w-full justify-between">
                <a className="btn btn-ghost normal-case text-xl">My Logo</a>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user && <>
                                <img className="w-16 rounded-full h-16 " src={user.photoURL ? user.photoURL : userLogo } />
                                <li>
                                    <p className="text-xl font-semibold">{user.displayName}</p>
                                </li>
                                <li><button onClick={handleLogout} className="btn btn-sm bg-purple-600 text-white">Logout</button></li>
                            </>
                        }
                        {
                            navLinks
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ? <div className="dropdown dropdown-left dropdown-bottom">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p className="text-xl font-semibold">{user.displayName}</p>
                            </li>
                            <li><button onClick={handleLogout} className="btn btn-sm bg-purple-600 text-white">Logout</button></li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'> <button className="btn btn-primary">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;
