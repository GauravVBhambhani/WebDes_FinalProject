import React from 'react'
import "./Dashboard.css";
import DearDiary from '../images/DearDiary.png';
import Doc1 from '../images/Rectangle 3.png';
import Doc2 from '../images/Rectangle 5.png';
import {v4 as uuidV4} from "uuid";
import {useNavigate} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid'
// import Dashboard from './Dashboard';

function Dashboard() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/NewDoc/${uuidV4()}`);
  };

  debugger;
    return (
    <div className='HomePage'>
      <div className='deardiaryimg'>
        <img className="deardiaryimg" src={DearDiary}/>
      </div>

      <div className="documents">
      <img className="img-add" src={Doc1} onClick={handleAdd}/>
      <FontAwesomeIcon className="add" icon={faPlus} transform="grow-60"/>
      {/* <i class="fa-solid fa-plus"></i> */}
        <img className="img1" src={Doc1} onClick={handleAdd}/>
        <img className='img2' src={Doc2} onClick={handleAdd}/>
        <img className='img3' src={Doc2} onClick={handleAdd}/>

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
