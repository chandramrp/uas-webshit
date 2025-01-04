import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
    const { darkMode } = useTheme();

    return (
        <footer className={`${darkMode ? "bg-gray-900" : "bg-primary"}`}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-white text-2xl font-bold">
                            DudungBootcamp
                        </span>
                        <p
                            className={`mt-4 ${
                                darkMode ? "text-gray-400" : "text-gray-300"
                            }`}
                        >
                            Membangun karir teknologi impianmu bersama mentor
                            terbaik di industri. Bergabunglah dengan ribuan
                            alumni sukses kami.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Program
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Full Stack Development",
                                "UI/UX Design",
                                "Data Science",
                                "Mobile Development",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className={`${
                                            darkMode
                                                ? "text-gray-400 hover:text-white"
                                                : "text-gray-300 hover:text-white"
                                        } transition-colors duration-300`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Kontak
                        </h3>
                        <ul className="space-y-2">
                            <li
                                className={
                                    darkMode ? "text-gray-400" : "text-gray-300"
                                }
                            >
                                <span className="block">Email:</span>
                                chandramuhammadrizkip@gmail.com
                            </li>
                            <li
                                className={
                                    darkMode ? "text-gray-400" : "text-gray-300"
                                }
                            >
                                <span className="block">Telepon:</span>
                                +62 821-XXXX-XXXX
                            </li>
                            <li
                                className={
                                    darkMode ? "text-gray-400" : "text-gray-300"
                                }
                            >
                                <span className="block">Alamat:</span>
                                Jalan Baleendah
                                <br />
                                Benua Antartica, Africa
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`mt-8 pt-8 border-t ${
                        darkMode ? "border-gray-800" : "border-gray-700"
                    }`}
                >
                    <p
                        className={`text-center ${
                            darkMode ? "text-gray-400" : "text-gray-300"
                        }`}
                    >
                        © 2024 DudungBootcamp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
