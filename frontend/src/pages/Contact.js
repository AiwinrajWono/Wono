import React from 'react'
import '../styles/bodyContact.css'

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div className='map-container'>
            <div className="map-grid">
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8288436496055!2d103.8432645747905!3d1.2760650987118065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191343eb5b27%3A0x1781b571e2363017!2s10%20Anson%20Rd%2C%20Singapore%20079903!5e0!3m2!1sen!2sin!4v1723629468618!5m2!1sen!2sin" width="100%" height="400"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='address'>
                        <span className='contact-address'>SINGAPORE OFFICE - WONOCO PRIVATE LIMITED, 10 ANSON ROAD,
                        #33-10, INTERNATIONAL PLAZA, SINGAPORE - 079903</span>
                    </div>
                </div>
                <div className="map-grid">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7765664747362!2d73.83261987495516!3d15.496445985103028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1d2e05cbef3%3A0xa643703ebcc4db43!2sBIZ%20Nest%20-%20Co-Working%20Space%2C%20Workations%20%26%20Meeting%20Zone%20in%20Goa!5e0!3m2!1sen!2sin!4v1723627911486!5m2!1sen!2sin" width='100%' height='400' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='address'>

                        <span className='contact-address'>INDIA OFFICE - WONOCO PRIVATE LIMITED, BIZ NEST CO-WORKING, SUNTECK
                            KANAKA CORPORATE PARK, 701 - B, PATTO CENTRE, PANJIM, GOA - 403001</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
