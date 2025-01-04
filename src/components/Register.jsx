import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = ({ isOpen, onClose }) => {
    const { darkMode } = useTheme();
    const { signInWithGoogle } = useAuth();

    if (!isOpen) return null;

    const handleGoogleRegister = async () => {
        try {
            await signInWithGoogle();
            onClose();
        } catch (error) {
            console.error("Error registering with Google:", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div
                className={`relative w-full max-w-md p-8 mx-4 rounded-2xl shadow-2xl transform transition-all ${
                    darkMode
                        ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border border-blue-500/20"
                        : "bg-white"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                        darkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-700/50"
                            : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Header */}
                <h2
                    className={`text-2xl font-bold mb-6 ${
                        darkMode
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                            : "text-gray-900"
                    }`}
                >
                    Daftar Akun Baru
                </h2>

                {/* Form */}
                <form className="space-y-4 mb-6">
                    <div>
                        <label
                            className={`block text-sm font-medium mb-1 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/50"
                            }`}
                            placeholder="Masukkan nama lengkap"
                        />
                    </div>
                    <div>
                        <label
                            className={`block text-sm font-medium mb-1 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/50"
                            }`}
                            placeholder="nama@email.com"
                        />
                    </div>
                    <div>
                        <label
                            className={`block text-sm font-medium mb-1 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/50"
                            }`}
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label
                            className={`block text-sm font-medium mb-1 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/50"
                            }`}
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 rounded-lg font-semibold text-white transform hover:scale-[1.02] transition-all duration-300 ${
                            darkMode
                                ? "bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 hover:from-blue-800 hover:via-indigo-800 hover:to-blue-800 border border-blue-500/30 shadow-lg shadow-blue-900/30"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        Daftar
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div
                        className={`absolute inset-0 flex items-center ${
                            darkMode ? "text-gray-600" : "text-gray-400"
                        }`}
                    >
                        <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span
                            className={`px-2 ${
                                darkMode
                                    ? "bg-gray-900 text-gray-400"
                                    : "bg-white text-gray-500"
                            }`}
                        >
                            Atau daftar dengan
                        </span>
                    </div>
                </div>

                {/* Google Register Button */}
                <button
                    onClick={handleGoogleRegister}
                    className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transform hover:scale-[1.02] transition-all duration-300 ${
                        darkMode
                            ? "bg-white text-gray-900 hover:bg-gray-100"
                            : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                    }`}
                >
                    <FcGoogle className="w-6 h-6" />
                    <span>Daftar dengan Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;
