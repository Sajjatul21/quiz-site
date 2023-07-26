import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="bg-slate-800 border-b-2 border-gray-500 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Left Side */}
                <NavLink to="/" className="font-bold text-4xl text-btn-color">
                    .Quiz
                </NavLink>

                {/* Right Side (Desktop) */}
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            activeClassName="font-semibold text-blue-600"
                            className=" hover:text-btn-color"
                        >
                            Topics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            activeClassName="font-semibold text-blue-600"
                            className="hover:text-btn-color"
                        >
                            Statistic
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            activeClassName="font-semibold text-blue-600"
                            className="hover:text-btn-color"
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    {!isMobileMenuOpen ? (
                        <button
                            onClick={handleMobileMenuToggle}
                            className="hover:text-btn-color focus:outline-none"
                        >
                            <Bars3Icon className="h-6 w-6 hover:text-btn-color" />
                        </button>
                    ) : (
                        <button
                            onClick={handleMobileMenuToggle}
                            className="hover:text-btn-color focus:outline-none"
                        >
                            <XMarkIcon className='w-6 h-6'></XMarkIcon>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 px-4 py-3">
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/"
                                activeClassName="font-semibold text-blue-600"
                                className="block hover:text-btn-color"
                                onClick={handleMobileMenuToggle}
                            >
                                Topics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                activeClassName="font-semibold text-blue-600"
                                className="block hover:text-btn-color"
                                onClick={handleMobileMenuToggle}
                            >
                                Statistic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                activeClassName="font-semibold text-blue-600"
                                className="block hover:text-btn-color"
                                onClick={handleMobileMenuToggle}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
