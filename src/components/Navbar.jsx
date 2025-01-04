import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSwitchToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const handleSwitchToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const menuItems = [
        { title: "Beranda", path: "/" },
        { title: "Kursus", path: "/kursus" },
        { title: "Tentang", path: "/tentang" },
        { title: "Kontak", path: "/kontak" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? darkMode
                            ? "bg-gray-900/90 shadow-lg backdrop-blur-md border-b border-gray-800"
                            : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg"
                        : darkMode
                        ? "bg-gray-900/70 backdrop-blur-sm"
                        : "bg-blue-900/80 backdrop-blur-sm"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                to="/"
                                className={`text-2xl font-bold transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                                    darkMode
                                        ? "text-white hover:text-blue-300"
                                        : "text-white hover:text-blue-200"
                                }`}
                            >
                                DudungBootcamp
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="relative group"
                                >
                                    <span
                                        className={`relative text-white transition-all duration-300 font-medium ${
                                            darkMode
                                                ? "hover:text-blue-300"
                                                : "hover:text-blue-200"
                                        } ${
                                            location.pathname === item.path
                                                ? darkMode
                                                    ? "text-blue-300"
                                                    : "text-blue-200"
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                                                darkMode
                                                    ? "bg-gradient-to-r from-blue-400 to-indigo-400"
                                                    : "bg-gradient-to-r from-blue-400 to-indigo-500"
                                            } group-hover:w-full transition-all duration-300 ${
                                                location.pathname === item.path
                                                    ? "w-full"
                                                    : ""
                                            }`}
                                        ></span>
                                    </span>
                                </Link>
                            ))}

                            {/* Dark Mode Toggle Button */}
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gray-800 hover:bg-gray-700 hover:shadow-inner"
                                        : "bg-blue-800/50 hover:bg-blue-700/50"
                                }`}
                                aria-label="Toggle Dark Mode"
                            >
                                {darkMode ? (
                                    <svg
                                        className="w-6 h-6 text-amber-300 transition-transform duration-500 rotate-0 hover:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6 text-blue-100 transition-transform duration-500 hover:rotate-90"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Login/Register Buttons */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setShowLogin(true)}
                                    className={`px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                        darkMode
                                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/20"
                                            : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                                    }`}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setShowRegister(true)}
                                    className={`px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                        darkMode
                                            ? "border-2 border-blue-400 hover:bg-blue-400/10 shadow-lg shadow-blue-500/10"
                                            : "border-2 border-blue-500 hover:bg-blue-500/20"
                                    }`}
                                >
                                    Daftar
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-2">
                            <button
                                onClick={() => setShowLogin(true)}
                                className={`px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400"
                                        : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setShowRegister(true)}
                                className={`px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
                                    darkMode
                                        ? "border-2 border-blue-400 hover:bg-blue-400/10"
                                        : "border-2 border-blue-500 hover:bg-blue-500/20"
                                }`}
                            >
                                Daftar
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white w-10 h-10 relative focus:outline-none bg-blue-800/50 rounded-lg hover:bg-blue-700/50 transition-all duration-300"
                            >
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                        isOpen
                                            ? "rotate-45 translate-y-1.5"
                                            : "-translate-y-1"
                                    }`}
                                ></span>
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                        isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                ></span>
                                <span
                                    className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                        isOpen
                                            ? "-rotate-45 -translate-y-1.5"
                                            : "translate-y-1"
                                    }`}
                                ></span>
                            </button>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300"
                            >
                                {darkMode ? (
                                    <svg
                                        className="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5 text-gray-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-500 ease-in-out ${
                        isOpen
                            ? "opacity-100 max-h-64"
                            : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
                    <div
                        className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                            darkMode
                                ? "bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
                                : "bg-gradient-to-b from-blue-900 to-blue-800 backdrop-blur-lg"
                        }`}
                    >
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                                    darkMode
                                        ? "hover:bg-gray-800 hover:text-blue-300"
                                        : "hover:bg-blue-700/50 hover:shadow-lg"
                                } ${
                                    location.pathname === item.path
                                        ? darkMode
                                            ? "bg-gray-800 text-blue-300"
                                            : "bg-blue-700/50 text-blue-200"
                                        : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Modals */}
            {showLogin && (
                <Login
                    isOpen={showLogin}
                    onClose={() => setShowLogin(false)}
                    handleSwitchToRegister={handleSwitchToRegister}
                />
            )}
            {showRegister && (
                <Register
                    isOpen={showRegister}
                    onClose={() => setShowRegister(false)}
                    handleSwitchToLogin={handleSwitchToLogin}
                />
            )}
        </>
    );
};

export default Navbar;
