import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "./DashBoard/DashBoardPage";
import { UseStateHook } from "./Hooks/UseStateHook";
import MarkersChart from "./GeoCharts/MarkersChart";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />

          
          {/* Hooks */}
          <Route path="/usestate" element={<UseStateHook />} />

          {/* Markers Chart */}
          <Route path="/markerschart" element={<MarkersChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
