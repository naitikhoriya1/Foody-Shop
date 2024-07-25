
import React, {useState} from "react";
import "../Styles/Login.css";
import loginImage from "../assets/asset2.jpeg";

function Login() {
  let [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

     //api
     const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const jsonData = await response.json();
    alert(jsonData.message)
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login Illustration" />
      </div>
      <div className="login-form">
        <h1>Welcome Back 👋</h1>
        <p>Unlock your world.</p>
        <form action="#"
            method="POST"
            onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
             type="email"
              id="email" 
              name="email"
              value={formData.email}
                  onChange={handleChange}
              placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
                  onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="Submit-group">
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <button type="button" className="create-account-button">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
