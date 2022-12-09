import './App.css';
import React from 'react';
import Signup from './pages/Signup.page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Password from "./pages/account/Password";
import Account from "./pages/account/Account";
import Profile from "./pages/account/Profile";
import Calendar from './pages/Calendar';
import TextEditor from '../src/components/Document/TextEditor';
import Home from './pages/Home';

function App() {
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/profile" element={<Profile />} />
      <Route path="/account/password" element={<Password />} />
      <Route path="/account/calendar" element={<Calendar />} />
      <Route path="/NewDoc/:id" element={<TextEditor/>} />
    </Routes>
  );
}

export default App;

