import Logo from '../assets/Logo.svg';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="border-gray-400 shadow">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between">
                <div className="flex flex-shrink-0 items-center space-x-10">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-10" alt="Little Lemon's Logo"/>
                    </a>
                    <div className="hidden md:ml-6 md:flex md:space-x-8items-center justify-start w-full md:w-auto md:order-1">
                        <ul className="flex flex-col font-heading p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className="block py-2 px-3 rounded-sm md:p-0">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-secondary-500 md:p-0">About</Link>
                            </li>
                            <li>
                                <Link to="/"
                                      className="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-secondary-500 md:p-0">Menu</Link>
                            </li>
                            <li>
                                <Link to="/"
                                      className="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-secondary-500 md:p-0">Reservations</Link>
                            </li>
                            <li>
                                <Link to="/"
                                      className="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-secondary-500 md:p-0">Order Online</Link>
                            </li>
                            <li>
                                <Link to="/"
                                      className="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-secondary-500 md:p-0">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}