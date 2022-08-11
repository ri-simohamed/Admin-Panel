import React, { useContext } from 'react'
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { DarkModeContext } from '../../context/darkModeContext';

function Navbar() {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
             <LanguageOutlinedIcon className='icon'/>
             <span className='icon'>Englech</span>
          </div>
          <div className='item'>
          <DarkModeOutlinedIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          <div className='item'>
          <ProductionQuantityLimitsIcon className='icon'/>
            <span className='icon'>Products</span>
          </div>
          <div className='item'>
          <AddShoppingCartIcon className='icon'/>
          <span className='icon'>Cart</span>
            <div className='num'>9+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar