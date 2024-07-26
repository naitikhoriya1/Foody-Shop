import { useState } from "react";
import "../Styles/Signin.css";
import signImage from "../assets/asset2.jpeg";
import GoogleButton from "react-google-button";
import { Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtjEDfeP0OXkmX2Ofyvssnno2ZBcusIrA",
  authDomain: "food-1ec3f.firebaseapp.com",
  projectId: "food-1ec3f",
  storageBucket: "food-1ec3f.appspot.com",
  messagingSenderId: "382920070563",
  appId: "1:382920070563:web:09bf43bd43cd7358547616",
};
function Signin() {
  let [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      Navigate("/");
      // ...
    } catch (error) {
      console.error(error);
    }
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
    alert(jsonData.message);
  };

  return (
    <>
      <div className="sign-container">
        <div className="sign-form">
          <h1>Thank You 👋</h1>
          <p>Unlock your world.</p>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
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

              <GoogleButton onClick={handleSignInWithGoogle} />
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
