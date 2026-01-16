import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";

const ProductPage = () => {
    const navigate = useNavigate();

    // Data Structure (Kept exactly as provided)
    const rangeButtons = {
        "BharatPaper": [
            {
                id: "jkp", label: "JK PAPER", type: "brand",
                factories: [
                    {
                        id: "jkp-1", label: "Unit: JKPM (Rayagada)",
                        products: [
                            { id: 11101, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper" },
                            { id: 11102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    },
                    {
                        id: "jkp-2", label: "Unit: CPM (Gujarat)",
                        products: [
                            { id: 11201, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper" },
                            { id: 11202, label: "JK Ultima", filename: "jk_ultima", range: "BharatPaper" }
                        ]
                    },
                    {
                        id: "jkp-3", label: "Unit: Sirpur",
                        products: [
                            { id: 11301, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper" },
                            { id: 11302, label: "JK Ultima", filename: "jk_ultima", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            {
                id: "srf", label: "SRF", type: "brand",
                factories: [
                    {
                        id: "srf-1", label: "Unit: Madhya Pradesh",
                        products: [
                            { id: 12101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 12102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            {
                id: "srfaltech", label: "SRF ALTECH", type: "brand",
                factories: [
                    {
                        id: "srfaltech-1", label: "Unit: Madhya Pradesh",
                        products: [
                            { id: 13101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 13102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ],
        "Tarille": [
            {
                id: "jpfl", label: "JPFL", type: "brand",
                factories: [
                    {
                        id: "jpfl-1", label: "Unit: Nashik",
                        products: [
                            { id: 21101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 21102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            },
            {
                id: "shyamsel", label: "SHYAM SEL", type: "brand",
                factories: [
                    {
                        id: "shyamsel-1", label: "Unit: Factory",
                        products: [
                            { id: 22101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 22102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ],
        "Converters": [
            {
                id: "jkp_conv", label: "JK PAPER", type: "brand",
                factories: [
                    {
                        id: "jkp_conv-1", label: "Unit: CPM (Gujarat)",
                        products: [
                            { id: 31101, label: "JK Copier", filename: "jk_copier", range: "BharatPaper" },
                            { id: 31102, label: "JK Excel Bond", filename: "jk_excel", range: "BharatPaper" }
                        ]
                    }
                ]
            }
        ]
    };

    // State
    const [selectedRange, setSelectedRange] = useState("BharatPaper");
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedFactory, setSelectedFactory] = useState(null);

    // --- RESET HANDLERS ---

    const handleRangeChange = (e) => {
        const newRange = e.target.value;
        setSelectedRange(newRange);
        // Cascading Reset: Clear Brand and Factory when Range changes
        setSelectedBrand(null);
        setSelectedFactory(null);
    };

    const handleBrandChange = (e) => {
        const brandId = e.target.value;
        const brandObj = rangeButtons[selectedRange].find(b => b.id === brandId);

        setSelectedBrand(brandObj);
        // Cascading Reset: Clear Factory when Brand changes
        setSelectedFactory(null);
    };

    const handleFactoryChange = (e) => {
        const factoryId = e.target.value;
        const factoryObj = selectedBrand.factories.find(f => f.id === factoryId);
        setSelectedFactory(factoryObj);
    };

    const handleProductClick = (product) => {
        console.log(product);
        // console.log(selectedBrand);
        // console.log(selectedFactory);
        const filename = selectedRange+'_'+selectedBrand.id+'_'+selectedFactory.id+'_'+product.filename+'.csv';
        const prodDetails = {range: selectedRange, brand:selectedBrand.id, factory:selectedFactory.id, label:product.label, product: product.filename, filename: filename};

        console.log(filename);
        navigate('/spec', { state: { buttonInfo: prodDetails } });
    };

    // Helper to determine styling for steps
    // Step 1 is always Range (Primary if selected)
    // Step 2 is Brand (Primary if brand selected)
    // Step 3 is Factory (Primary if factory selected)
    // Step 4 is Product (Primary if factory is ready for selection)

    return (
        <div className="min-h-screen bg-gray-100 pb-20">
            <Navbar/>

            <div className="container mx-auto px-4 py-8">

                {/* --- DAISY UI STEPS --- */}
                <div className="w-full flex justify-center mb-10">
                    <ul className="steps w-full max-w-4xl">
                        <li className={`step ${selectedRange ? 'step-primary' : ''}`}>Select Range</li>
                        <li className={`step ${selectedBrand ? 'step-primary' : ''}`}>Select Brand</li>
                        <li className={`step ${selectedFactory ? 'step-primary' : ''}`}>Select Factory</li>
                        <li className={`step ${selectedFactory ? 'step-primary' : ''}`}>View Product</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">

                    {/* CARD 1: SELECTIONS */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Configuration</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                {/* 1. RANGE SELECTOR */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-bold">1. Range</legend>
                                    <select
                                        className="select select-bordered w-full"
                                        onChange={handleRangeChange}
                                        value={selectedRange || ""}
                                    >
                                        <option value="" disabled>Pick a range</option>
                                        <option value="BharatPaper">Bharat Paper Mart</option>
                                        <option value="Tarille">Tarille Corporation</option>
                                        <option value="Converters">Bharat Converters</option>
                                    </select>
                                </fieldset>

                                {/* 2. BRAND SELECTOR */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-bold">2. Brand</legend>
                                    <select
                                        className="select select-bordered w-full"
                                        value={selectedBrand?.id || ""}
                                        onChange={handleBrandChange}
                                        disabled={!selectedRange} // Disabled until Range is picked
                                    >
                                        <option value="" disabled>
                                            {!selectedRange ? "Select Range First" : "Choose a Brand"}
                                        </option>
                                        {selectedRange && rangeButtons[selectedRange]?.map((brand) => (
                                            <option key={brand.id} value={brand.id}>
                                                {brand.label}
                                            </option>
                                        ))}
                                    </select>
                                </fieldset>

                                {/* 3. FACTORY SELECTOR */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-bold">3. Factory</legend>
                                    <select
                                        className="select select-bordered w-full"
                                        value={selectedFactory?.id || ""}
                                        onChange={handleFactoryChange}
                                        disabled={!selectedBrand} // Disabled until Brand is picked
                                    >
                                        <option value="" disabled>
                                            {!selectedBrand ? "Select Brand First" : "Choose a Factory"}
                                        </option>
                                        {selectedBrand?.factories?.map((factory) => (
                                            <option key={factory.id} value={factory.id}>
                                                {factory.label}
                                            </option>
                                        ))}
                                    </select>
                                </fieldset>
                            </div>

                            {/* Optional: Show Logo based on Range */}
                            {selectedRange && (
                                <div className="mt-6 flex justify-center">
                                    <img
                                        src={`/Assets/Imgs/${selectedRange}_logo.png`}
                                        alt={`${selectedRange} Logo`}
                                        className="h-16 object-contain opacity-80"
                                        onError={(e) => e.target.style.display = 'none'} // Hide if image missing
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CARD 2: PRODUCTS (Only visible when Factory is selected) */}
                    {selectedFactory && (
                        <div className="card bg-base-100 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="card-body">
                                <h2 className="card-title text-primary">
                                    Available Products
                                    <span className="text-sm font-normal text-gray-500 ml-2">
                                        ({selectedFactory.label})
                                    </span>
                                </h2>
                                <div className="divider m-0"></div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    {selectedFactory.products.map((product) => (
                                        <button
                                            key={product.id}
                                            className="btn btn-outline btn-primary h-auto py-2 flex flex-col gap-0"
                                            onClick={() => handleProductClick(product)}
                                        >
                                            <span className="text-lg font-bold">{product.label}</span>
                                            <span className="text-xs opacity-70">Click for Specs</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded mt-10">
                <div>
                    <p className="text-gray-600">Copyright © 2024 - All right reserved by SpecList</p>
                </div>
            </footer>
        </div>
    );
};

export default ProductPage;