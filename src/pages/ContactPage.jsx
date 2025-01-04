import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from "react-icons/fi";

const ContactPage = () => {
    const { darkMode } = useTheme();

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
                            className={`text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down ${
                                darkMode
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                                    : "text-white"
                            }`}
                        >
                            Hubungi Kami
                        </h1>
                        <p
                            className={`text-xl max-w-3xl mx-auto animate-fade-in-up ${
                                darkMode ? "text-gray-300" : "text-blue-100"
                            }`}
                        >
                            Kami siap membantu Anda. Silakan hubungi kami melalui
                            form di bawah ini atau melalui kontak yang tersedia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div
                            className={`p-8 rounded-xl transform hover:scale-[1.02] transition-all duration-500 ${
                                darkMode
                                    ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20 hover:border-blue-500/40 shadow-lg hover:shadow-blue-500/10"
                                    : "bg-white/10 hover:bg-white/20 backdrop-blur-lg"
                            }`}
                        >
                            <form className="space-y-6">
                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            darkMode
                                                ? "text-blue-300"
                                                : "text-white"
                                        }`}
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                            darkMode
                                                ? "bg-gray-900/50 border border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                                : "bg-white/10 border-white/20 text-white focus:border-blue-300"
                                        }`}
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>
                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            darkMode
                                                ? "text-blue-300"
                                                : "text-white"
                                        }`}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                            darkMode
                                                ? "bg-gray-900/50 border border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                                : "bg-white/10 border-white/20 text-white focus:border-blue-300"
                                        }`}
                                        placeholder="nama@email.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            darkMode
                                                ? "text-blue-300"
                                                : "text-white"
                                        }`}
                                    >
                                        Pesan
                                    </label>
                                    <textarea
                                        rows="4"
                                        className={`w-full px-4 py-2 rounded-lg focus:ring-2 transition-all duration-300 ${
                                            darkMode
                                                ? "bg-gray-900/50 border border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-400/50"
                                                : "bg-white/10 border-white/20 text-white focus:border-blue-300"
                                        }`}
                                        placeholder="Tulis pesan Anda di sini..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transform hover:scale-[1.02] transition-all duration-300 ${
                                        darkMode
                                            ? "bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 hover:from-blue-800 hover:via-indigo-800 hover:to-blue-800 border border-blue-500/30 shadow-lg shadow-blue-900/30"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            {[
                                {
                                    icon: <FiMail className="w-6 h-6" />,
                                    title: "Email",
                                    info: "chandramuhammadrizkip@gmail.com",
                                },
                                {
                                    icon: <FiPhone className="w-6 h-6" />,
                                    title: "Telepon",
                                    info: "+62 821-XXXX-XXXX",
                                },
                                {
                                    icon: <FiMapPin className="w-6 h-6" />,
                                    title: "Alamat",
                                    info: "Jalan Baleendah, Benua Antartica, Africa",
                                },
                                {
                                    icon: <FiMessageCircle className="w-6 h-6" />,
                                    title: "Media Sosial",
                                    info: "@dudungbootcamp",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-500 ${
                                        darkMode
                                            ? "bg-gray-800/50 hover:bg-gray-800 border border-blue-500/20 hover:border-blue-500/40"
                                            : "bg-white/10 hover:bg-white/20 backdrop-blur-lg"
                                    }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className={`p-3 rounded-lg ${
                                                darkMode
                                                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                                    : "bg-blue-500"
                                            } text-white`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3
                                                className={`text-lg font-semibold ${
                                                    darkMode
                                                        ? "text-white"
                                                        : "text-white"
                                                }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <p
                                                className={
                                                    darkMode
                                                        ? "text-gray-300"
                                                        : "text-blue-100"
                                                }
                                            >
                                                {item.info}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 