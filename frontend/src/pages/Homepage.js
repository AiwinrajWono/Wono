import React from 'react'
import '../styles/bodyHome.css'
import World_map from '../assets/World_map.svg'
import { useNavigate } from 'react-router-dom'
import Batman from '../assets/batman.png'
import Spiderman from '../assets/spiderman.png'
import Carousels from '../components/Carousels'
// import { useNavigate } from 'react-router-dom'
const Homepage = () => {

  const navigate = useNavigate();

  const linkToUserList=()=>{
    navigate('/users');

  }
    

    return (
        <>
            <div className='home-section'>
                <div className='container'>
                    <h1>Welcome to Wono</h1>
                    <h2>W<b>o</b>rld Nomad Community</h2>
                    <span style={{ textAlign: 'center' }}>The World’s only Nomad Community which is a curation of the best of platforms for Living & Working from Aspiring Destinations across the world.</span>
                </div>
            </div>
            <div className='form-section'>
                <div className='grid1-form'>
                    <h2>Connect with us</h2>
                </div>
                <div>

                    <div className="row" style={{ gap: '1rem', marginBottom: '1rem' }}>

                        {/*Test carousel*/}

                        <Carousels image1={World_map} image2={Batman} image3={Spiderman} />

                        {/*Test carousel*/}
                        <div className='grid2-form'>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name" aria-label="name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="email" />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ gap: '1rem', marginBottom: '1rem' }} >
                        <div className='grid2-form'>

                            <div className="col" >
                                <input type="text" className="form-control" placeholder="Mobile-number" aria-label="mobile-number" />
                            </div>
                            <div className="col" >
                                <div className="dropdown">
                                    <button className="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        Type of partner
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="button_space">
                        <button  className='submit-button'>Submit</button>
                    </div>

                </div>
            </div>

            <div className="mt-4" style={{ textAlign: 'center', padding: '1rem' }}>
                <h3>Dashboard</h3>
                <div className="dashboard-section">
                    <div className="row" style={{ gap: '1rem', width: '100%' }}>
                        <div className="col">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Total Visits</h5>
                                    <p className="card-text">1,234</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">New Signups</h5>
                                    <p className="card-text">567</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center" onClick={linkToUserList}>
                                <div className="card-body">
                                    <h5 className="card-title">Active Users</h5>
                                    <p className="card-text">890</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Total Revenue</h5>
                                    <p className="card-text">$12,345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='world-map'>
                <div className="world-title">
                    <h3>Existing customers</h3>
                </div>
                <div className='image-space' >
                    <img className="image-world"
                        src={World_map} />
                </div>
            </div>

        </>
    )
}

export default Homepage
