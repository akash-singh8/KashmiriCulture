import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CultureView from "./pages/CultureView";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  const [cultureHead, setCultureHead] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("authToken")){
      setLogged(true);
    }

    async function getCultureHead() {
      const response = await fetch("http://127.0.0.1:5050/cultures", {
        method: "GET",
      });

      const responseData = await response.json();

      console.log(responseData);
      setCultureHead(responseData.cultureHeads);
    }

    getCultureHead();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar logged={logged} setLogged={setLogged}/>
        <Routes>
          <Route path="/" element={<Home cultureHead={cultureHead} />}></Route>
          <Route path="/signup" element={<Signup setLogged={setLogged}/>}></Route>
          <Route path="/login" element={<Login setLogged={setLogged}/>}></Route>
          <Route path="/culture/:id" element={<CultureView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
