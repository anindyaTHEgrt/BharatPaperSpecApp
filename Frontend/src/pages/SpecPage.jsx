import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom";
import Papa from 'papaparse';
import Navbar from "@/components/Navbar.jsx";
import FilterCard from "@/components/FilterCard.jsx";
import DataTable from "@/components/DataTable.jsx";
import FAB from '@/components/FAB.jsx';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import {IconButton} from "@mui/material";

const SpecPage = () => {
    const location = useLocation();
    const info = location.state?.buttonInfo;
    const navigate = useNavigate();

    // State for Table 1
    const [table1Data, setTable1Data] = useState([]);
    const [filteredTable1, setFilteredTable1] = useState([]);
    const [columns1, setColumns1] = useState([]);

    // State for Table 2
    const [table2Data, setTable2Data] = useState([]);
    const [columns2, setColumns2] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. Guard clause: Ensure info and filename exist
        if (!info || !info.filename) {
            setError("No product information provided.");
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        setError(null);

        // 2. Construct the path - info.filename already contains the full relative path
        // e.g., "Tarille/jpfl/jpfl-1/J-200_8.csv"
        const fullUrl = `/Assets/Data/${info.filename}`;

        console.log(`Fetching from: ${fullUrl}`);
        console.log(`Full info object:`, info);

        // 3. Properly encode URI components - encode each segment separately
        const encodedUrl = fullUrl.split('/').map(segment => encodeURIComponent(segment)).join('/');

        fetch(encodedUrl, { signal: controller.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: Could not find file at ${info.filename}`);
                }
                return response.text();
            })
            .then(csvText => {
                // Split by double newlines to separate tables
                const tableSegments = csvText.split(/\r?\n\s*\r?\n/);

                // Table 1 Logic
                if (tableSegments[0]?.trim()) {
                    const res1 = Papa.parse(tableSegments[0].trim(), { header: true, skipEmptyLines: true });
                    if (res1.data.length > 0) {
                        setTable1Data(res1.data);
                        setFilteredTable1(res1.data);
                        setColumns1(Object.keys(res1.data[0]));
                    }
                }

                // Table 2 Logic
                if (tableSegments[1]?.trim()) {
                    const res2 = Papa.parse(tableSegments[1].trim(), { header: true, skipEmptyLines: true });
                    if (res2.data.length > 0) {
                        setTable2Data(res2.data);
                        setColumns2(Object.keys(res2.data[0]));
                    }
                }

                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error("Fetch Error:", err);
                    setError(`Failed to load file: ${err.message}`);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [info?.filename]); // Only re-run if the filename specifically changes

    // Update filter logic to target Table 1 (assuming filter is for primary data)
    const handleFilterApply = (filters) => {
        const { property, range } = filters;
        const [min, max] = range;
        const filtered = table1Data.filter(row => {
            const val = parseFloat(row[property]);
            return !isNaN(val) && val >= min && val <= max;
        });
        setFilteredTable1(filtered);
    };

    // Construct filepath for FAB component
    const filepath = info?.filename ? `/Assets/Data/${info.filename}` : '';

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <IconButton onClick={() => navigate('/product')} aria-label="back" size="large">
                <ArrowBackIosRoundedIcon/>
            </IconButton>

            <div className="p-8">
                <h1 className="font-sans font-bold text-2xl text-blue-950 text-center mb-6">
                    {info?.label || 'Product Specifications'}
                </h1>

                {/* Only show FilterCard if we actually have columns to filter by */}
                {!loading && columns1.length > 0 && (
                    <FilterCard columns={columns1} onApply={handleFilterApply}/>
                )}

                {/* Only show Table 1 if data exists */}
                {!loading && !error && table1Data.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-lg font-semibold mb-2">Primary Specifications</h3>
                        <DataTable data={filteredTable1} columns={columns1}/>
                    </div>
                )}

                {/* Only show Table 2 if data exists */}
                {!loading && !error && table2Data.length > 0 && (
                    <div className="mt-10">
                        <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                        <DataTable data={table2Data} columns={columns2}/>
                    </div>
                )}

                {loading && <p className="text-center">Loading dataset...</p>}
                {error && (
                    <div className="text-center">
                        <p className="text-red-500 mb-2">{error}</p>
                        <p className="text-sm text-gray-600">
                            Expected file location: {filepath}
                        </p>
                    </div>
                )}
            </div>
            {info?.label && <FAB filepath={filepath} fileName={info.label}/>}
        </div>
    );
};

export default SpecPage;