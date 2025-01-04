import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm, darkMode }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            <div
                className={`relative w-full max-w-sm p-6 mx-4 rounded-xl shadow-2xl transform transition-all ${
                    darkMode
                        ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border border-blue-500/20"
                        : "bg-white"
                }`}
            >
                <h3
                    className={`text-xl font-semibold mb-4 ${
                        darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                    Konfirmasi Logout
                </h3>
                <p
                    className={`mb-6 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    Apakah Anda yakin ingin keluar dari akun Anda?
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            darkMode
                                ? "text-gray-300 hover:bg-gray-800"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        Batal
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 ${
                            darkMode
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-red-500 hover:bg-red-600"
                        }`}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const location = useLocation();
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSwitchToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const handleSwitchToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const handleLogout = async () => {
        try {
            await logout();
            setShowLogoutConfirm(false);
        } catch (error) {
            console.error("Error logging out:", error);
        }
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
                className={`fixed w-full z-50 transition-all duration-700 ease-in-out transform ${
                    scrolled
                        ? darkMode
                            ? "bg-gray-950/85 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
                            : "bg-gradient-to-r from-blue-950/90 via-blue-900/90 to-blue-950/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_30px_-12px_rgba(29,78,216,0.45)]"
                        : darkMode
                        ? "bg-transparent"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                to="/"
                                className={`text-xl font-bold transition-all duration-700 ${
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
                                        className={`relative text-white transition-all duration-700 font-medium ${
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
                                            className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-700 ${
                                                darkMode
                                                    ? "bg-blue-400"
                                                    : "bg-blue-400"
                                            } group-hover:w-full ${
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
                                className={`p-2 rounded-lg transition-all duration-500 transform hover:scale-110 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/20"
                                        : "bg-blue-800/50 hover:bg-blue-700/50 hover:shadow-lg hover:shadow-blue-300/20"
                                }`}
                                aria-label="Toggle Dark Mode"
                            >
                                {darkMode ? (
                                    <svg
                                        className="w-5 h-5 text-amber-300 transform transition-transform duration-500 rotate-0 hover:rotate-180"
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
                                        className="w-5 h-5 text-blue-100 transform transition-transform duration-500 rotate-0 hover:-rotate-180"
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

                            {/* Login/Register/User Buttons */}
                            <div className="flex items-center space-x-2">
                                {user ? (
                                    <>
                                        <Link
                                            to="/dashboard"
                                            className={`px-4 py-1.5 text-sm text-white font-semibold rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400"
                                                    : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                                            }`}
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogoutClick}
                                            className={`px-4 py-1.5 text-sm text-white font-semibold rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? "border border-blue-400 hover:bg-blue-400/10"
                                                    : "border border-blue-500 hover:bg-blue-500/20"
                                            }`}
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => setShowLogin(true)}
                                            className={`px-4 py-1.5 text-sm text-white font-semibold rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400"
                                                    : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                                            }`}
                                        >
                                            Login
                                        </button>
                                        <button
                                            onClick={() =>
                                                setShowRegister(true)
                                            }
                                            className={`px-4 py-1.5 text-sm text-white font-semibold rounded-lg transition-all duration-300 ${
                                                darkMode
                                                    ? "border border-blue-400 hover:bg-blue-400/10"
                                                    : "border border-blue-500 hover:bg-blue-500/20"
                                            }`}
                                        >
                                            Daftar
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-2">
                            {user ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className={`px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
                                            darkMode
                                                ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400"
                                                : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                                        }`}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogoutClick}
                                        className={`px-4 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
                                            darkMode
                                                ? "border-2 border-blue-400 hover:bg-blue-400/10"
                                                : "border-2 border-blue-500 hover:bg-blue-500/20"
                                        }`}
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
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
                                </>
                            )}
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
                                className={`p-2 rounded-lg transition-all duration-500 transform hover:scale-110 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/20"
                                        : "bg-blue-800/50 hover:bg-blue-700/50 hover:shadow-lg hover:shadow-blue-300/20"
                                }`}
                            >
                                {darkMode ? (
                                    <svg
                                        className="w-5 h-5 text-amber-300 transform transition-transform duration-500 rotate-0 hover:rotate-180"
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
                                        className="w-5 h-5 text-blue-100 transform transition-transform duration-500 rotate-0 hover:-rotate-180"
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

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
                        darkMode
                            ? "bg-gray-800 hover:bg-gray-700 text-blue-400"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}

            <LogoutConfirmModal
                isOpen={showLogoutConfirm}
                onClose={() => setShowLogoutConfirm(false)}
                onConfirm={handleLogout}
                darkMode={darkMode}
            />

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
