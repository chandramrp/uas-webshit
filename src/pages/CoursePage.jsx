import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
    FiMonitor,
    FiCode,
    FiDatabase,
    FiSmartphone,
    FiBook,
    FiTrendingUp,
    FiUsers,
    FiAward,
} from "react-icons/fi";

const CoursePage = () => {
    const { darkMode } = useTheme();

    const courses = [
        {
            icon: <FiMonitor className="w-8 h-8" />,
            title: "Frontend Development",
            description:
                "Pelajari teknologi frontend modern seperti React, Vue, dan Angular untuk membangun UI yang responsif dan interaktif.",
            duration: "12 Minggu",
            level: "Pemula - Menengah",
            price: "Rp 8.000.000",
            features: [
                "Project-based Learning",
                "Live Mentoring",
                "Career Support",
                "Sertifikat",
            ],
        },
        {
            icon: <FiCode className="w-8 h-8" />,
            title: "Backend Development",
            description:
                "Kuasai pengembangan backend dengan Node.js, Express, dan database untuk membangun API dan server yang scalable.",
            duration: "14 Minggu",
            level: "Menengah",
            price: "Rp 9.000.000",
            features: [
                "Hands-on Practice",
                "Code Review",
                "Industry Projects",
                "Job Guarantee",
            ],
        },
        {
            icon: <FiDatabase className="w-8 h-8" />,
            title: "Data Science",
            description:
                "Pelajari analisis data, machine learning, dan visualisasi data menggunakan Python dan tools modern.",
            duration: "16 Minggu",
            level: "Menengah - Lanjut",
            price: "Rp 12.000.000",
            features: [
                "Real Dataset Projects",
                "AI/ML Workshop",
                "Industry Mentors",
                "Portfolio Building",
            ],
        },
        {
            icon: <FiSmartphone className="w-8 h-8" />,
            title: "Mobile Development",
            description:
                "Kembangkan aplikasi mobile cross-platform dengan React Native dan Flutter untuk iOS dan Android.",
            duration: "12 Minggu",
            level: "Pemula - Menengah",
            price: "Rp 8.500.000",
            features: [
                "App Store Publishing",
                "UI/UX Design",
                "Performance Optimization",
                "Cross-platform Development",
            ],
        },
    ];

    const benefits = [
        {
            icon: <FiBook className="w-6 h-6" />,
            title: "Kurikulum Terstruktur",
            description:
                "Materi pembelajaran yang komprehensif dan terstruktur sesuai kebutuhan industri",
        },
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Belajar dengan Ahli",
            description:
                "Dibimbing langsung oleh praktisi berpengalaman di bidangnya",
        },
        {
            icon: <FiUsers className="w-6 h-6" />,
            title: "Networking",
            description:
                "Bergabung dengan komunitas developer dan bangun koneksi profesional",
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            title: "Sertifikasi",
            description:
                "Dapatkan sertifikat yang diakui industri setelah menyelesaikan program",
        },
    ];

    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gray-900"
                    : "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900"
            }`}
        >
            {/* Hero Section */}
            <div className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1
                            className={`text-4xl md:text-5xl pb-3 font-bold mb-6 ${
                                darkMode
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                                    : "text-white"
                            }`}
                        >
                            Program Kursus Unggulan
                        </h1>
                        <p
                            className={`text-xl max-w-3xl mx-auto ${
                                darkMode ? "text-gray-300" : "text-blue-100"
                            }`}
                        >
                            Tingkatkan skill teknologi Anda dengan program
                            pembelajaran yang dirancang khusus oleh para ahli
                            industri
                        </p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl ${
                                    darkMode
                                        ? "bg-gray-800/50 border border-blue-500/20"
                                        : "bg-white/10 backdrop-blur-lg"
                                }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    } text-white`}
                                >
                                    {benefit.icon}
                                </div>
                                <h3
                                    className={`text-lg font-semibold mb-2 ${
                                        darkMode ? "text-white" : "text-white"
                                    }`}
                                >
                                    {benefit.title}
                                </h3>
                                <p
                                    className={
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-blue-100"
                                    }
                                >
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-8 transform hover:scale-[1.02] transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20 hover:border-blue-500/40 shadow-lg hover:shadow-blue-500/10"
                                        : "bg-white/10 hover:bg-white/20 backdrop-blur-lg shadow-xl hover:shadow-blue-500/20"
                                }`}
                            >
                                <div className="flex items-start">
                                    <div
                                        className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                                            darkMode
                                                ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                                : "bg-blue-500"
                                        } text-white`}
                                    >
                                        {course.icon}
                                    </div>
                                    <div className="ml-6">
                                        <h3
                                            className={`text-2xl font-bold mb-2 ${
                                                darkMode
                                                    ? "text-white"
                                                    : "text-white"
                                            }`}
                                        >
                                            {course.title}
                                        </h3>
                                        <p
                                            className={`mb-4 ${
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }`}
                                        >
                                            {course.description}
                                        </p>
                                        <div
                                            className={`grid grid-cols-2 gap-4 mb-6 ${
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }`}
                                        >
                                            <div>
                                                <p className="font-medium">
                                                    Durasi:
                                                </p>
                                                <p>{course.duration}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">
                                                    Level:
                                                </p>
                                                <p>{course.level}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">
                                                    Harga:
                                                </p>
                                                <p>{course.price}</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`mb-6 ${
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-blue-100"
                                            }`}
                                        >
                                            <p className="font-medium mb-2">
                                                Yang Anda Dapatkan:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1">
                                                {course.features.map(
                                                    (feature, idx) => (
                                                        <li key={idx}>
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <button
                                            className={`w-full py-3 px-6 rounded-lg font-semibold transform hover:scale-[1.02] transition-all duration-300 ${
                                                darkMode
                                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                                                    : "bg-white text-blue-900 hover:bg-blue-50"
                                            }`}
                                        >
                                            Daftar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
