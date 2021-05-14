import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'; 
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import {UserStorage} from './UserContext';
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
function App() {
  return <div>
    <BrowserRouter >
    <UserStorage>
    <Header /> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login/*" element={<Login />}/>
      <Route path="foto/:id" element={<Photo />}/>
      <ProtectedRoute path="conta/*" element={<User />}/>
    </Routes>
    <Footer />
    </UserStorage>
    </BrowserRouter>
  </div>;
}

export default App;
