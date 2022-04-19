import React from 'react'
import './Widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widget({ type }) {

    let data;

    //**** */
    const amount = 100;
    const diff = 20;

    switch(type){
        case"user":
        data={
            title:"USERS",
            isMoney: false,
            link: "See All Users",
            icon: (
                <PermIdentityOutlinedIcon className='icon' 
                style={{color:"crimson",
                      backgroundColor:"rgba(255, 0, 0, 0.2)" }}/>
            )
        };
        break;
        case"order":
        data={
            title:"ORDERS",
            isMoney: false,
            link: "View All Orders",
            icon: (
                <ShoppingCartOutlinedIcon className='icon' 
                style={{color:"goldenrod",
                backgroundColor:"rgba(218, 165, 32, 0.2)" }}/>
            )
        };
        break;
        case"earning":
        data={
            title:"EARNINGS",
            isMoney: true,
            link: "View net Earnings",
            icon: (
                <MonetizationOnOutlinedIcon className='icon'
                style={{color:"green",
                backgroundColor:"rgba(0, 128, 0, 0.2)" }}/>
            )
        };
        break;
        case"balonce":
        data={
            title:"BALONCE",
            isMoney: true,
            link: "See Details",
            icon: (
                <AccountBalanceWalletOutlinedIcon className='icon'
                style={{color:"purple",
                backgroundColor:"rgba(128,0, 128, 0.2)" }}/>
            )
        };
        break;
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>
                {data.isMoney && "$"} {amount}
                </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <span className='presontage positive'>
                <KeyboardArrowUpOutlinedIcon/>
                 {diff} % </span>
        </div>
       {data.icon}
    </div>
  )
}

export default Widget