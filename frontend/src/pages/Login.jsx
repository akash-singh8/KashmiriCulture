import "../css/register.css";

import { Link } from "react-router-dom";

function Login() {
  async function handleLogin(e) {
    e.preventDefault();

    const input = e.target;
    const email = input[0];
    const password = input[1];

    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 403) {
        alert("Invalid credentials");
        return;
      }

      const responseData = await response.json();

      localStorage.setItem("authToken", responseData.authToken);

      console.log("Response :", responseData);
    } catch (err) {
      console.log("Error while signup");
      console.log(err);
    }

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
