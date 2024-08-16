import React from 'react'
import Jobrole from '../components/Jobrole'

const Career = () => {
  return (
    <div className='component-grid common-children'>
        <h1 style={{marginBottom:"50px"}}>JOIN OUR TEAM</h1>
        <div className='accrodion'>
          
          <h2 style={{fontSize:"30px",fontWeight:"bold", display:"flex",alignItems:"start"}}>OPEN POSITIONS</h2>
          <Jobrole />
        </div>
    </div>
  )
}

export default Career