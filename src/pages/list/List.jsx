import React from 'react'
import './List.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DataTable from '../../components/DataTable/DataTable';

function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List