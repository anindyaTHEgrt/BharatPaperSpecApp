import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

import Navbar from "@/components/Navbar.jsx";

const ProductPage = () => {



    const [selectedRange, setSelectedRange] = useState("BharatPaper");
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedFactory, setSelectedFactory] = useState(null);
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        setSelectedRange(e.target.value);
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        setSelectedFactory(null); // Reset factory if brand changes
    };

    const handleFactoryClick = (factory) => {
        setSelectedFactory(factory);
    };

    const handleProductClick = (product) => {
        // Final step: Navigate to the spec page with the product info
        navigate('/spec', { state: { buttonInfo: product } });
    };

    //Product ID Scheme: Range(1) + Brand(1) + Factory(1) + Product(2)
    const rangeButtons = {
        "BharatPaper": [
            {
                id: "jkp",
                label: "JK PAPER",
                type: "brand",
                factories: [
                    {
                        id: "jkp-1",
                        label: "Unit: JKPM (Rayagada)",
                        products: [
                            { id: 11101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 11102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    },
                    {
                        id: "jkp-2",
                        label: "Unit: CPM (Gujarat)",
                        products: [
                            { id: 11201, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper" },
                            { id: 11202, label: "JK Ultima", filename: "jk_ultima", range: "BharatPaper" }
                        ]
                    },
                    {
                        id: "jkp-3",
                        label: "Unit: Sirpur",
                        products: [
                            { id: 11301, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper" },
                            { id: 11302, label: "JK Ultima", filename: "jk_ultima", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            { id: "srf", label: "SRF", type: "brand", factories: [
                    {
                        id: "srf-1",
                        label: "Unit: Madhya Pradesh",
                        products: [
                            { id: 12101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 12102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            { id: "srfaltech", label: "SRF ALTECH", type: "brand", factories: [
                    {
                        id: "srfaltech-1",
                        label: "Unit: Madhya Pradesh",
                        products: [
                            { id: 13101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 13102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ],
        "Tarille": [
            { id: "jpfl", label: "JPFL", type: "brand", factories: [
                    {
                        id: "jpfl-1",
                        label: "Unit: Nashik",
                        products: [
                            { id: 21101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 21102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            { id: "shyamsel", label: "SHYAM SEL", type: "brand", factories: [
                    {
                        id: "shyamsel-1",
                        label: "Unit: Factory",
                        products: [
                            { id: 22101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 22102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ],
        "Converters": [
            { id: "jkp_conv", label: "JK PAPER", type: "brand", factories: [
                    {
                        id: "jkp_conv-1",
                        label: "Unit: CPM (Gujarat)",
                        products: [
                            { id: 31101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 31102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ]
    };

    const vendorButtons = {
        "BharatPaper": [
            { id: 1, range:"BharatPaper",filename: "jkp", label: "JK PAPER", color: "btn-primary" },
            { id: 1, range:"BharatPaper",filename: "srf", label: "SRF", color: "btn-primary" },
            { id: 1, range:"BharatPaper",filename: "srf_altech", label: "SRF ALTECH", color: "btn-primary" },
            { id: 1, range:"BharatPaper",filename: "ambani", label: "AMBANI", color: "btn-primary" },
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