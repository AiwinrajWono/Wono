import React, { useState } from 'react'
import '../styles/bodyHome.css'
import World_map from '../assets/World_map.svg'
import { useNavigate } from 'react-router-dom'
import Carousels from '../components/Carousels'
import Toasts from '../components/Toasts'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import { Divider } from 'primereact/divider';
const Homepage = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        // Set the message and show the Toast
        setToastMessage('Form submitted successfully!');
        setShowToast(true);
    };

    const navigate = useNavigate();

    const linkToUserList = () => {
        navigate('/users');

    }


    return (
        <>
            <div className='home-section'>
                <div className='container'>
                    <div className='home-item' >
                        <h2 className='main-title' style={{ display: 'flex' }}>
                            W<span className='O'>O</span>RLDS
                            N<span className='O'>O</span>MAD
                            C<span className='O'>O</span>MMUNITY
                        </h2>
                        <span className='home-desc'>The World’s only Nomad Community which is a curation of the best of platforms for Living & Working from Aspiring Destinations across the world.</span>
                        <div style={{ display: 'flex', marginTop: '1rem' }}>
                            <p
                                style={{
                                    fontFamily: 'Popins-Regular',
                                    marginBottom: '1rem',
                                    color: '#0d6efd',
                                    fontSize: '22px',
                                    fontWeight: 300,
                                    borderRight: '1px solid #000',
                                    marginRight: '0px',
                                    padding: '1rem'
                                }}
                            >
                                NOMAD REMOTE WORKING
                            </p>
                            <p
                                style={{
                                    fontFamily: 'Popins-Regular',
                                    marginBottom: '1rem',
                                    color: '#0d6efd',
                                    fontSize: '22px',
                                    fontWeight: 300,
                                    marginRight: '0px',
                                    padding: '1rem'
                                }}
                            >
                                LIST YOUR BUSINESS
                            </p>
                        </div>
                    </div>
                    <div className='home-item' style={{ flexDirection: 'column' }}>
                        <div className='form-section'>
                            <div>
                                <div className="row" style={{ gap: '1rem', marginBottom: '1rem' }}>

                                    {/*Test carousel*/}
                                    <div>
                                        <Carousels image1={Carousel1} image2={Carousel2} image3={Carousel3} />
                                    </div>

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
                                    <button onClick={handleSubmit} className='submit-button'>Submit</button>
                                </div>
                                <Toasts
                                    position="top-end"
                                    toastMessage={toastMessage}
                                    show={showToast}
                                    onClose={() => setShowToast(false)}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="hero-container">
                <span className='hero-desc'>INTRODUCING N-COMMERCE<br /></span>
                <span className='hero-desc2'>(“NOMAD COMMERCE”)</span>
                <button className='hero-button'>Partner now</button>
            </div>

            <div className="type-section">
                <div className="type-parent">
                    <div className="type-grid-1">
                        <h2 style={{ textAlign: 'center' }}>FOR NOMADS</h2>
                        <hr></hr>
                        <div style={{ borderBottom: '1px solid black', padding: '1rem 0 1rem' }}>
                            <span>
                                The World's Nomad Community is being developed and designed exclusively for individuals and companies who intend to work remotely from the various aspiring destinations of the world. We are developing the World's 1st such Platform & Community which will enable you to discover, help in making decisions, provide assistance, provide logistics and let you do everything centrally for single, multiple or year long working from destinations as a true sorted Global Nomad.
                            </span>
                        </div>
                        <div className="nomad-features">
                            <div className="nomad-1">
                                <img src={GlobalNomad} />
                                <span>Global nomadship</span>
                            </div>
                            <div className="nomad-2"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                            <div className="nomad-3"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                            <div className="nomad-4"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'9%'}}>
                            <span  className='view-all'>VIEW ALL</span>
                            <hr style={{margin:0,
                            border: '4px solid #0875e2',
                            opacity:1,
                            padding:0}}></hr>
                    </div>
                        </div>
                    </div>
                    <div className="type-grid-2">
                        <h2 style={{ textAlign: 'center' }}>FOR BUSINESSES</h2>
                        <hr></hr>
                        <div style={{ borderBottom: '1px solid black', padding: '1rem 0 1rem' }}>
                            <span>
                                Our Business2Business (B2B) Software As A Service (SaaS) Licensed tools are being developed post discussions with 100's of businesses who are trying to develop and evolve the Nomads & Remote Working Ecosystem via their own niche concepts in the most aspiring destinations of the world. We are currently in our BETA stage and are partnering and listening to everyone who wants to partner with us and we are provide them with our SaaS Tools FREE of Cost in our Testing Phase.
                            </span>
                        </div>
                        <div className="nomad-features">
                            <div className="nomad-1">
                                <img src={GlobalNomad} />
                                <span>Global nomadship</span>
                            </div>
                            <div className="nomad-2"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                            <div className="nomad-3"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                            <div className="nomad-4"><img src={GlobalNomad} /><span>Global nomadship</span></div>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'9%'}}>
                            <span  className='view-all'>VIEW ALL</span>
                            <hr style={{margin:0,
                            border: '4px solid #0875e2',
                            opacity:1,
                            padding:0}}></hr>
                    </div>
                        </div>
                </div>
            </div>
        </div >

            <div className='world-map'>
                <div className="world-title">
                    <h2>EXISTING CUSTOMER SIGNUPS</h2>
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
