import "./App.css";
import NavBar from "./components/NavBar";
// import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
