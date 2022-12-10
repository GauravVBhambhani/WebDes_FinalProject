import React from 'react'
import "./Dashboard.css";
import Doc1 from '../images/Rectangle 3.png';
import Doc2 from '../images/Rectangle 4.png';
import {useNavigate} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import Navbar from '../layout/Navbar';
import UserAccount from '../userAccount/UserAccount';

function Dashboard() {
  
  const navigate = useNavigate();
  
  // const current = new Date();
  // const dt = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // const docSet = ['Doc1', 'Doc2', 'Doc3', 'Doc 4'];
  // const d1 = uuidV4();
  // const d2 = uuidV4();
  // const d3 = uuidV4();
  // const d4 = uuidV4();
 
  const handleAdd = (event, param) => {
    
    if(param==='Doc1'){
      navigate(`/NewDoc/d1`);
    }

    else if(param==='Doc2'){
      navigate(`/NewDoc/d2`);
    }

    else if(param==='Doc3'){
      navigate(`/NewDoc/d3`);
    }

    else if(param==='Doc4'){
      navigate(`/NewDoc/d4`);
    }

    else{
      console.log("Make payment to access more diaries");
    }

  };

    return (
    <div className='HomePage'>
      <Navbar />
      <UserAccount />
      <div className="documents">
      <img className="img1" alt="diary1" src={Doc1} onClick={event => handleAdd(event, "Doc1")}/>
      <FontAwesomeIcon className="add" icon={faPlus} transform="grow-60"/>
      {/* <i class="fa-solid fa-plus"></i> */}
        <img className='img2' alt="diary2" src={Doc2} onClick={event => handleAdd(event, "Doc2")}/>
        <img className="img3" alt="diary3" src={Doc1} onClick={event => handleAdd(event, "Doc3")}/>
        <img className="img4" alt="diary4" src={Doc1} onClick={event => handleAdd(event, "Doc4")}/>
      </div>
    </div>
  );
}

export default Dashboard;

/*const list = [document id1, document id2];

  const handleAdd = (doc id) => {
    navigate(`/NewDoc/doc id`);
  };

  debugger;
    return (
    <div className='HomePage'>
      <div className='deardiaryimg'>
        <img className="deardiaryimg" src={DearDiary}/>
      </div>

      <div className="documents">
      <img className="img-add" src={Doc1} onClick={handleAdd doc id}/>
      <FontAwesomeIcon className="add" icon={faPlus} transform="grow-60"/>
      {/* <i class="fa-solid fa-plus"></i> */
