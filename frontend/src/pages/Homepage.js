import React, { useState } from 'react'
import '../styles/bodyHome.css'
import World_map from '../assets/World_map.svg'
import { Link, useNavigate } from 'react-router-dom'
import Carousels from '../components/Carousels'
import Toasts from '../components/Toasts'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import Homefeatures from '../components/Homefeatures'

import '../styles/componentStyle.css'

const Homepage = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    //form fields on banner
    const [name,setname] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isMobileInvalid, setIsMobileInvalid] = useState(false);


    const handleRegister = () => {
        navigate('/register');
      };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        // Set the message and show the Toast

        if (name.trim() === '') {
            setIsNameInvalid(true);
            
        } else {
            setIsNameInvalid(false);
        }

        if (email === '') {
            setIsEmailInvalid(true);
            
        } else {
            setIsEmailInvalid(false);
        }

        if (number.trim() === '') {
            setIsMobileInvalid(true);
            
        } else {
            setIsMobileInvalid(false);
        }
        setToastMessage('Form submitted successfully!');
        setShowToast(true);
    };

    // const navigate = useNavigate();


    return (
        <>
            <div className='home-section'>
                <div className='home-item' style={{position:'relative'}}>
                <div className='carousel-section'>
                    <div className='carousel-background'>
                            <Carousels image1={Carousel1} image2={Carousel2} image3={Carousel3} />
                    </div>
                </div>
                <div className='overlay-container'>
                <div className='text-overlay'>
                    <h2 className='main-title'>
                        W<span className='O'>O</span>RLDS
                        N<span className='O'>O</span>MAD
                        C<span className='O'>O</span>MMUNITY
                    </h2>
                    <span className='home-desc'>The World’s only Nomad Community which is a curation of the best of platforms for Living & Working from Aspiring Destinations across the world.</span>
                    {/* <div style={{ display: 'flex', marginTop: '1rem' }} className='Nomads-list-bussiness' >
                        <p
                            style={{
                                fontFamily: 'Popins-Regular',
                                marginBottom: '1rem',
                                color: 'black',
                                borderRight: '1px solid #000',
                                marginRight: '0px',
                                padding: '1rem'
                            }} className='Nomad-List-Your-Bussiness login-button'
                        >
                            LOGIN
                        </p>
                        <span
                            style={{
                                fontFamily: 'Popins-Regular',
                                marginBottom: '1rem',
                                color: 'black',
                                marginRight: '0px',
                                padding: '1rem'
                            }} className='Nomad-List-Your-Bussiness register-button'
                        >
                            REGISTER
                        </span>
                    </div>
                     */}
                       <div className='login-registration' style={{display:"flex",gap:"10px", marginTop:"20px"}}>
                          <Link to='/login'  className='login-button'>LOGIN</Link>
                          <button className='register-button' onClick={handleRegister}>REGISTER</button>
                      </div>
                    
                    
</div>
<div className='form-card'>
                    <div className='form-section '> 
                        <div className="container mt-4">
                            <form onSubmit={handleSubmit} className='needs-validation' noValidate>
                            <h1 style={{textAlign:'center',paddingBottom:'20px',color:'#000'}}>Connect</h1>
                                {/* First Row */}
                                <div className="col-md-12">
                                    <div className="col-md-12 mb-3">
                                        
                                        <input
                                            type="text"
                                            className={`form-control ${isNameInvalid ? 'is-invalid':''}`}
                                            placeholder="Name"
                                            aria-label="name"
                                            id="validationCustom05"
                                            value={name}
                                            required
                                            onChange={(e)=>setname(e.target.value)}
                                            
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a name
                                        </div>
     
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${isEmailInvalid ? 'is-invalid':''}`}
                                            placeholder="Email"
                                            aria-label="email"
                                            id="validationCustom01"
                                            value={email}
                                            required
                                            onChange={(e)=>setEmail(
                                                e.target.value
                                            )}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide an email
                                        </div>

                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${isMobileInvalid ? 'is-invalid': ''}`}
                                            placeholder="Mobile-number"
                                            aria-label="mobile-number"
                                            value={number}
                                            required
                                            onChange={(e)=>setNumber(e.target.value)}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a mobile number
                                        </div>

                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="dropdown">
                                            <button
                                                className="btn  dropdown-toggle w-100"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"1px solid grey"}}
                                                required
                                                
                                            >
                                                Type of partner
                                            </button>
                                            <div className="invalid-feedback">
                                            Please select one option
                                        </div>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{backgroundColor:'white'}}>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/">Action</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="button_space">
                                    <button type="submit" className="submit-button">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                    
                        <Toasts
                            position="top-end"
                            toastMessage={toastMessage}
                            show={showToast}
                            onClose={() => setShowToast(false)}
                        />

                    </div>
                </div>

            <div className='Globe-N-Commerce' style={{ display: 'flex', backgroundColor: 'black', padding: '20px' }}>
              <div className='Globe' style={{ textAlign: 'left' }}>
                <img alt="Shopify Globe" src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2" 
                ></img>
              </div>
              <div className='N-Commerce'>
                <h3><strong>INTRODUCING N-COMMERCE</strong></h3>
                <p > [ “NOMAD COMMERCE” ] </p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <a data-aos-delay="200" href="contact.html">PARTNER NOW</a>
                </div>
              </div>
            </div>

            <div className="type-parent">
                <div className="type-grid-1">
                    <h2 style={{ textAlign: 'center',}}>FOR NOMADS</h2>
                    <hr></hr>
                    <div style={{ borderBottom: '1px solid black', padding: '1rem 0 1rem' }}>
                        <span>
                            The World's Nomad Community is being developed and designed exclusively for individuals and companies who intend to work remotely from the various aspiring destinations of the world. We are developing the World's 1st such Platform & Community which will enable you to discover, help in making decisions, provide assistance, provide logistics and let you do everything centrally for single, multiple or year long working from destinations as a true sorted Global Nomad.
                        </span>
                    </div>
                    <div className="nomad-features">
                        <div className="nomad-1">
                            <img src={GlobalNomad} alt='nomad'/><br />
                            <span>Global nomadship</span>
                        </div>
                        <div className="nomad-2"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-3"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-4"><img src={GlobalNomad} alt='nomad' /><br /> <span>Global nomadship</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div className='view-all-underline'>
                            <span className='view-all'>VIEW ALL</span>
                            <hr style={{
                                margin: 0,
                                border: '4px solid #0875e2',
                                opacity: 1,
                                padding: 0
                            }}></hr>
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
                            <img src={GlobalNomad} alt='nomad' /><br />
                            <span>Global nomadship</span>
                        </div>
                        <div className="nomad-2"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-3"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-4"><img src={GlobalNomad} alt='nomad' /><br /> <span>Global nomadship</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='view-all-underline'>
                            <span className='view-all'>VIEW ALL</span>
                            <hr style={{
                                margin: 0,
                                border: '4px solid #0875e2',
                                opacity: 1,
                                padding: 0
                            }}></hr>
                        </div>
                    </div>
                </div>
            </div>

            <div className='world-map'>
                {/* <div className="world-title">
                    <h2 style={{width:'100%',backgroundColor:"#000",color:"#fff"}}>FEATURES</h2>
                </div> */}
                <div className='image-space' >
                    <Homefeatures/>
                </div>
            </div>

        </>
    )
}

export default Homepage
