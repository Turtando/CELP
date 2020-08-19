import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import SignUp from "../SignUp/SignUp";
import image from "../../image/philadelphiabackground.jpg";
import NavBarLogin from "./NavbarLogin";

const backgroundStyle = {
  backgroundImage: `url(${image}`,
  backgroundSize: "cover",
  width: "100%",
};

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [redirectTo, setRedirectTo] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    axios
      .post("/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Login Response: ");
        console.log(res);
        if (res.status === 200) {
          //   update App.js state
          //   this.props.updateUser({
          //     loggedIn: true,
          //     email: res.data.email,
          //   });
          // update the state to redirect to home
          props.setLoggedIn(true)
          props.setRedirect("/home");
        }
      })
      .catch((error) => {
        console.log("Login Error: ");
        console.log(error);
        setMessage("Invalid Email or Password");
      });
  };
  

  return (
    <div>
          {props.renderRedirect()}
      <Container fluid className="containerColor">
        <NavBarLogin handleLogout={props.handleLogout}/>
        <div className="backgroundStyle" style={backgroundStyle}>
          <div>
            <h1 className="headerText headerImage">
              CELP : Rate-A-Cop <i class="fas fa-search-location"></i>
            </h1>
          </div>
        </div>
        <Row className="align-items-center">
          <Col md={{ span: 6, offset: 1 }} className="LoginForm">
            <CarouselBanner />
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <h2 className="loginSideHeader">Login Here</h2>
            <h6 className="alert-danger">{message}</h6>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormBtn variant="primary" onClick={handleClick}>
              Login
            </FormBtn>
            <hr />
            {/* <div className="SignUp"> */}
            <SignUp />
            {/* </div> */}
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default LoginForm;

{
  /* //   <Container fluid>
    //     <NavBar />
    //     <form>
    //       {/* <Input
    //         onChange={handleInputChange}
    //         name="name"
    //         placeholder="Username"
    //         value={formObject.name}
    //       /> */
}
{
  /* //       <Input */
}
{
  /* //         onChange={handleInputChange}
    //         name="email"
    //         placeholder="email"
    //         value={formObject.email}
    //       />
    //       <Input */
}
{
  /* //         onChange={handleInputChange}
    //         type="password"
    //         name="password"
    //         placeholder="password"
    //         value={formObject.password}
    //       />
    //       <FormBtn */
}
{
  /* //         disabled={ */
}
{
  /* //           !formObject.name && formObject.email && formObject.password
    //         }
    //         onClick={handleFormSubmit}
    //       >
    //         Register!
    //       </FormBtn> */
}
{
  /* //     </form> */
}
{
  /* //     <Footer />
    //   </Container> */
}
