import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../library/common/components/Header/Header";
import Dashboard from "../../modules/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
