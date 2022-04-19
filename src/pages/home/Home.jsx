import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widgets/Widget';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Table from '../../components/Table/Table';

function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balonce"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart title='Last 6 Month (Revenue)' aspect={2/1}/>
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transiction</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home