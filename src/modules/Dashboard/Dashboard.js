import React from "react";
import Counter from './Counter/Counter';
import "./DashboardStyles.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__header">Dashboard</h2>
      <Counter />
    </div>
  );
}

export default Dashboard;
