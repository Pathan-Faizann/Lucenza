import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { remOrder } from "../redux/slice";
import { RiDeleteBin7Line } from "react-icons/ri";

const AdminOrders = () => {
  const orders = useSelector((state) => state.slice?.orders || []);
  const dis = useDispatch()

  return (
    <div className=" bg-dark pa py-5">
      <h2 className="text-center fw-bold mb-4 text-light bg-dark p-3 rounded">
        All Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-white fs-5">No orders available</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle shadow-lg">
            <thead className="table-primary text-center">
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Payment Type</th>
                <th>UPI ID</th>
                <th>Amount (₹)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="text-center fw-bold">{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td className="text-center text-capitalize">
                    {order.payment?.type}
                  </td>
                  <td className="text-center">
                    {order.payment?.type === "upi"
                      ? order.payment?.upid
                      : "—"}
                  </td>
                  <td className="text-end fw-semibold text-success">
                    ₹{order.amt}
                  </td>
                  <td className="dus text-center"><button onClick={()=>dis(remOrder(index))}><RiDeleteBin7Line size={27} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
