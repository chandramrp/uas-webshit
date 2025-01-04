import React from "react";

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

export default LogoutConfirmModal;
