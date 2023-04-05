import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Home' element={<Home/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;

