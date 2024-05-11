import { useState } from "react"
import Logo from "/openlabnetworks-favicon-white.png"
export default function Navbar() {
    // State to track whether the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Open Lab Networks Logo" />
                    <span className="self-center text-3xl font-bold whitespace-nowrap ">Open Lab Networks</span>
                </a>
                <button
                    onClick={toggleMenu} // Call toggleMenu function when the button is clicked
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"} // Update aria-expanded based on menu state
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className=" flex">
                        <li>
                            <a href="/" className="p-4 hover:underline underline-offset-4" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/" className="p-4 hover:underline underline-offset-4" >About</a>
                        </li>
                        <li>
                            <a href="/" className="p-4 hover:underline underline-offset-4" >Contact Us</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
}