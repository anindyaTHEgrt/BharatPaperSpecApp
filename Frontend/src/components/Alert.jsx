import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import DevStatusPage from "@/pages/DevStatusPage.jsx";

const Alert = () => {

    const [visible, setVisible] = useState(true);
    const handleClose = () => {
        setVisible(false);
    };

    const navigate = useNavigate();

    const handleAccept = () => {
        navigate('/DevStatusPage');
    };


    return (
        <div>
            {visible && (
                <div role="alert" className="alert sm:alert-horizontal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-info h-6 w-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-xs md:text-sm lg:text-sm"> App under development. Check out the development progress !</p>
                    <div>
                        <button className="btn btn-sm" onClick={handleClose}>Close</button>
                        <button className="btn btn-sm btn-primary" onClick={handleAccept}>Check</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Alert;