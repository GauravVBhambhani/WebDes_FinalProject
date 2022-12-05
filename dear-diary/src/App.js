import "./App.css";
import React from "react";

import Signup from "./pages/Signup.page";
import Password from "./pages/account/Password";
import Account from "./pages/account/Account";
import Profile from "./pages/account/Profile";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
