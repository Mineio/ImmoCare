import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import LogOut from "./pages/logout";
import LogIn from "./pages/login";

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Home' element={<Home/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/log-out' element={<LogOut/>} />
		<Route path='/log-in' element={<LogIn/>} />
	</Routes>
	</Router>
);
}

export default App;

