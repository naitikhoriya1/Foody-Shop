import "../Styles/Login.css";
import loginImage from "../assets/asset2.jpeg";

function Login() {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login Illustration" />
      </div>
      <div className="login-form">
        <h1>Welcome Back 👋</h1>
        <p>Unlock your world.</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
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
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
