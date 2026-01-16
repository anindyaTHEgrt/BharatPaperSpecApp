import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import Papa from 'papaparse';
import Navbar from "@/components/Navbar.jsx";
import FilterCard from "@/components/FilterCard.jsx";
import DataTable from "@/components/DataTable.jsx";
import FAB from '@/components/FAB.jsx';

const SpecPage = () => {
    const location = useLocation();
    const info = location.state?.buttonInfo;

    // We only need rawData (the master list) and filteredData (the view)
    const [rawData, setRawData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!info) return <div className="p-10 text-red-500">Error: No data context found.</div>;

    const fileName = `${info.range}_${info.filename}.csv`;
    const filepath = `/Assets/Data/${fileName}`;

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        fetch(`${filepath}`, { signal: controller.signal })
            .then(response => {
                if (!response.ok) throw new Error(`File not found: ${fileName}`);
                return response.text();
            })
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        // Initialize both states with the full dataset
                        setRawData(results.data);
                        setFilteredData(results.data);

                        if (results.data.length > 0) {
                            setColumns(Object.keys(results.data[0]));
                        }
                        setLoading(false);
                    },
                });
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [filepath, fileName]);

    const handleFilterApply = (filters) => {
        const { property, range } = filters;
        const [min, max] = range;

        // Always filter from rawData so we have the full list available
        const filtered = rawData.filter(row => {
            const val = parseFloat(row[property]);

            // If the cell is empty or not a number, decide if you want to hide it
            if (isNaN(val)) return false;

            return val >= min && val <= max;
        });

        setFilteredData(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-8">
                <h1 className="font-sans font-bold text-2xl text-blue-950 text-center w-full mb-6">
                    {info.label}
                </h1>

                {/* Only show FilterCard once columns are loaded */}
                {!loading && <FilterCard columns={columns} onApply={handleFilterApply}/>}

                {loading && <p className="py-4 text-blue-600 font-medium text-center">Loading dataset...</p>}
                {error && <p className="py-4 text-red-500 font-medium text-center">{error}</p>}

                {!loading && !error && (
                    <DataTable data={filteredData} columns={columns} />
                )}
            </div>
            <FAB filepath={filepath} fileName={info.label} />
        </div>
    );
};

export default SpecPage;