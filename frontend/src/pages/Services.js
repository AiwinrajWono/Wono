import React from 'react'
import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import '../styles/bodyServices.css'
const Services = () => {
  return (
    <>
   <div className="services">
    <div className="businesses">
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <h1>FOR BUSINESSES</h1>
        <hr></hr>

        </div>
        <div className="business-grid">
            {/* Repeat this div 30 times */}
            {Array.from({ length: 30 }).map((_, index) => (
                <div className="business-service" key={index}>
                    <img src={GlobalNomad} alt="Global Nomad" />
                    <span>Global nomad</span>
                </div>
            ))}
        </div>
    </div>
    <div className="direct-customers">
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <h1>FOR DIRECT CUSTOMERS</h1>
        <hr></hr>

        </div>
        <div className="direct-customers-grid">
            {/* Repeat this div 30 times */}
            {Array.from({ length: 30 }).map((_, index) => (
                <div className="direct-customers-service" key={index}>
                    <img src={GlobalNomad} alt="Global Nomad" />
                    <span>Global nomad</span>
                </div>
            ))}
        </div>
    </div>
    <div className="financing">
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <h1>FOR FINANCING</h1>
        <hr></hr>

        </div>
        <div className="financing-grid">
            {/* Repeat this div 30 times */}
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="financing-service" key={index}>
                    <img src={GlobalNomad} alt="Global Nomad" />
                    <span>Global nomad</span>
                </div>
            ))}
        </div>
    </div>
</div>

      
    </>
  )
}

export default Services
