import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Course from "./components/Course";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <div className="min-h-screen">
                        <Navbar />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Hero />
                                        <Course />
                                        <Features />
                                    </>
                                }
                            />
                            <Route path="/kursus" element={<CoursePage />} />
                            <Route path="/tentang" element={<AboutPage />} />
                            <Route path="/kontak" element={<ContactPage />} />
                            <Route
                                path="/dashboard"
                                element={<DashboardPage />}
                            />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
