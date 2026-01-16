import React from 'react';
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
// import backgroundImage from "../../Assets/Imgs/BharatPaper_logo.png"
const Homepage = () => {
    const navigate = useNavigate();

    const sectionRef = useRef(null);

    // const scrollToSection = () => {
    //     // 2. Trigger the scroll
    //     sectionRef.current.scrollIntoView({
    //         behavior: 'smooth', // This creates the "sliding" animation
    //         block: 'start'      // Aligns the top of the section to the top of the screen
    //     });
    // };

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
                        <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
                        <p className="mb-5 text-xl">
                            Search products and find their detailed specifications all in one place.

                        </p>
                        <button onClick={() => navigate('/product')} className="btn btn-primary text-lg ">Get Started</button>
                    </div>
                </div>
            </div>
            {/*<div ref={sectionRef} className={"flex justify-center mt-5 mb-5"}>*/}
            {/*    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">*/}
            {/*        <legend className="fieldset-legend text-xl">Login</legend>*/}

            {/*        <label className="label text-lg">Email</label>*/}
            {/*        <input type="email" className="input" placeholder="Email"/>*/}

            {/*        <label className="label text-lg">Password</label>*/}
            {/*        <input type="password" className="input" placeholder="Password"/>*/}

            {/*        <button className="btn btn-neutral mt-4 text-lg bg-red-950">Login</button>*/}
            {/*    </fieldset>*/}
            {/*</div>*/}
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