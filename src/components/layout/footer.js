import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// Material Ui Icon
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends Component {
    render() {
      return (
        <MDBFooter className="font-small black-text footer-container">
          <MDBContainer fluid className="mb-5">
            <MDBRow className="justify-content-center">
              <MDBCol md="3" className="justify-content-center">
                <h5 className="title font-weight-bolder">Martin</h5>
                <ul className="pl-0">
                  <li className="list-unstyled pb-3">
                    <a href="https://www.linkedin.com/in/martin-hwang-developer/" className="black-text"><LinkedInIcon/> LinkedIn</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="https://github.com/MartinHwang" className="black-text"><GitHubIcon/> GitHub</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="mailto:developer.martinhwang@gmail.com" className="black-text"><EmailIcon/> Gmail</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title font-weight-bolder">Developer Venue</h5>
                <ul className="pl-0">
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">summary</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">work experience</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">education</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">volunteer</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title font-weight-bolder">Tech Venue</h5>
                <ul className="pl-0">
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">css</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">javascript</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">react</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">java</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title font-weight-bolder">Project Venue</h5>
                <ul className="pl-0">
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">martinhwang.ca</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">expressivecafe.com</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">martinhwangs.com</a>
                  </li>
                  <li className="list-unstyled pb-3">
                    <a href="#!" className="black-text">proudtale.com</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright
            </MDBContainer>
          </div>
        </MDBFooter>
      );
    }
  }
  
  export default Footer;