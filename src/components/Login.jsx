import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

let Login = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter first name")
      .required("First name is required"),
    lastName: yup.string("Enter last name").required("last name is required"),
    email: yup
      .string("Enter your email")
      .email("Invalid email")
      .required("Email is required"),
    password: yup.string("Enter your password").required("password is required"),
  });

  let formReset = () => {
    let inpForm = document.getElementsByTagName("form")[0];
    inpForm.childNodes[0].childNodes[0].value = ''
    inpForm.childNodes[1].childNodes[0].value = ''
    inpForm.childNodes[2].childNodes[0].value = ''
    inpForm.childNodes[3].childNodes[0].value = ''
  };

  const myFormik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const notify = toast.success("Form is Submitted.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setFirstName(values.firstName)
      setLastName(values.lastName)
      setEmail(values.email)
      setPassword(values.password)

      let msgData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
      console.log(msgData)

      // formReset()
    },
  }, [firstName, lastName, email, password,]);

  return (
    <>

      <div
        className="container-fluid about-heading bg-dark shadow"
        style={{ height: 150, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1 className="text-light text-center">SignUp</h1>
        </div>
      </div>

      <div className="bg-dark">

      <Container>
        <div className="container py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center my-0">
          <div className="form-control my-2 bg-light h-100 border-none pb-5">
            <h5 className="text-center m-4">Message us</h5>
            <div className="row ">
              <form onSubmit={myFormik.handleSubmit}>
                <div className="col-sm-12 ">
                  <input
                    type="text"
                    className="form-control my-2 shadow-none w-50 text-center mx-auto"
                    id="firstName"
                    placeholder="First Name"
                    value={myFormik.values.firstName}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.firstName && myFormik.errors.firstName}
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control my-2 shadow-none w-50 text-center mx-auto"
                    id="lastName"
                    placeholder="Last Name"
                    value={myFormik.values.lastName}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.lastName && myFormik.errors.lastName}
                </div>
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="form-control my-2 shadow-none w-50 text-center mx-auto"
                    id="email"
                    placeholder="Email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.email && myFormik.errors.email}
                </div>
                <div className="col-sm-12">
                  <input
                    type="password"
                    className="form-control my-2 shadow-none w-50 text-center mx-auto"
                    id="password"
                    placeholder="Password"
                    value={myFormik.values.password}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.password && myFormik.errors.password}
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-secondary w-50 my-2 "
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;