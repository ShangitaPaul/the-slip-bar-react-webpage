import React, { Component } from "react";
import COMPANY_DESCRIPTION from "../../data/companyDescription";

class AboutUs extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center mt-5 '>About Us</h3>
        <div className='af-grey text-center my-3'>{COMPANY_DESCRIPTION}</div>
      </div>
    );
  }
}

export default AboutUs;
