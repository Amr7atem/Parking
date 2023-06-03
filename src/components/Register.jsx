import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
    console.log(signupState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    if (signupState.password != signupState.confirmpassword) {
      console.log("*********");
    } else {
      const { error } = await supabase.auth.signUp({
        email: signupState.email,
        password: signupState.password,
      });
      if (error) {
        console.log(error);
      } else {
        navigate("/login");
      }
    }
  };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
