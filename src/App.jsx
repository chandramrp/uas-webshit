import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Course from "./components/Course";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Router>
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
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
