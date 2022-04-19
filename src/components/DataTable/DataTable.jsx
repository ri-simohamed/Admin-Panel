import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../DataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function DataTable() {

  const [data, setData] = useState(userRows);

  const btnDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const actionCulmns = [{ field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
        return(
          <div className='cellAction'>
            <Link to='/users/test' style={{textDecoration: "none"}}>
            <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton'  onClick={() => btnDelete(params.row.id)}>Delete</div>
          </div>
        )
  }}];

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
       <DataGrid
       className='datagrid'
        rows={data}
        columns={userColumns.concat(actionCulmns)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable;