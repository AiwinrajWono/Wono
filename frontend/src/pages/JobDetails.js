import React, { useEffect } from 'react'
import Jobdescription from '../components/jobroles/jobdescription'
import "../layout/jobdetails.css"
import UiDesignerComp from '../components/jobroles/ProductManagement/UiDesignerComp'
import MarketingAnalytics from '../components/jobroles/ProductManagement/MarketingAnalytics'
import { useParams } from 'react-router-dom'
import Jobapply from '../components/jobroles/Jobapply'
import Aos from 'aos'
import 'aos/dist/aos.css';


const JobDetails = () => {
    const {id,title} = useParams();
    const decodedTitle = decodeURIComponent(title);

    useEffect(()=>{
        Aos.init({
            duration:1000,
        });
    },[]);

    useEffect(()=>{
        Aos.refresh();
    })

  return (
    <>
    <main id='main'>
    <section id="get-started" className="get-started section features section" style={{padding:"40px 0"}}>
        <div className="container">
          <h1 style={{fontWeight:"500", textAlign:"center"}}>{decodedTitle}</h1>
        
      
      <ul className="nav nav-tabs row g-2 d-flex" role="tablist">
        <li className="nav-item col-6" role="presentation">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" aria-selected="true" role="tab">
            <h4>JOB DESCRIPTION</h4>
          </a>
          </li>
          <li className="nav-iem col-6" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" aria-selected="false" tabIndex="-1" role="tab">
              <h4>APPLY NOW</h4>
            </a>
          </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
              <div className="row">
                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up" data-aos-delay="100">
                  <h3 className="m-b-2">About the Job</h3>
                  <p>We are searching for a talented social media Assistant to represent our company by building a social media presence for our brands. The social media Assistant will be required to run advertising campaigns and drive engagement by creating high-quality original content. You should also engage influencers, manage our community by responding to comments, and oversee our customer service across all platforms</p>
                  <br>
                  </br>
                  <h3 class="m-b-2">Responsibilities</h3>
                  <p>
                  ● UI Design for Web and Mobile
                  <br></br>
Create and update UI designs using Figma, ensuring they meet the latest standards and deliver exceptional user experiences on both web and mobile platforms.
<br></br><br></br>

● Mobile App Design
<br></br>
Focus on designing intuitive, user-friendly mobile applications that align with best practices and enhance user engagement.
<br></br><br></br>

● Responsive Design
<br></br>
Ensure optimal functionality and aesthetics across all devices and screen sizes.
<br></br><br></br>

● SEO Optimization
<br></br>
Enhance website discoverability and reach through effective SEO practices.
<br></br><br></br>

● Website Maintenance
<br></br>
Conduct regular updates, implement new features, and troubleshoot technical issues.
<br></br><br></br>

● Multimedia Integration
<br></br>
Collaborate with the marketing team to integrate social media feeds and other multimedia elements.
<br></br><br></br>

● Innovation
<br></br>
Stay up-to-date with the latest design trends and technologies to propose innovative ideas for continuous improvement.
<br></br><br></br>

● User Research
<br></br>
Conduct user research, usability testing, and analysis to inform design decisions and validate design solutions.
<br></br><br></br>

● Wireframing And Prototyping
<br></br>
Create wireframes, interactive prototypes, and design mockups, ensuring usability and alignment with user-centered design principles.
<br></br><br></br>

● Visual Design
<br></br>
Design visually appealing interfaces, applying principles of visual hierarchy, typography, and color to create intuitive and engaging user experiences.
<br></br><br></br>

● Collaboration
<br></br>
Collaborate closely with product managers, developers, and other stakeholders to ensure design solutions meet project requirements and technical constraints.
<br></br><br></br>

● User Experience Strategy
<br></br>
Contribute to the user experience strategy, ensuring that design solutions align with business goals and user needs.
<br></br><br></br>

                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="m-b-2">Qualifications</h3>
                  
                  <p>
                        ●	Experience: Minimum 1 years of experience in UI design, with a strong focus on Destop &amp; mobile app design.<br></br>
                        ●	Design Tools Expertise: Proficient in Figma, Sketch, Adobe Suite.<br></br>
                        ●	Prototyping: Skilled in ProtoPie, Framer, Principle.<br></br>
                        ●	Web Development: Basic knowledge of HTML/CSS, Javascript etc.<br></br>
                        ●	Responsive Design: Strong understanding of responsive design principles.<br></br>
                        ●	Aesthetic Sense: Keen eye for design, with the ability to align UI aesthetics with brand identity and user expectations.<br></br>
                        ●	Communication: Excellent collaboration skills with a diverse team.<br></br>
                        ●	Self-Motivated: Detail-oriented and efficient time management.<br></br>
                        ●	Creative Passion: Enthusiasm for promoting creativity within the community.<br></br>
                        ●	Desirable Experience: Experience working with top consulting firms is highly desirable, demonstrating your ability to deliver high-quality design solutions in demanding environments. <br></br>
                        
                      </p>
                      <hr style={{marginTop:"20px"}}></hr>
                      <p style={{marginBottom:"50px"}}>Please send in your Resume to <strong>Email:<a href="mailto:response@wono.co">response@wono.co</a></strong>
                      if unable to apply now</p>
                </div>
              </div>
            </div>
            {/* Apply Form */}
            <div className="tab-pane" id="tab-2" role="tabpanel">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <Jobapply></Jobapply>
                  {/* <form name="form-p" className="apply-form" encType="multipart/form-data">
                  <h6 style={{fontSize: "25px",margin: "0 0 20px 0",textAlign: "center",fontWeight: "700"}}>APPLICATION FORM
                      </h6>
                      <div className="row gy-3">
    
    <div className="col-md-6">
      <input type="text" name="name" class="form-control" placeholder="Name" required=""></input>
    </div>

    <div className="col-md-6">
      <input type="email" className="form-control" name="email" placeholder="Email" required=""></input>
    </div>

    <div className="col-md-6">
      <div className="date-picker" tabindex="0">
        <input type="date" name="dob" id="datePicker" required="" max="2024-08-15"></input>
        <div className="placeholder"></div>
      </div>
    </div>

    <div className="col-md-6">
      <input type="text" class="form-control" name="mobile" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile Number" required=""></input>
    </div>

    <div className="col-md-6">
      
      <select class="form-select select-f" aria-label="Default select example" name="location">
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
      <input type="number" min="0" name="experience" class="form-control" placeholder="Experience (in years)" required=""></input>
    </div>

    <div className="col-md-6">
      <input type="text" name="linkedin" className="form-control" placeholder="Linkedin Profile URl" required=""></input>
    </div>

    <div className="col-md-6">
      <input type="file" className="form-control" name="resume" placeholder="Upload a Resume  / CV" onfocus="this.value=''" title=" " required=""></input>
    </div>

    <div className="col-md-6">
      <input type="number" min="0" name="currentmonthlysalary" className="form-control" placeholder="Current Monthly Salary" required=""></input>
    </div>

    <div className="col-md-6">
      <input type="number" min="0" name="expectedsalary" className="form-control" placeholder="Expected Monthly Salary" required=""></input>
    </div>

    <div className="col-md-6">
      
      <select className="form-select select-f" aria-label="Default select example" name="canjoin">
        <option value="" disabled="" selected="">How Soon You Can Join ?</option>
        <option value="15 Days">15 Days</option>
        <option value="30 Days">30 Days</option>
        <option value="45 Days">45 Days</option>
        <option value="60 Days">60 Days</option>
        <option value="60 Days and above">60 Days and above</option>
      </select>
    </div>

    <div className="col-md-6">
     
      <select className="form-select select-f" aria-label="Default select example" name="relocategoa">
        <option value="" disabled="" selected="">Will You Relocate to Goa ?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="col-md-12">
      <textarea className="form-control" name="personality" rows="4" placeholder="Who are you as a person? 
Write something that defines your personality " required=""></textarea>
    </div>

    <div className="col-md-12">
      <textarea className="form-control" name="skills" rows="4" placeholder="What skill sets do you have for the job that you have applied? 
Write about the skill sets that you have based on your experience " required=""></textarea>
    </div>

    <div className="col-md-12">
      <textarea className="form-control" name="specialexperience" rows="4" placeholder="Why should we consider you for joining our company? 
What’s special about you or your experience that differentiates you from others" required=""></textarea>
    </div>

    <div className="col-md-12">
      <textarea className="form-control" name="willing" rows="4" placeholder="Are you willing to bootstrap to join a growing startup? 
Which means are you ok to join at same salary or at a minimum realistic pay increment " required=""></textarea>
    </div>


    <div className="col-md-12">
      
      <textarea className="form-control" name="message" rows="4" placeholder="Personal Message 
Anything additional that you want us to know besides all above shared information" required=""></textarea>
    </div>

    <div className="col-md-12 text-center">
      
      <input type="hidden" name="job_position" value="UI Designer"></input>


      <button name="submit" type="submit" onclick="return IsEmpty();">SUBMIT</button>
    </div>

  </div>
                  </form> */}
                </div>
              </div>
            </div>

          </div>
          </div>
          </section>
    </main>
    

    
    </>
  )
}

export default JobDetails