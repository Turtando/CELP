import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Form/Input";
import FormBtn from "../../components/Form/FormBtn";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState("");
  const [message, setMessage] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.email && formObject.password) {
      API.saveUser({
        name: formObject.name,
        email: formObject.email,
        password: formObject.password,
      })

        .then((res) => {
          console.log(res);
          setMessage("Sign Up Successful!");
          if (res.data) {
            console.log("form submitted: ", formObject);
            // setRedirectTo("/login")
          } else {
            console.log("Error with sign up");
          }
        })
        .catch((err) => {console.log(err)
        setMessage("Invalid Email or Password")});
    }
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(formObject)
    setFormObject({ ...formObject, [name]: value });
  }
  return (
    // redirectTo ? <Redirect to={redirectTo}/> :

    <form className="SignUp">
      <h2 className="loginSideHeader">Sign Up</h2>
      <h6 className={message.includes("Invalid") ? "alert-danger" : "alert-success"}>{message}</h6>
      <Input
        onChange={handleInputChange}
        name="name"
        placeholder="Username"
        value={formObject.name}
      />
      <Input
        onChange={handleInputChange}
        name="email"
        placeholder="email"
        value={formObject.email}
      />
      <Input
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="password"
        value={formObject.password}
      />
      <FormBtn
        disabled={!formObject.name && formObject.email && formObject.password}
        onClick={handleFormSubmit}
      >
        Register!
      </FormBtn>
    </form>
  );
}

export default SignUp;
