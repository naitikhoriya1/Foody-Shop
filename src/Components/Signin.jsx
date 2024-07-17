import "../Styles/Signin.css";
import signImage from "../assets/asset2.jpeg";
function Signin() {
  return (
    <>
      <div className="sign-container">
        <div className="sign-form">
          <h1>Thank You 👋</h1>
          <p>Unlock your world.</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="Username"
                placeholder="Enter your Username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="Location">Location</label>
              <input
                type="text"
                id="Location"
                placeholder="Enter your Location"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
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
