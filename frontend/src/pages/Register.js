import React from 'react'

const Register = () => {
  return (
    <>
    <section id='contact' className='register'>
        <div className='container'>
            <div className='row gy-4'>
                <div className='col-md-12' style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <div className='col-lg-6'>
                        <form name='form-p' className='register-form' id='partner-form'>
                        <h3 style={{marginBottom: "30px",color:"#000"}}>REGISTER NOW</h3>
                        <div className="row gy-3">
      
                        <div className="col-lg-12">
                          {/* <!-- <input type="text" name="name" class="form-control" placeholder="Type of Company" required> --> */}
                          <select className="form-select select-f" aria-label="Default select example" name="partnerstype">
                            <option value="" disabled="" selected="">Type of Partnership</option>
                            <option value="B2B SaaS Technology Licensing ">B2B SaaS Technology Licensing </option>
                            <option value="B2C Workation/Co-Working Booking ">B2C Workation/Co-Working Booking </option>
                            <option value="Landlord Partnerships ">Landlord Partnerships </option>
                            <option value="Investment Related ">Investment Related </option>
                            <option value="Coffee Meeting to know us better">Coffee Meeting to know us better</option>
                          </select>
                        </div>
        
                        <div className="col-lg-12">
                          <input type="text" name="name" className="form-control" placeholder="Full Name" required=""></input>
                        </div>
        
                        <div className="col-lg-12">
                          <input type="text" className="form-control" name="mobile" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile Number" required=""></input>
                        </div>

                        <div className="col-lg-12 ">
                            <input type="email" className="form-control" name="email" placeholder="Email" required=""></input>
                          </div>

                        {/* <!-- <div class="col-md-12 ">
                            <input type="password" class="form-control" name="Password" placeholder="Password" required></input>
                          </div>

                          <div class="col-md-12 ">
                            <input type="password" class="form-control" name="Confirm Password" placeholder=" Confirm Password" required></input>
                          </div> --> */}

                          <div className="col-lg-12">
                            <input type="text" name="link" className="form-control" placeholder="Business or Personal Linked in Profile Link " required=""></input>
                          </div>

                          <div className="col-lg-12">
                            <input type="text" name="country " className="form-control" placeholder="Country " required=""></input>
                          </div>

                          <div className="col-lg-12">
                            <input type="text" name="city " className="form-control" placeholder="City " required=""></input>
                          </div>

                          <div className="col-lg-12">
                            <input type="text" name="message" className="form-control" placeholder="Personal message for this connection" required=""></input>
                          </div>
        
                        
        
                        <div className="col-md-12 text-center">
                
                          <input type="hidden" name="pagename" value="Register PAGE"></input>
                          
        
                          <button name="submit" type="submit"  style={{borderRadius: "50px",backgroundColor:"black",color:"white",width:"200px"}} disabled="">REGISTER</button>
                        </div>
                        <hr></hr>
                  <p>Already have an account? <a href="login.html" style={{color: "#0875e2"}}>Login</a></p>
    
                      </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Register