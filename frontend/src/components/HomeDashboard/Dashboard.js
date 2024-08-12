import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import '../../layout/DashboardStyle/dashboard.css'

const Dashboard = () => {
    const [openSidebarToggle,setopenSidebarToggle] = useState(false);

    const openSidebar = ()=>{
        setopenSidebarToggle(!openSidebarToggle);

    }
  return (
    <>
        <Header openSidebar={openSidebar}/>
    <div className='dashboard-container'>
      <div style={{width:'100%'}}>
        <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
      </div>
      <div style={{width:'100%', padding:0}}>
        <Home/>
      </div>
    </div>
    </>
  )
}

export default Dashboard