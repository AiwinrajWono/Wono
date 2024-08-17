import React, { useState } from 'react'
import Toasts from "../../components/Toasts"

const Jobapply = () => {
  const [formvalues, setFormValues] = useState({
    name: '',
    email: '',
    date: '',
    number: '',
    location: '',
    experience: '',
    linkedInProfile: '',
    resume: '',
    monthlySalary: '',
    expectedSalary: '',
    daysToJoin: '',
    relocateGoa: '',
    personality: '',
    skills: '',
    specialexperience: '',
    willing: '',
    message: ''

  });

  const [show, setShow] = useState(false); //toast
  const handleShow = () => setShow(true);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formvalues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data', formvalues);

  }



  return (
    <div>
      <form name="form-p" className="apply-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <h6 style={{ fontSize: "25px", margin: "0 0 20px 0", textAlign: "center", fontWeight: "700" }}>APPLICATION FORM
        </h6>
        <div className="row gy-3">

          <div className="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Name" required="" value={formvalues.name} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control" name="email" placeholder="Email" required="" value={formvalues.email} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <div className="date-picker" tabindex="0">
              <input type="date" name="date" id="datePicker" required="" max="2024-08-15" value={formvalues.date} onChange={handleInputChange}></input>
              <div className="placeholder"></div>
            </div>
          </div>

          <div className="col-md-6">
            <input type="text" class="form-control" name="number" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile Number" required="" value={formvalues.number} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">

            <select class="form-select select-f" aria-label="Default select example" name="location" value={formvalues.location} onChange={handleInputChange}>
              <option value="" disabled="" selected="">State</option>
              <option value="Andhra Pradesh	">Andhra Pradesh </option>
              <option value="Arunachal Pradesh	">Arunachal Pradesh </option>
              <option value="Assam	">Assam </option>
              <option value="Bihar	">Bihar </option>
              <option value="Chhattisgarh	">Chhattisgarh </option>
              <option value="Goa	">Goa </option>
              <option value="Gujarat	">Gujarat </option>
              <option value="Haryana	">Haryana </option>
              <option value="Himachal 	">Himachal </option>
              <option value="Jharkhand	">Jharkhand </option>
              <option value="Karnataka	">Karnataka </option>
              <option value="Kerala	">Kerala </option>
              <option value="Madhya Pradesh	">Madhya Pradesh </option>
              <option value="Maharashtra	">Maharashtra </option>
              <option value="Manipur	">Manipur </option>
              <option value="Meghalaya	">Meghalaya </option>
              <option value="Mizoram	">Mizoram </option>
              <option value="Nagaland	">Nagaland </option>
              <option value="Odisha	">Odisha </option>
              <option value="Punjab	">Punjab </option>
              <option value="Rajasthan	">Rajasthan </option>
              <option value="Sikkim	">Sikkim </option>
              <option value="Tamil Nadu	">Tamil Nadu </option>
              <option value="Telangana	">Telangana </option>
              <option value="Tripura	">Tripura </option>
              <option value="Uttar Pradesh	">Uttar Pradesh </option>
              <option value="Uttarakhand	">Uttarakhand </option>
              <option value="West Bengal	">West Bengal </option>
              <option value="Other	">Other </option>
            </select>
          </div>

          <div className="col-md-6">
            <input type="number" min="0" name="experience" className="form-control" placeholder="Experience (in years)" required="" value={formvalues.experience} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="text" name="linkedin" className="form-control" placeholder="Linkedin Profile URl" required="" value={formvalues.linkedInProfile} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="file" className="form-control" name="resume" placeholder="Upload a Resume  / CV" onfocus="this.value=''" title=" " required="" value={formvalues.resume} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="number" min="0" name="monthlySalary" className="form-control" placeholder="Current Monthly Salary" required="" value={formvalues.monthlySalary} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="number" min="0" name="expectedSalary" className="form-control" placeholder="Expected Monthly Salary" required="" value={formvalues.expectedSalary} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">

            <select className="form-select select-f" aria-label="Default select example" name="daysToJoin" value={formvalues.daysToJoin} onChange={handleInputChange}>
              <option value="" disabled="" selected="" >How Soon You Can Join ?</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="45 Days">45 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="60 Days and above">60 Days and above</option>
            </select>
          </div>

          <div className="col-md-6">

            <select className="form-select select-f" aria-label="Default select example" name="relocateGoa" value={formvalues.relocateGoa} onChange={handleInputChange}  >
              <option value="" disabled="" selected="">Will You Relocate to Goa ?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="personality" rows="4" placeholder="Who are you as a person? 
Write something that defines your personality " required="" value={formvalues.personality} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="skills" rows="4" placeholder="What skill sets do you have for the job that you have applied? 
Write about the skill sets that you have based on your experience " required="" value={formvalues.skills} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="specialexperience" rows="4" placeholder="Why should we consider you for joining our company? 
What’s special about you or your experience that differentiates you from others" required="" value={formvalues.specialexperience} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="willing" rows="4" placeholder="Are you willing to bootstrap to join a growing startup? 
Which means are you ok to join at same salary or at a minimum realistic pay increment " required="" value={formvalues.willing} onChange={handleInputChange}></textarea>
          </div>


          <div className="col-md-12">

            <textarea className="form-control" name="message" rows="4" placeholder="Personal Message 
Anything additional that you want us to know besides all above shared information" required="" value={formvalues.message} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12 text-center">


            <div className='RealToast'>
              <Toasts toastMessage={'Form submitted'} position={'top-end'} show={show} onClose={() => { setShow(false) }} />
              <button name="submit" type="submit" onClick={handleShow}>SUBMIT</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Jobapply