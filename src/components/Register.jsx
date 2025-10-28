import React from "react";
import { useEffect } from "react";
import "./Reg.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import "animate.css"

const Register = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state)=>state.slice.userDetails)
  const navigate = useNavigate()
 
  
  const schema = yup.object({
    name: yup.string().required().matches(/^[a-zA-Z\s]{2,15}$/,"Name should be valid"),
    phone: yup
      .string().required()
      .matches(/^[0-9]{10}$/,"Enter a valid mobile number "),
    email: yup.string().email().required(),
    address: yup.string().required().min(25).matches(/^[a-zA-Z0-9\s,.-]+$/,"Address should be valid"),
    username: yup
      .string()
    .required()
      .matches(/^[a-zA-Z]{3,15}$/,"Username is not valid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 special character"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

   const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values,{resetForm}) => {
      console.log("Form Submitted:", values);
      alert("Form submitted successfully!");
      dispatch(addUser(values))
      resetForm()
      navigate("/login")
    },
  })
  return (
    <div className="reg">
        <button className="btn bc border p-2 m-4" onClick={()=>navigate(-1)}>Back</button>
      <div className="d-flex flex-column big justify-content-center align-items-center  animate__animated animate__jackInTheBox animate__slow">
        <h1 className="text-dark display-4">Register</h1>
        <form onSubmit={formik.handleSubmit} className="container mt-5 w-50 shadow for">
          <label className="form-label text-dark" htmlFor="">
            Name
          </label>
          <input type="text" className="form-control" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
          {formik.touched.name && formik.errors.name? <p className="alert alert-danger p-2 py-1">{formik.errors.name}</p>:null}
          <label className="form-label text-dark" htmlFor="">
            Phone
          </label>
          <input type="number" className="form-control" name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
          {formik.touched.phone && formik.errors.phone? <p className="alert alert-danger p-2 py-1">{formik.errors.phone}</p>:null}
          <label className="form-label text-dark" htmlFor="">
            Email
          </label>  
          <input type="text" className="form-control" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
          {formik.touched.email && formik.errors.email? <p className="alert alert-danger p-2 py-1">{formik.errors.email}</p>:null}
          <label className="form-label text-dark" htmlFor="">
            Address
          </label>  
          <input type="text" className="form-control" name="address" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address} />
          {formik.touched.address && formik.errors.address? <p className="alert alert-danger p-2 py-1">{formik.errors.address}</p>:null}
          
          
          <label className="form-label text-dark" htmlFor="">
            Username
          </label>
          <input type="text" className="form-control" name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} />
           {formik.touched.username && formik.errors.username? <p className="alert alert-danger p-2 py-1">{formik.errors.username}</p>:null}
          <label className="form-label text-dark" htmlFor="">
            Password
          </label>
          <input type="password" className="form-control" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
           {formik.touched.password && formik.errors.password? <p className="alert alert-danger p-2 py-1">{formik.errors.password}</p>:null}
          <label className="form-label text-dark" htmlFor="">
            Confirm-Password
          </label>
          <input type="password" className="form-control" name="confirmPassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} />
           {formik.touched.confirmPassword && formik.errors.confirmPassword? <p className="alert alert-danger p-2 py-1">{formik.errors.confirmPassword}</p>:null}
          <div className="d-flex justify-content-center">
            <button className="btn btn-1 border mt-5" type="submit">
              <span className="">
              Submit

              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
