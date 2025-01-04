import React from "react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
    const { darkMode } = useTheme();

    return (
        <div
            className={`relative py-32 ${
                darkMode
                    ? "bg-gray-900"
                    : "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900"
            }`}
        >
            {/* Background Pattern */}
            <div
                className={`absolute inset-0 ${
                    darkMode ? "bg-grid-white/[0.05]" : "bg-grid-white/[0.05]"
                } bg-[size:60px_60px]`}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1
                        className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl animate-fade-in-down ${
                            darkMode
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100"
                                : "text-white"
                        }`}
                    >
                        <span className="block">Mulai Karir Tech Anda</span>
                        <span
                            className={`block mt-2 ${
                                darkMode ? "text-blue-200" : "text-blue-100"
                            }`}
                        >
                            Bersama Kami
                        </span>
                    </h1>
                    <p
                        className={`mt-6 max-w-md mx-auto text-lg sm:text-xl md:mt-8 md:max-w-3xl animate-fade-in-up ${
                            darkMode ? "text-gray-200" : "text-white"
                        }`}
                    >
                        Pelajari teknologi terkini dari para ahli industri.
                        Bootcamp intensif dengan kurikulum yang relevan dengan
                        kebutuhan industri.
                    </p>
                    <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
                        <div className="rounded-md shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                            <a
                                href="#enroll"
                                className={`w-full flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg md:text-lg md:px-12 transform hover:scale-105 transition-all duration-300 ${
                                    darkMode
                                        ? "bg-white text-gray-900 hover:bg-blue-50 border-2 border-blue-200/20 hover:border-blue-200/40"
                                        : "bg-white text-blue-900 hover:bg-blue-50"
                                }`}
                            >
                                Daftar Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
