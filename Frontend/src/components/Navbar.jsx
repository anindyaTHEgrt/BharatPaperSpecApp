import React from 'react';
import {useNavigate} from "react-router-dom";
import BharatPaperLogo from "../../public/Assets/Imgs/BharatPaper_logo.png"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm place-content-center">
                <div className="navbar-center ">
                    <a
                        className="btn btn-ghost hover:bg-transparent"
                        onClick={() => navigate('/')}
                    >
                        <img
                            src={BharatPaperLogo}
                            alt="SpecList Logo"
                            className="h-8 w-auto object-contain" // Limits height and maintains aspect ratio
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;