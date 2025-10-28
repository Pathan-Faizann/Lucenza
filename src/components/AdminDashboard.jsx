import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="bg-dark min-vh-100 py-5">
      <div className="container">
        <h2 className="text-center text-light mb-5 fw-bold">Admin Dashboard</h2>

        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <Link to="/adminorders" className="text-decoration-none">
              <div className="card bg-secondary text-light text-center p-4 shadow-lg border-0">
                <i className="bi bi-clipboard-data display-4 text-info mb-3"></i>
                <h5 className="fw-bold">Orders</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-6">
            <Link to="/adminusers" className="text-decoration-none">
              <div className="card bg-secondary text-light text-center p-4 shadow-lg border-0">
                <i className="bi bi-people-fill display-4 text-warning mb-3"></i>
                <h5 className="fw-bold">Users</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-6">
            <Link to="/adminProducts" className="text-decoration-none">
              <div className="card bg-secondary text-light text-center p-4 shadow-lg border-0">
                <i className="bi bi-box-seam display-4 text-success mb-3"></i>
                <h5 className="fw-bold">Products</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-6">
            <Link to="/analytics" className="text-decoration-none">
              <div className="card bg-secondary text-light text-center p-4 shadow-lg border-0">
                <i className="bi bi-bar-chart-line-fill display-4 text-primary mb-3"></i>
                <h5 className="fw-bold">Analytics</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
