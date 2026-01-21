import React from 'react';
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
// import backgroundImage from "../../Assets/Imgs/BharatPaper_logo.png"
const Homepage = () => {
    const navigate = useNavigate();

    const sectionRef = useRef(null);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar/>
            <div className="hero min-h-screen relative overflow-hidden">
                {/* 1. Dedicated Background Layer */}
                <div
                    className="absolute inset-0 z-0
               /* 1. Base (Mobile) Styles */
               blur-sm
               /* 2. Tablet Styles */
               md:blur-sm md:scale-105
               /* 3. Desktop Styles */
               lg:blur-sm lg:scale-90"
                    style={{
                        backgroundImage: `url('/Assets/Imgs/BharatPaper_logo.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // REMOVED: filter and transform from here
                    }}
                ></div>

                {/* 2. Overlays (Darkness or Color Tint) */}
                <div className="hero-overlay bg-opacity-100 z-10"></div>

                {/* 3. Optional Glassmorphism layer */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-20"></div>

                {/* 4. Content Layer */}
                <div className="hero-content text-neutral-content text-center relative z-30">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Bharat Paper Mart</h1>
                        <p className="mb-5 text-xl">
                            Search products and find their detailed specifications all in one place.

                        </p>
                        <button onClick={() => navigate('/product')} className="btn btn-primary text-lg ">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded">
                    <div>
                        <p className="text-red-950">Copyright © 2024 - All right reserved by SpecList</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Homepage;