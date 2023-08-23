import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Information from "./pages/Information";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="information" element={<Information />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
