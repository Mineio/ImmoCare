import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ClickedProperty from "./pages/clickedProperty";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ClickedProperty" element={<ClickedProperty />} />
        <Route path="/AddProperty" element={<AddProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
