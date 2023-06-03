import React, { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./Input";
const Login = () => {
  const fields = loginFields;
  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    console.log(loginState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
    handleLogin();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: loginState.email,
      password: loginState.password,
    });

    if (error) {
      console.error("Login error:", error.message);
      toast.error("Wrong Email or Password!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
