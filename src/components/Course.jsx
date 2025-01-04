import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Register from "./Register";
import Login from "./Login";

const Course = () => {
    const { darkMode } = useTheme();
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSwitchToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleSwitchToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const courses = [
        {
            title: "Full Stack Development",
            description:
                "Pelajari teknologi web modern dari frontend hingga backend",
            duration: "12 Minggu",
            icon: "💻",
        },
        {
            title: "UI/UX Design",
            description: "Kuasai prinsip desain dan tools industri terkini",
            duration: "8 Minggu",
            icon: "🎨",
        },
        {
            title: "Data Science",
            description: "Analisis data dan machine learning untuk bisnis",
            duration: "16 Minggu",
            icon: "📊",
        },
        {
            title: "Mobile Development",
            description: "Buat aplikasi mobile untuk Android dan iOS",
            duration: "10 Minggu",
            icon: "📱",
        },
    ];

    return (
        <section
            className={`py-20 ${
                darkMode
                    ? "bg-gray-900"
                    : "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-down">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200">
                        Program Bootcamp Unggulan
                    </h2>
                    <p className="mt-4 text-lg text-blue-200">
                        Pilih program yang sesuai dengan tujuan karirmu
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`bg-opacity-50 backdrop-blur-md rounded-xl shadow-2xl ${
                                darkMode
                                    ? "bg-gray-800 hover:shadow-blue-500/10"
                                    : "bg-blue-800/50 hover:shadow-blue-500/30"
                            }`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            <div className="p-6">
                                <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                                    {course.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                                    {course.title}
                                </h3>
                                <p className="text-blue-200 mb-4">
                                    {course.description}
                                </p>
                                <div className="flex items-center text-blue-300">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-800">
                                <button
                                    onClick={() => setShowRegister(true)}
                                    className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                                >
                                    Daftar Sekarang
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Register Modal */}
            {showRegister && (
                <Register
                    isOpen={showRegister}
                    onClose={() => setShowRegister(false)}
                    handleSwitchToLogin={handleSwitchToLogin}
                />
            )}

            {/* Login Modal */}
            {showLogin && (
                <Login
                    isOpen={showLogin}
                    onClose={() => setShowLogin(false)}
                    handleSwitchToRegister={handleSwitchToRegister}
                />
            )}
        </section>
    );
};

export default Course;
