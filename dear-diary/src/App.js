import './App.css';
import React from 'react';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup.page';
import Signin from './pages/Signin.page';
import About from './pages/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
