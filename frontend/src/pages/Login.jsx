import "../css/register.css";

import { Link } from "react-router-dom";

function Login() {
  function handleLogin(e) {
    e.preventDefault();

    const input = e.target;
    const email = input[0];
    const password = input[1];

    console.log("Email :", email.value);
    console.log("Password :", password.value);

    email.value = "";
    password.value = "";
  }

  return (
    <section className="register">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLogin}>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter password" required />
        <button>Login</button>
      </form>

      <div className="switch">
        <p>
          {"Don't"} have an account yet?{" "}
          <Link to={"/signup"} className="link">
            <span>Signup</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
