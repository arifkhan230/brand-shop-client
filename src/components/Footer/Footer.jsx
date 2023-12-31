import { Link } from "react-router-dom";
import carLogo from '../../assets/car-logo.png'



const Footer = () => {
    return (
        <div className=""> 

            <footer className="bg-gray-400 dark:bg-gray-900">
                <div className="lg:mx-auto w-full max-w-[1440px] p-4 py-6 lg:py-8 lg:pl-0 pl-10">
                    <div className="md:flex md:justify-around  ">
                        <div className="mb-6 md:mb-0">
                           <img className="w-full h-40 object-cover" src={carLogo} alt="" />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li>
                                        <Link to="/addProduct">Add Product</Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link to="/myCart">my Cart</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com" className="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:block ">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                    <p className="text-center text-sm mt-8"> All rights reserved By Brand Shop</p>
                </div>
            </footer>

        </div>
    );
};



export default Footer;