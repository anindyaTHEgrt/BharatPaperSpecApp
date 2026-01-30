import React from 'react';
import Navbar from "@/components/Navbar.jsx";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const DevStatusPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 pb-20">
            <Navbar/>

            <div className="card m-2 bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Pending</h2>
                    <p>BPM - JK Paper - CPM - Board - Cigarette Board + Club Card, LPB, CBU, Induction Wad Specification Not Uploaded.</p>
                </div>
            </div>
        </div>
    );
};

export default DevStatusPage;