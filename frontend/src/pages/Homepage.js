import React from 'react'
import '../styles/bodyHome.css'
const Homepage = () => {
    return (
        <>
            <div className='home-section'>
                <div className='container'>
                    <h1>Welcome to Wono</h1>
                    <h2>W<b>o</b>rld Nomad Community</h2>
                    <p>The World’s only Nomad Community which is a curation of the best of platforms for Living & Working from Aspiring Destinations across the world.</p>
                </div>
            </div>
            <div className='form-section'>
                <div className='grid1-form'>
                    <h2>Connect with us</h2>
                </div>
                <div className='grid2-form'>

                    <div className="row" style={{ gap: '1rem', marginBottom: '1rem' }}>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" aria-label="name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Email" aria-label="email" />
                        </div>
                    </div>
                    <div className="row" style={{ gap: '1rem', marginBottom: '1rem' }} >
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
                    <div className="button_space">
                        <button className='submit-button'>Submit</button>
                    </div>

                </div>
            </div>

            <div className="mt-4" style={{textAlign:'center', padding:'1rem'}}>
                <h3>Dashboard</h3>
                <div className="dashboard-section">
                <div className="row" style={{ gap: '1rem',width:'100%' }}>
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
                        <div className="card text-center">
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

        </>
    )
}

export default Homepage
