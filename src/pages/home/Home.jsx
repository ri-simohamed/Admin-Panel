import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';


function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        
      </div>
    </div>
  )
}

export default Home