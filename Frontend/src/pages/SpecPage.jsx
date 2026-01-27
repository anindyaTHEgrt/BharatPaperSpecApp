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

    const filepath = info ? `/Assets/Data/${info.filename}` : '';

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        fetch(`${filepath}`, { signal: controller.signal })
            .then(response => {
                if (!response.ok) throw new Error(`File not found: ${info.filename}`);
                return response.text();
            })
            .then(csvText => {
                // 1. Split text by double (or more) newlines to find separate tables
                // This regex handles different OS line endings (\r\n or \n)
                const tableSegments = csvText.split(/\r?\n\s*\r?\n/);

                // Process Table 1
                if (tableSegments[0] && tableSegments[0].trim().length > 0) {
                    const res1 = Papa.parse(tableSegments[0].trim(), { header: true, skipEmptyLines: true });
                    if (res1.data && res1.data.length > 0) {
                        setTable1Data(res1.data);
                        setFilteredTable1(res1.data);
                        setColumns1(Object.keys(res1.data[0]));
                    }
                }

                // Process Table 2
                if (tableSegments[1] && tableSegments[1].trim().length > 0) {
                    const res2 = Papa.parse(tableSegments[1].trim(), { header: true, skipEmptyLines: true });
                    if (res2.data && res2.data.length > 0) {
                        setTable2Data(res2.data);
                        setColumns2(Object.keys(res2.data[0]));
                    }
                }

                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [filepath, info.filename]);

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

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <IconButton onClick={() => navigate('/product')} aria-label="back" size="large">
                <ArrowBackIosRoundedIcon/>
            </IconButton>

            <div className="p-8">
                <h1 className="font-sans font-bold text-2xl text-blue-950 text-center mb-6">
                    {info.label}
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
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
            <FAB filepath={filepath} fileName={info.label}/>
        </div>
    );
};

export default SpecPage;