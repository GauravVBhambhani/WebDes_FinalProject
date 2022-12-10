import './App.css';
import React from 'react';
import Signup from './pages/Signup.page';
import Signin from './pages/Signin.page';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Password from "./pages/Account/Password";
import Account from "./pages/Account/Account";
import Profile from "./pages/Account/Profile";
import Calendar from './pages/Calendar';
import TextEditor from '../src/components/Document/TextEditor';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  // const current = new Date();
  // const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/profile" element={<Profile />} />
      <Route path="/account/password" element={<Password />} />
      <Route path="/account/calendar" element={<Calendar />} />
      <Route path="/NewDoc/:id" element={<TextEditor/>} />
    </Routes>
  );
}

export default App;

