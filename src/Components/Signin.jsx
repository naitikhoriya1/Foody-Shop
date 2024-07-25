import React,{useState} from "react";
import "../Styles/Signin.css";
import signImage from "../assets/asset2.jpeg";
function Signin() {

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
    const response = await fetch("http://localhost:5000/registor", {
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
    <>
      <div className="sign-container">
        <div className="sign-form">
          <h1>Thank You 👋</h1>
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
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="Username"
                name="username"
                value={formData.username}
                  onChange={handleChange}
                placeholder="Enter your Username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="Location">Location</label>
              <input
                type="text"
                id="Location"
                name="location"
                value={formData.location}
                  onChange={handleChange}
                placeholder="Enter your Location"
              />
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
                Have A Account
              </button>
            </div>
          </form>
        </div>
        <div className="sign-image">
          <img src={signImage} alt="sign Illustration" />
        </div>
      </div>
    </>
  );
}


export default Signin;
