import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
// import { removeProduct } from "../redux/slice"; // 🔹 apne redux slice me action banana hoga
import { remProduct } from "../redux/slice";
import { Link } from "react-router-dom";


const AdminProducts = () => {
  const products = useSelector((state) => state.slice?.products || []);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this product?")) {
      dispatch(remProduct(id));
    }
  };

  return (
    <div className="bg-dark">
    <div className="container py-5">
        <div className="d-flex justify-content-end me-5">
      <button className="btn border text-white text-decoration-none"><Link className="text-decoration-none text-white" to="/addproducts" >Add Products </Link></button>

        </div>
      <h2 className="text-center fw-bold mb-4 text-light bg-dark p-3 rounded">
        All Products
      </h2>

      {products.length === 0 ? (
          <p className="text-center text-muted fs-5">No products found</p>
        ) : (
            <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle shadow-lg">
            <thead className="table-primary text-center">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr key={prod.id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      width="80"
                      height="80"
                      className="rounded shadow-sm"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>{prod.name}</td>
                  <td className="text-center">{prod.category}</td>
                  <td className="text-end fw-semibold text-success">
                    ₹{prod.price}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger btn-sm px-3 fw-semibold"
                      onClick={() => handleRemove(prod.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default AdminProducts;
