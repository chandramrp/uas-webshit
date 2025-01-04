import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FiTarget, FiUsers, FiAward, FiBook, FiHeart } from "react-icons/fi";

const AboutPage = () => {
    const { darkMode } = useTheme();

    const stats = [
        {
            number: "1000+",
            label: "Alumni Sukses",
            icon: <FiUsers className="w-6 h-6" />,
        },
        {
            number: "50+",
            label: "Mentor Profesional",
            icon: <FiAward className="w-6 h-6" />,
        },
        {
            number: "30+",
            label: "Program Kursus",
            icon: <FiBook className="w-6 h-6" />,
        },
        {
            number: "95%",
            label: "Tingkat Kepuasan",
            icon: <FiHeart className="w-6 h-6" />,
        },
    ];

    const values = [
        {
            title: "Visi Kami",
            description:
                "Menjadi platform pendidikan teknologi terdepan yang memberdayakan individu untuk mencapai potensi terbaik mereka dalam dunia digital.",
            icon: <FiTarget className="w-8 h-8" />,
        },
        {
            title: "Misi Kami",
            description:
                "Menyediakan pendidikan teknologi berkualitas tinggi yang terjangkau dan aksesibel bagi semua, dengan fokus pada pembelajaran praktis dan pengembangan karir.",
            icon: <FiBook className="w-8 h-8" />,
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
            {/* Hero Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1
                            className={`text-4xl md:text-5xl pb-3 font-bold mb-6 animate-fade-in-down ${
                                darkMode
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                                    : "text-white"
                            }`}
                        >
                            Tentang DudungBootcamp
                        </h1>
                        <p
                            className={`text-xl max-w-3xl mx-auto animate-fade-in-up ${
                                darkMode ? "text-gray-300" : "text-blue-100"
                            }`}
                        >
                            Membangun masa depan digital Indonesia melalui
                            pendidikan teknologi yang berkualitas dan inovatif
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gray-800/50 border border-blue-500/20 hover:border-blue-500/40"
                                        : "bg-white/10 backdrop-blur-lg"
                                }`}
                            >
                                <div
                                    className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    } text-white`}
                                >
                                    {stat.icon}
                                </div>
                                <h3
                                    className={`text-3xl font-bold mb-2 ${
                                        darkMode
                                            ? "text-blue-300"
                                            : "text-blue-200"
                                    }`}
                                >
                                    {stat.number}
                                </h3>
                                <p
                                    className={
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-blue-100"
                                    }
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20 hover:border-blue-500/40"
                                        : "bg-white/10 hover:bg-white/20 backdrop-blur-lg"
                                }`}
                            >
                                <div
                                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                                        darkMode
                                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                            : "bg-blue-500"
                                    } text-white`}
                                >
                                    {value.icon}
                                </div>
                                <h3
                                    className={`text-2xl font-bold mb-4 ${
                                        darkMode ? "text-white" : "text-white"
                                    }`}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    className={`text-lg ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-blue-100"
                                    }`}
                                >
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2
                            className={`text-3xl font-bold mb-4 ${
                                darkMode
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                                    : "text-white"
                            }`}
                        >
                            Kenapa Memilih Kami?
                        </h2>
                    </div>
                    <div
                        className={`p-8 rounded-xl ${
                            darkMode
                                ? "bg-gray-800/50 border border-blue-500/20"
                                : "bg-white/10 backdrop-blur-lg"
                        }`}
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div
                                className={`${
                                    darkMode ? "text-gray-300" : "text-blue-100"
                                }`}
                            >
                                <h3
                                    className={`text-xl font-bold mb-4 ${
                                        darkMode ? "text-white" : "text-white"
                                    }`}
                                >
                                    Pembelajaran Berkualitas
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Kurikulum yang selalu diperbarui</li>
                                    <li>
                                        Instruktur berpengalaman dari industri
                                    </li>
                                    <li>Metode pembelajaran interaktif</li>
                                    <li>Proyek nyata dari industri</li>
                                </ul>
                            </div>
                            <div
                                className={`${
                                    darkMode ? "text-gray-300" : "text-blue-100"
                                }`}
                            >
                                <h3
                                    className={`text-xl font-bold mb-4 ${
                                        darkMode ? "text-white" : "text-white"
                                    }`}
                                >
                                    Dukungan Karir
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Konsultasi karir one-on-one</li>
                                    <li>Akses ke jaringan industri</li>
                                    <li>Portfolio development</li>
                                    <li>Job placement assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
