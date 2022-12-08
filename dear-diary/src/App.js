import './App.css';
import React from 'react';
import Signup from './pages/Signup.page';
import Dashboard from '../src/components/Dashboard/Dashboard';
import TextEditor from '../src/components/Document/TextEditor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
//import Password from "./pages/account/Password";
//import Account from "./pages/account/Account";
//import Profile from "./pages/account/Profile";
import Home from "./pages/Home";

function App() {
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <>

      {/*anushkas connected8/*/}
        <Routes>
          <Route path="/NewDoc/:id" element={<TextEditor />}>
          </Route>
          <Route path="/" element={<Dashboard />}>
          </Route>
        </Routes>

      {/*/////////////////*/}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/password" element={<Password />} />
      </Routes> */}
    </>
  );
}

export default App;

{/* //Anushka's changes */ }
{/* <React.Fragment>
       <Signup />
     </React.Fragment>

    <Router>
    <Routes>
      <Route path="/NewDoc/:id" element={<TextEditor />}>  
      </Route>
      <Route path="/" element={<Dashboard/>}>
      </Route>
    </Routes>
  </Router> */}
// user/date - one document of that particular date
// if date change then new document
// if user reopens then for that particular date only that document should open
{/* ////////////////////// */ }


