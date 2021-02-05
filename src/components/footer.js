import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style/header.scss';
const FooterPage = () => {
  return (
  
      <div className="footer-copyright text-center py-3" >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Majd Alkilany
        </MDBContainer>
      </div>
  );
}

export default FooterPage;