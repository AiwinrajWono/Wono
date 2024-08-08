import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../layout/footer.css"

const Footer = () => {
  return (
   <>
   <footer className="bg-dark text-light py-4">
       
          <div className='footer-container'>
          <div className='footer-section'>
            <h5>About Us</h5>
            <p>
              We provide top-notch services to our clients, focusing on
              delivering quality and value.
            </p>
           </div>
          
          
          <div className='footer-section'>
            <h5>Contact Us</h5>
            <p>
              Email: info@example.com <br></br>
              Phone: +123 456 7890
            </p>
            </div>
          
          
          <div className='footer-section' id='social-media'>
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-light">Facebook</a> <br />
              <a href="#" className="text-light">Twitter</a> <br />
              <a href="#" className="text-light">Instagram</a>
            </p>
            </div>
         </div>
          
        
        <div className="mt-3 py-5">
          <div className="text-center">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      
    </footer>
   </>
  )
}

export default Footer