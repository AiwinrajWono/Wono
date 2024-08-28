import React, { useState } from 'react'
import '../styles/bodyHome.css'
import World_map from '../assets/World_map.svg'
import { Link } from 'react-router-dom'
import Carousels from '../components/Carousels'
import Toasts from '../components/Toasts'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import '../styles/componentStyle.css'
import { Modal, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import WonoLogo from '../assets//WONO_images/img/WONOCO-black-bg-removed.png';
import Template1 from '../assets/WONO_images/img/website-builder/template-1.jpeg'
import Template1_2 from '../assets/WONO_images/img/website-builder/template-1-2.jpeg'
import Template1_3 from '../assets/WONO_images/img/website-builder/template-1-3.jpeg'
import Template1_4 from '../assets/WONO_images/img/website-builder/template-1-4.jpeg'
import Template2 from '../assets/WONO_images/img/website-builder/template-2.jpeg'
import Template2_2 from '../assets/WONO_images/img/website-builder/template-2-2.jpeg'
import Template2_3 from '../assets/WONO_images/img/website-builder/template-2-3.jpeg'
import Template2_4 from '../assets/WONO_images/img/website-builder/template-2-4.jpeg'
import Template3 from '../assets/WONO_images/img/website-builder/template-3.jpeg'
import Template3_2 from '../assets/WONO_images/img/website-builder/template-3-2.jpeg'
import Template3_3 from '../assets/WONO_images/img/website-builder/template-3-3.jpeg'
import Template3_4 from '../assets/WONO_images/img/website-builder/template-3-4.jpeg'
import DashboardBooking from './Dashboard-pages/DashboardBooking'
import DashboardAsset from './Dashboard-pages/DashboardAsset'
import DashboardHR from './Dashboard-pages/DashboardHR'
import DashboardTickets from './Dashboard-pages/DashboardTickets'
import DashboardVisitor from './Dashboard-pages/DashboardVisitor'
import DashboardProducts from './Dashboard-pages/DashboardProducts'
import Slider from 'react-slick';



const Homepage = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showWebisteModal, setShowWebsiteModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard-booking');


    //Template objects

    const templates = [
        { id: 1, name: "Template 1", images: [Template1, Template1_2, Template1_3, Template1_4] },
        { id: 2, name: "Template 2", images: [Template2, Template2_2, Template2_3, Template2_4] },
        { id: 3, name: "Template 3", images: [Template3, Template3_2, Template3_3, Template3_4] },
    ];
    const templateSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
        setShowWebsiteModal(true);
    };

    const handleClose = () => {
        setShowWebsiteModal(false);
        setSelectedTemplate(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        // Set the message and show the Toast
        setToastMessage('Form submitted successfully!');
        setShowToast(true);
    };

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };


    const renderContent = () => {
        switch (selectedItem) {
            case 'dashboard-booking':
                return <DashboardBooking />;
            case 'dashboard-products':
                return <DashboardProducts />;
            case 'dashboard-tickets':
                return <DashboardTickets />;
            case 'dashboard-hr':
                return <DashboardHR />;
            case 'dashboard-visitor':
                return <DashboardVisitor />;
            case 'dashboard-asset':
                return <DashboardAsset />;
            default:
                return <DashboardBooking />;
        }
    };
    const handleMenuSelect = (menu) => {
        setSelectedItem(menu);
        // handleToggle(); 
    };


    return (
        <>
            <div className='home-section'>
                <div className='home-item' >
                    <h2 className='main-title'>
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
                        <span
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
                        </span>

                    </div>
                    <div className="avatar-grid" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                        <div className="avatar-groups">
                            <div className="profile-container">
                                <div class="avatars">
                                    <span class="avatar"><img src="https://picsum.photos/70" alt='avatar' /></span>
                                    <span class="avatar"><img src="https://picsum.photos/80" alt='avatar' /></span>
                                    <span class="avatar"><img src="https://picsum.photos/90" alt='avatar' /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='home-item' style={{ flexDirection: 'column' }}>
                    <div className='form-section'>
                        <div className='carousel-section'>
                            <Carousels image1={Carousel1} image2={Carousel2} image3={Carousel3} />
                        </div>
                        <div className="container mt-4">
                            <form onSubmit={handleSubmit}>
                                {/* First Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            aria-label="name"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            aria-label="email"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mobile-number"
                                            aria-label="mobile-number"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-secondary dropdown-toggle w-100"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Type of partner
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                        <Toasts
                            position="top-end"
                            toastMessage={toastMessage}
                            show={showToast}
                            onClose={() => setShowToast(false)}
                        />

                    </div>

                </div>
            </div>


            <div className="hero-container">
                <span className='hero-desc'>INTRODUCING N-COMMERCE<br /></span>
                <span className='hero-desc2'>(“NOMAD COMMERCE”)</span>
                <button className='hero-button'>Partner now</button>
            </div>
            <div className="backend-panel-container">
                <h2>Checkout our dashboard</h2>
            <div className="backend-panel">
                {/* Sidebar */}
                <Container fluid>
                    <Row>
                        <Col md={collapsed ? 1 : 2} className="backend-sidebar">
                        <div className="backend-sidebar-header">
                            <div className="backend-sidebar-logo">
                            <img src={WonoLogo} alt=''/>
                            </div>
                            <Button
                                className="collapse-btn"
                                onClick={handleToggle}
                                aria-controls="sidebar"
                                aria-expanded={!collapsed}
                            >
                                {collapsed ? '☰' : '✖'}
                            </Button>
                        </div>
                            {!collapsed && (
                                <Nav id="backend-sidebar" className="flex-column p-0">
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-booking')}
                                    >
                                        Booking engine
                                    </Nav.Link>
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-tickets')}
                                    >
                                        Ticket Management
                                    </Nav.Link>
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-hr')}
                                    >
                                        HR Management
                                    </Nav.Link>
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-asset')}
                                    >
                                        Asset Management
                                    </Nav.Link>
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-products')}
                                    >
                                        Products
                                    </Nav.Link>
                                    <Nav.Link

                                        onClick={() => handleMenuSelect('dashboard-visitor')}
                                    >
                                        Visitor Management
                                    </Nav.Link>
                                </Nav>
                            )}
                        </Col>
                        <Col md={collapsed ? 11 : 10} className="p-3">
                            {renderContent()}
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>

            <div className="website-builder">
            <Container>
                <h2 style={{padding:'2rem'}}>Check out our Website-Templates</h2>
                <Slider {...templateSliderSettings}>
                    <div className="template-slide">
                        <div
                            className="template-card"
                            onClick={() => handleTemplateClick({
                                name: "Template 1",
                                images: [Template1, Template1_2]
                            })}
                        >
                            <img src={Template1} alt="Template 1" />
                        </div>
                    </div>
                    <div className="template-slide">
                        <div
                            className="template-card"
                            onClick={() => handleTemplateClick({
                                name: "Template 2",
                                images: [Template2, Template2_2]
                            })}
                        >
                            <img src={Template2} alt="Template 2" />
                        </div>
                    </div>
                    <div className="template-slide">
                        <div
                            className="template-card"
                            onClick={() => handleTemplateClick({
                                name: "Template 3",
                                images: [Template3, Template3_2]
                            })}
                        >
                            <img src={Template3} alt="Template 3"/>
                        </div>
                    </div>
                </Slider>
            </Container>



                <Modal show={showWebisteModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedTemplate?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedTemplate && selectedTemplate.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${selectedTemplate.name} Image ${index + 1}`}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* <div className="type-parent">
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
            </div> */}

            <div className='world-map'>
                <div className="world-title">
                    <h2>EXISTING CUSTOMER SIGNUPS</h2>
                </div>
                <div className='image-space' >
                    <img className="image-world"
                        src={World_map} alt='nomad' />
                </div>
            </div>

        </>
    )
}

export default Homepage
