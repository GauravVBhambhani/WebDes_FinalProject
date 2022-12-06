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

// import "./App.css";
// import React from "react";

// import Signup from "./pages/Signup.page";
// import Signin from './pages/Signin.page';
// import About from './pages/About';
// // import Password from "./pages/account/Password";
// // import Account from "./pages/account/Account";
// // import Profile from "./pages/account/Profile";
// // import Home from "./pages/Home";

// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/" element={<Signup />} />
//         <Route path='/signin' element={<Signin />}></Route>
//         <Route path='/about' element={<About />}></Route>
//         {/* <Route path="/account" element={<Account />} /> */}
//         {/* <Route path="/account/profile" element={<Profile />} /> */}
//         {/* <Route path="/account/password" element={<Password />} /> */}
//       </Routes>
//     </>
//     );
// }

// export default App;