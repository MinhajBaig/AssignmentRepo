import React from "react"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';



function Login() {


    let [email, setemail] = useState(" ")
    let [name, setname] = useState(" ")
    // let navigate = useNavigate()


    const submit_data = () => {

        if (email == " " && name == " ") {
            toast.error("enter data", {
                position: "top-center",
                theme: "colored",
                autoClose: 1000,
                progress: 0,
                draggable: true,
            })
        }
        else {

            localStorage.setItem("userreg", true)
            toast.success("email is regsister", {
                position: "top-center",
                theme: "colored",
                autoClose: 1000,
                progress: 0,
                draggable: true,
            })
            // navigate("/home", { replace: true })
            //  console.log(useNavigate)s
        }

    }




    return (
        <>
            <h1>Form</h1>
            <Formik
                initialValues={{ email: "", firstName: "" }} //inital value start 

                validationSchema={Yup.object({
                    firstName: Yup.string().min(10, "min lettr 10").required(),
                    email: Yup.string().email("Invalid email address").required()
                })}
                onSubmit={(value) => {
                    console.log(value)
                }}
            >
                <Form style={{ textAlign: "center" }}>
                    <Field name={"email"} value={email} onChange={(e)=>setemail(e.target.value)} />
                    <br />

                    <ErrorMessage name={"email"} />
                    <br />

                    <Field name={"firstName"} value={name} onChange={(e)=>setname(e.target.value)} />
                    <br />

                    <ErrorMessage name={"firstName"} />
                    <br />

                    <button type="submit" onClick={()=>submit_data()} >Submit</button>

                </Form>

            </Formik>






        </>
    )
}


export default Login