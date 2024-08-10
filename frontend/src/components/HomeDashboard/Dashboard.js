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
    <div className='grid-container'>
        <Header openSidebar={openSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
        <Home/>
    </div>
  )
}

export default Dashboard