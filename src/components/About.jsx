import React from 'react'
import { Award } from "react-bootstrap-icons";
import url from "../assets/nabilAllouche-resume.pdf";


export const About = () => {

     // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "nabil-allouche-resume";
        alink.click();
      });
    });
  };

    return (
        <section className="skill" id="about">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5"> 
                <div className="about-bx wow zoomIn">
                  <h2>About</h2>

                  <div class="container">
    <div class="row">
        <div class="col-md-4 order-md-1">
            <div class="div1"> <div className="shape"> </div> </div>
        </div>
        <div class="col-md-4 order-md-2">
            <div class="div2"><p className=''>
                  Hi! Welcome to my portfolio . My name is Nabil ALLOUCHE , i'am 21 years old Passionate about web development, I master front-end and
                  back-end technologies to create innovative web applications,
                  and I am always ready to tackle new technical challenges. <br />
                  <button className='btn btn-outline-success mt-3 rounded' onClick={onButtonClick}>Download resume</button>
                </p> </div>
        </div>
        <div class="col-md-4 order-md-3">
        <div className='about-award d-flex  flex-column'>
                <span><Award size={30} color="#0f06ff" /> Bachelor's degree in Computer Systems </span> <br />
                <span><Award size={30} color="#0f06ff" /> Bootcamp Certified  </span> <br/>
                <span><Award size={30} color="#0f06ff" /> +30 challenges completed in Bootcamp</span> <br/>
                <span><Award size={30} color="#0f06ff" /> +8 Codeacademy Certified</span> <br/>
                <span><Award size={30} color="#0f06ff" /> +4 Projects completed</span> <br/>

                </div>
        </div>
    </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

