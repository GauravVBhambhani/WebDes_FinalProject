import './App.css';
import React from 'react';
import Signup from './pages/Signup.page';
// import Signup from './signup/Signup';
import Dashboard from '../src/components/Dashboard/Dashboard';
import TextEditor from '../src/components/Document/TextEditor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    // <React.Fragment>
    //   <Signup />
    // </React.Fragment>

    <Router>
    <Routes>
      <Route path="/NewDoc/:id" element={<TextEditor />}>  
      </Route>
      <Route path="/" element={<Dashboard/>}>
      </Route>
    </Routes>
  </Router>

  );
}

export default App;
