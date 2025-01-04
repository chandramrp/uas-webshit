import React, { useEffect } from "react";

const Toast = ({ message, type = "success", isVisible, onClose, darkMode }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const getToastStyles = () => {
        switch (type) {
            case "success":
                return darkMode
                    ? "bg-green-900/90 border-green-500/20"
                    : "bg-green-500 border-green-600/20";
            case "error":
                return darkMode
                    ? "bg-red-900/90 border-red-500/20"
                    : "bg-red-500 border-red-600/20";
            default:
                return darkMode
                    ? "bg-blue-900/90 border-blue-500/20"
                    : "bg-blue-500 border-blue-600/20";
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
            <div
                className={`px-4 py-3 rounded-lg shadow-lg border ${getToastStyles()} text-white flex items-center space-x-2`}
            >
                {type === "success" && (
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
                {type === "error" && (
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
                <p className="font-medium">{message}</p>
            </div>
        </div>
    );
};

export default Toast;
