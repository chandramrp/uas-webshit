import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import {
    FiBook,
    FiClock,
    FiCalendar,
    FiAward,
    FiUser,
    FiBarChart2,
} from "react-icons/fi";

const DashboardPage = () => {
    const { darkMode } = useTheme();
    const { user } = useAuth();

    const enrolledCourses = [
        {
            title: "Full Stack Development",
            progress: 65,
            nextClass: "React Advanced - State Management",
            schedule: "Senin, 19:00 WIB",
            instructor: "John Doe",
        },
        {
            title: "UI/UX Design",
            progress: 40,
            nextClass: "User Research Methods",
            schedule: "Rabu, 20:00 WIB",
            instructor: "Jane Smith",
        },
    ];

    return (
        <div
            className={`min-h-screen pt-20 ${
                darkMode
                    ? "bg-gray-900"
                    : "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900"
            }`}
        >
            {/* Welcome Section */}
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1
                            className={`text-3xl md:text-4xl font-bold mb-4 animate-fade-in-down ${
                                darkMode
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                                    : "text-white"
                            }`}
                        >
                            Selamat Datang, {user?.displayName || "Student"}!
                        </h1>
                        <p
                            className={`text-lg animate-fade-in-up ${
                                darkMode ? "text-gray-300" : "text-blue-100"
                            }`}
                        >
                            Lanjutkan perjalanan belajar Anda
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className={`p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20"
                                    : "bg-white/10 backdrop-blur-lg"
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`p-3 rounded-lg ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    }`}
                                >
                                    <FiBook className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-400"
                                                : "text-blue-200"
                                        }
                                    >
                                        Kursus Aktif
                                    </p>
                                    <h3 className="text-2xl font-bold text-white">
                                        2
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20"
                                    : "bg-white/10 backdrop-blur-lg"
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`p-3 rounded-lg ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    }`}
                                >
                                    <FiClock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-400"
                                                : "text-blue-200"
                                        }
                                    >
                                        Total Jam Belajar
                                    </p>
                                    <h3 className="text-2xl font-bold text-white">
                                        48 Jam
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                darkMode
                                    ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20"
                                    : "bg-white/10 backdrop-blur-lg"
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`p-3 rounded-lg ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    }`}
                                >
                                    <FiAward className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-400"
                                                : "text-blue-200"
                                        }
                                    >
                                        Sertifikat
                                    </p>
                                    <h3 className="text-2xl font-bold text-white">
                                        1
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enrolled Courses */}
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className={`text-2xl font-bold mb-6 ${
                            darkMode ? "text-white" : "text-white"
                        }`}
                    >
                        Kursus Saya
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {enrolledCourses.map((course, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20"
                                        : "bg-white/10 backdrop-blur-lg"
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {course.title}
                                </h3>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span
                                            className={
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-blue-200"
                                            }
                                        >
                                            Progress
                                        </span>
                                        <span className="text-white">
                                            {course.progress}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-2"
                                            style={{
                                                width: `${course.progress}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FiCalendar
                                            className={`w-5 h-5 mr-2 ${
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-blue-200"
                                            }`}
                                        />
                                        <span
                                            className={
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }
                                        >
                                            {course.schedule}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiBook
                                            className={`w-5 h-5 mr-2 ${
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-blue-200"
                                            }`}
                                        />
                                        <span
                                            className={
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }
                                        >
                                            {course.nextClass}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiUser
                                            className={`w-5 h-5 mr-2 ${
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-blue-200"
                                            }`}
                                        />
                                        <span
                                            className={
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }
                                        >
                                            {course.instructor}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-white transform hover:scale-[1.02] transition-all duration-300 ${
                                        darkMode
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                >
                                    Lanjutkan Belajar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
