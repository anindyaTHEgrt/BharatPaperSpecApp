import React from 'react';
import {Route, Routes} from "react-router";

import Homepage from "./pages/Homepage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SpecPage from "./pages/SpecPage.jsx";
import DevStatusPage from "@/pages/DevStatusPage.jsx";

const App = () => {
    return (
        <div data-theme="corporate">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/spec" element={<SpecPage/>}/>
                <Route path="/DevStatusPage" element={<DevStatusPage/>}/>
            </Routes>
        </div>
    );
};

export default App;