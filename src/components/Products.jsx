import React, { useState, useEffect } from "react";
import "./pro.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addSelected } from "../redux/slice";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, SetCategory] = useState("All");
  const [products, SetProducts] = useState([]);
  const InView = useSelector((state) => state.slice.selected);
  const dispatch = useDispatch();
  const nav = useNavigate()
  async function getProducts() {
    let res = await axios.get(
      "http://localhost:3000/lucenzaProducts/getProducts"
    );
    SetProducts(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const Filtered = products.filter((item) => {
    const MatchCategory = category === "All" || item.category === category;

    const MatchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return MatchCategory && MatchSearch;
  });

  function sendV(item) {
    dispatch(addSelected(item));
  }
  return (
    <div className="conL">
      <div className=" btn-group  m-3">
        <label className=" m-se btn btn-secondary "><FaFilter /></label>

        <select
          className="btn m-se btn-secondary rounded me-5 "
          value={category}
          onChange={(e) => SetCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Tshirt">T-shirts</option>
          <option value="Jeans">Jeans</option>
        </select>
       
          <button className=" m-s ms-5 btn">
          <IoSearch size={27} />
        </button>
        <input
          type="text"
          className=" form-control w-100 w-md-auto"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

   
        
      </div>
      <div className="container">
        <div className="row g-4">
          {Filtered.length > 0 ? (
            Filtered.map((item, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div onClick={()=>nav(`/view/${item._id}`)} className="card shadow-sm h-100 border-0">
                  <div className="d-flex justify-content-center">
                    <img
                      src={item.image}
                      className="card-img-top img-fluid imgP"
                      alt="Product"
                    />
                  </div>
                  <div className="card-body text-start">
                    <div className="ms-2">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text fs-5">Price : ₹{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="nosearch d-flex justify-content-center w-100">
              <h1 className="mt-5 text-danger">No Product like "{search}" !</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
