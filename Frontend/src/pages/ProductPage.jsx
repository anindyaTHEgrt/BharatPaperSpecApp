import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

import Navbar from "@/components/Navbar.jsx";

const ProductPage = () => {



    const [selectedRange, setSelectedRange] = useState("BharatPaper");
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        setSelectedRange(e.target.value);
    };

    const rangeButtons = {
        "BharatPaper": [
            { id: 1, range:"BharatPaper",filename: "jk_tuffcote", label: "JK TUFFCOTE", color: "btn-primary" },
            { id: 2, range:"BharatPaper",label: "JK ULTIMA", color: "btn-primary" },
            { id: 3, range:"BharatPaper",label: "JK CLUB CARD", color: "btn-primary" },
            { id: 4, range:"BharatPaper",label: "JK TUFF PACK", color: "btn-primary" },
            { id: 5, range:"BharatPaper",label: "JK PUREFIL BASE", color: "btn-primary" }
        ],
        "Tarille": [
            { id: 1, label: "Product Specs", color: "btn-accent" },
            { id: 2, label: "Contact Sales", color: "btn-primary" }
        ],
        "Converters": [
            { id: 1, label: "Factory Tour", color: "btn-ghost" },
            { id: 2, label: "Machine List", color: "btn-info" }
        ]
    };

    const handleButtonClick = (buttonData) => {
        // We send the entire button object to the next page
        navigate('/spec', { state: { buttonInfo: buttonData } });
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gray-100">
            <Navbar/>
            <div className="card card-border bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title text-gray-950">Product Range</h2>
                    <p>Select the Product Range from the menu.</p>
                    <div className="card-actions justify-end">
                        <fieldset className="fieldset w-full md:max-w-md lg:max-w-lg mx-auto">
                            <legend className="fieldset-legend">Range</legend>
                            <select  defaultValue="Pick a Range" className="select" onChange={handleSelectChange}>
                                <option disabled={true}>Pick a range</option>
                                <option value="BharatPaper">Bharat Paper Mart</option>
                                <option value="Tarille">Tarille Corporation</option>
                                <option value="Converters">Bharat Converters</option>
                            </select>
                            {selectedRange && (
                                <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in duration-300">

                                    <button
                                        className="btn btn-ghost btn-sm text-error"
                                        onClick={() => setSelectedRange("")}
                                    >
                                        Reset
                                    </button>
                                </div>
                            )}
                        </fieldset>


                    </div>
                </div>
            </div>

            {selectedRange && rangeButtons[selectedRange] && (
                <div className="card bg-base-100 shadow-sm m-10">
                    <figure className="px-10 lg:px-130 pt-10">

                        <img
                            src={`/Assets/Imgs/${selectedRange}_logo.png`}
                            alt="Shoes"
                            className="rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p><b>Select product for spec sheet</b></p>
                        <div className="card-actions">
                            <div className="mt-6 flex flex-wrap justify-center gap-3">
                                {rangeButtons[selectedRange].map((btn) => (
                                    <button
                                        key={btn.id}
                                        className={`btn btn-wide btn-soft btn-primary shadow-lg transition-all hover:scale-105`}
                                        onClick={() => handleButtonClick(btn)}
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


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

export default ProductPage;