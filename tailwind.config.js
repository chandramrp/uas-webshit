/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1e3a8a",
                    light: "#2563eb",
                    dark: "#1e3a8a",
                },
            },
            boxShadow: {
                neon: "0 0 5px theme(colors.primary.light), 0 0 20px theme(colors.primary.light)",
                soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
                elegant: "0 0 15px rgba(0, 0, 0, 0.1)",
                hover: "0 10px 40px -15px rgba(0, 0, 0, 0.2)",
                "inner-glow": "inset 0 2px 15px -3px rgba(0, 0, 0, 0.07)",
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "bounce-slow": {
                    "0%, 100%": {
                        transform: "translateY(-3%)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s ease-out",
                "fade-in-up": "fade-in-up 0.3s ease-out",
                "bounce-slow": "bounce-slow 3s infinite",
            },
        },
    },
    plugins: [],
};
