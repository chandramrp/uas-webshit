import React from "react";
import { useTheme } from "../context/ThemeContext";

const Features = () => {
    const { darkMode } = useTheme();

    const features = [
        {
            title: "Mentor Berpengalaman",
            description:
                "Dibimbing langsung oleh praktisi industri dengan pengalaman lebih dari 5 tahun",
            icon: (
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Kurikulum Terstruktur",
            description:
                "Materi pembelajaran yang komprehensif dan sesuai kebutuhan industri",
            icon: (
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
            ),
        },
        {
            title: "Proyek Portofolio",
            description:
                "Bangun portofolio profesional melalui proyek-proyek nyata",
            icon: (
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
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-down">
                    <h2
                        className={`text-3xl font-extrabold sm:text-4xl drop-shadow-md ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Kenapa Memilih Kami?
                    </h2>
                    <p
                        className={`mt-4 text-lg ${
                            darkMode ? "text-blue-200" : "text-gray-600"
                        }`}
                    >
                        Keunggulan program bootcamp kami yang telah terbukti
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-hover animate-fade-in-up backdrop-blur-sm"
                                style={{
                                    animationDelay: `${index * 200}ms`,
                                }}
                            >
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white transform transition-transform duration-300 hover:rotate-12 shadow-elegant hover:shadow-neon">
                                    {feature.icon}
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900 drop-shadow-sm">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
