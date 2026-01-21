import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";

import { MoveRight } from 'lucide-react';


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
                            { id: 11101, label: "JK Bond", filename: "jk_bond", range: "BharatPaper", desc: "Watermarked paper for legal applications with security features." },
                            { id: 11102, label: "JK Elektra", filename: "jk_elektra", range: "BharatPaper", desc: "High bright and High Bulk Maplitho for Publications, Calendars, Brochures and Notebooks."},
                            { id: 11103, label: "JK Evervite", filename: "jk_evervite", range: "BharatPaper", desc: "Brilliant bright white, smooth finish Maplitho for premium quality printing required for high end applications." },
                            { id: 11104, label: "JK Finesse", filename: "jk_finesse", range: "BharatPaper", desc: "Low tinted, high end Maplitho suitable for multicolor printing used for Publications, Diaries and Notepads." },
                            { id: 11105, label: "JK HSMT", filename: "jk_hsmt", range: "BharatPaper", desc: "High strength paper for wax match tissue and various other applications." },
                            { id: 11106, label: "JK Lumina", filename: "jk_lumina", range: "BharatPaper", desc: "High Bright, premium quality Maplitho for Diaries, Notepads, High-End Printing." },
                            { id: 11107, label: "JK Pulp Board", filename: "jk_pulpboard", range: "BharatPaper", desc: "High Bulk ad high GSM used for book covers and card applications." },
                            { id: 11108, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper", desc: "High-quality coated paper suitable for various printing needs." },
                            { id: 11109, label: "JK SHB", filename: "jk_shb", range: "BharatPaper", desc: "High bright and High Bulk Maplitho for Publications, Calendars, Brochures and Notebooks." },
                            { id: 11110, label: "JK SHB NS", filename: "jk_shb_ns", range: "BharatPaper", desc: "Natural Shade Maplitho with optimum properties suitable for variable applications." },
                        ]
                    },
                    {
                        id: "jkp-2", label: "Unit: CPM (Gujarat)",
                        products: [
                            { id: 11201, label: "JK SHB CPM", filename: "jk_shbcpm", range: "BharatPaper", type: "paper", desc:"Blue Tinted high bulk Maplitho for publication applications" },
                            { id: 11202, label: "JK SHB NS", filename: "jk_shbns", range: "BharatPaper", type: "paper", desc:"Natural shade Maplitho with optimum properties suitable for variable applications" },
                            { id: 11203, label: "JK Finesse CPM", filename: "jk_finesse", range: "BharatPaper", type: "paper", desc:"Low tinted, high end Maplitho suitable for multicolor printing used for Publication, Diaries" },
                            { id: 11204, label: "JK Ultra Print", filename: "jk_ultraprint", range: "BharatPaper", type: "paper", desc:"High bright, pinkish shade Maplitho with optimum properties" },
                            { id: 11205, label: "JK Easy Draw W/NS", filename: "jk_easydraw", range: "BharatPaper", type: "paper", desc:"High bulk paper for Drawing Books." },
                            { id: 11206, label: "JK Easy Sketch", filename: "jk_easysketch", range: "BharatPaper", type: "paper", desc:"Ultra high bulk paper suitable for pencil sketch." },
                            { id: 11207, label: "JK Tally", filename: "jk_tally", range: "BharatPaper", type: "paper", desc:"High bright paper for Tally account books." },
                            { id: 11208, label: "JK Index", filename: "jk_index", range: "BharatPaper", type: "paper", desc:"Special shade high stiffness/ high bulk product for index cards." },
                            { id: 11209, label: "JK Stiffner", filename: "jk_stiffner", range: "BharatPaper", type: "paper", desc:"Alkaline resistant paper for Soap Wrapping" },
                            { id: 11210, label: "JK Parchment Buff/NS", filename: "jk_parchment", range: "BharatPaper", type: "paper", desc:"Watermarked Parchment for long lasting records, OMR and Certificates." },
                            { id: 11211, label: "JK Envelope", filename: "jk_envelope", range: "BharatPaper", type: "paper", desc:"Buff/ White paper for Envelope and Cards." },
                            { id: 11212, label: "JK SHB Green", filename: "jk_shbgreen", range: "BharatPaper", type: "paper", desc:"Green Shade Maplitho for different applications." },
                            { id: 11213, label: "JK Ledger", filename: "jk_ledger", range: "BharatPaper", type: "paper", desc:"Laid marked ledger paper for legal/ ledger books." },
                            { id: 11214, label: "JK Ledger Neo", filename: "jk_ledgerneo", range: "BharatPaper", type: "paper", desc:"Laid marked ledger paper for legal/ ledger books." },
                            { id: 11215, label: "JK Carry", filename: "jk_carry", range: "BharatPaper", type: "paper", desc:"High Strength white paper suitable for carrybag application." },
                            { id: 11216, label: "JK Astra Print", filename: "jk_astraprint", range: "BharatPaper", type: "paper", desc:"High bright, pinkish shade Maplitho with optimum properties." },
                            { id: 11217, label: "JK EasyFold GC2", filename: "jk_easyfold", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11218, label: "JK TuffCote", filename: "jk_tuffcote", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11219, label: "JK Endura", filename: "jk_endura", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11220, label: "JK TuffCote Anti-Fungal", filename: "jk_tuffcoteantifungal", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11221, label: "JK Tuffpac GC2", filename: "jk_tuffpac", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11222, label: "JK CSB Purefil", filename: "jk_csbpurefil", range: "BharatPaper", type: "board", desc:"" },
                            { id: 11223, label: "JK FBS", filename: "jk_fbs", range: "BharatPaper", type: "board", desc:"" },
                        ]
                    },
                    {
                        id: "jkp-3", label: "Unit: SPM (Sirpur)",
                        products: [
                            { id: 11301, label: "SPM SW HB+", filename: "jk_spmswhb", range: "BharatPaper", desc: "High bright and High Bulk Maplitho for Publication, Calendars." },
                            { id: 11302, label: "Sirpur Natura SS", filename: "jk_sirpurnaturass", range: "BharatPaper", desc: "Natural shade Maplitho with optimum properties suitable for variable applications." },
                            { id: 11303, label: "SML Pink/Blue/Green", filename: "jk_sml", range: "BharatPaper", desc: "Pink, Blue, Yellow, Green colour Maplitho for children projects, Bill book." },
                            { id: 11304, label: "Sirpur Ledger", filename: "jk_sirpurledger", range: "BharatPaper", desc: "Laidmarked ledger paper for legal/ledger books available in cut pack/folio." },
                            { id: 11305, label: "Easy Draw SPM", filename: "jk_easydrawspm", range: "BharatPaper", desc: "High bulk paper for Drawing Books, Children Books with rub resistance." },
                            { id: 11306, label: "SPM Lam-Base", filename: "jk_spmlambase", range: "BharatPaper", desc: "Virgin unbleached Absorbent Kraft paper for laminates." },
                            { id: 11307, label: "SPM Purefil Cup Stock", filename: "jk_spmpurefilcs", range: "BharatPaper", desc: "Multi-Layer cup stock paper for paper cup." },
                            { id: 11308, label: "SPM Purefil Cup Stock Bottom", filename: "jk_spmpurefilcsb", range: "BharatPaper", desc: "ulti layer cup stock paper/board for cup bottom." },
                            { id: 11309, label: "SPM Carry", filename: "jk_spmcarry", range: "BharatPaper", desc: "High Strength white paper suitable for carrybag application." },
                            { id: 11310, label: "SPM Pulp Board", filename: "jk_spmpulpboard", range: "BharatPaper", desc: "High Bulk and High GSM used for books covers and card applications." },
                            { id: 11311, label: "SPM Graphic Card", filename: "jk_spmgraphiccard", range: "BharatPaper", desc: "High Stiffness, High GSM board used for Wedding cards and Formal Invitations." },
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

    const [cpmFilter, setCpmFilter] = useState("paper");
// 3. Create a filtered list based on the selection
    const isCPM = selectedFactory?.id === "jkp-2";

    const visibleProducts = useMemo(() => {
        if (!selectedFactory?.products) return [];

        // If it's CPM, filter by the type (paper/board)
        if (isCPM) {
            return selectedFactory.products.filter(
                (p) => p.type?.toLowerCase() === cpmFilter
            );
        }
        // Otherwise show everything
        return selectedFactory.products;
    }, [cpmFilter, selectedFactory?.products]);
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
                        <li className={`step ${selectedRange ? 'step-primary' : ''}`}>Select Company</li>
                        <li className={`step ${selectedBrand ? 'step-primary' : ''}`}>Select Mill</li>
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
                                    <legend className="fieldset-legend font-bold">1. Company</legend>
                                    <select
                                        className="select select-bordered w-full"
                                        onChange={handleRangeChange}
                                        value={selectedRange || ""}
                                    >
                                        <option value="" disabled>Pick a Company</option>
                                        <option value="BharatPaper">Bharat Paper Mart</option>
                                        <option value="Tarille">Tarille Corporation</option>
                                        <option value="Converters">Bharat Converters</option>
                                    </select>
                                </fieldset>

                                {/* 2. BRAND SELECTOR */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-bold">2. Mill</legend>
                                    <select
                                        className="select select-bordered w-full"
                                        value={selectedBrand?.id || ""}
                                        onChange={handleBrandChange}
                                        disabled={!selectedRange} // Disabled until Range is picked
                                    >
                                        <option value="" disabled>
                                            {!selectedRange ? "Select Range First" : "Choose a Mill"}
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


                                <div className="dropdown w-full">
                                    {/* This button acts as the "Select" input display */}
                                    <div tabIndex={0} role="button"
                                         className="btn select select-bordered w-full flex justify-between font-normal">
                                        {selectedFactory ? (
                                            <div className="text-left">
                                                <span
                                                    className="block font-bold leading-tight">{selectedFactory.label}</span>
                                                <span
                                                    className="text-xs opacity-60 font-normal">{selectedFactory.desc}</span>
                                            </div>
                                        ) : (
                                            "Choose a Product"
                                        )}

                                    </div>

                                    {/* The Dropdown List */}
                                    <ul tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow-sm border border-base-200 max-h-70     overflow-y-auto block">

                                        {/* 4. Render the Toggle ONLY if it is CPM */}
                                        {isCPM && (
                                            <li className="mb-2 sticky top-0 z-10 bg-base-100 pb-2 border-b border-base-200">
                                                <div
                                                    className="join w-full grid grid-cols-2 p-1 bg-base-200 rounded-lg">
                                                    <input
                                                        className="join-item btn btn-sm btn-ghost  text-blue-950 data-[checked=true]:bg-white data-[checked=true]:shadow-sm"
                                                        type="radio"
                                                        name="cpm_options"
                                                        aria-label="Paper"
                                                        checked={cpmFilter === "paper"}
                                                        data-checked={cpmFilter === "paper"}
                                                        onChange={() => setCpmFilter("paper")}
                                                        // Important: Stop the dropdown from closing when clicking the toggle
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                    <input
                                                        className="join-item btn btn-sm btn-ghost text-blue-950 data-[checked=true]:bg-white data-[checked=true]:shadow-sm"
                                                        type="radio"
                                                        name="cpm_options"
                                                        aria-label="Board"
                                                        checked={cpmFilter === "board"}
                                                        data-checked={cpmFilter === "board"}
                                                        onChange={() => setCpmFilter("board")}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                            </li>
                                        )}

                                        {/* 5. Map over the filtered list (visibleProducts) instead of the raw list */}
                                        {visibleProducts.map((product) => (
                                            <li key={product.id}>
                                                <button
                                                    className="flex flex-col items-start gap-1 py-3 h-auto"
                                                    onClick={() => {
                                                        document.activeElement.blur();
                                                        handleProductClick(product)
                                                    }}
                                                >
                                                    <span className="font-bold">{product.label}</span>
                                                    <span className="text-xs opacity-60 text-left">{product.desc}</span>
                                                </button>
                                            </li>
                                        ))}

                                        {/* Fallback if filter returns empty */}
                                        {visibleProducts.length === 0 && (
                                            <div className="p-4 text-center text-sm opacity-50">No products found.</div>
                                        )}
                                    </ul>
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