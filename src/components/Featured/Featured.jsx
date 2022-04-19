import React from 'react'
import './Featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon className='icon'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className='title'>Total Sales Mode Today</p>
        <p className='amount'>$4344</p>
        <p className='desc'>You can reath Same description Hire</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon className='icon'/>
              <div className='resultAmount'>$9.2K</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Weeke</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon className='icon'/>
              <div className='resultAmount'>$12.2K</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon className='icon'/>
              <div className='resultAmount'>$60.2K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured