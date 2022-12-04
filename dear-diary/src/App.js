import './App.css';
import React from 'react';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup.page';
import Signin from './pages/Signin.page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
