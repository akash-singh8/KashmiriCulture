import "./App.css";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
// import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
