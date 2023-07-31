import "../css/register.css";

import { Link } from "react-router-dom";

function Signup() {
  function handleSignup(e) {
    e.preventDefault();

    const input = e.target;
    const name = input[0];
    const email = input[1];
    const password = input[2];
    const confirm = input[3];

    if (password.value != confirm.value) {
      alert("Password didnt' match!\nPlease enter same password");
      return;
    }

    console.log("Name :", name.value);
    console.log("Email :", email.value);
    console.log("Password :", password.value);

    name.value = "";
    email.value = "";
    password.value = "";
    confirm.value = "";
  }

  return (
    <section className="register">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSignup}>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter password" required />
        <input type="password" placeholder="Confirm password" required />
        <button>Signup</button>
      </form>

      <div className="switch">
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="link">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
