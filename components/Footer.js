import React, { Component } from "react";
import QUOTES from "../data/quotes";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      quotes: QUOTES
    };
  }

  render() {
    return (
      <div>
        <div className='footer-container'>
          <div className='af-footer mt-5' style={{ backgroundColor: "#0d4d8d" }}>

            <br />
            {/* <div className='quote text-light text-center font-italic pt-4'>
              {this.state.quotes[Math.floor(Math.random() * 5)].quote}
            </div> */}
            <div className="social-media" style={{ textAlign: "center", marginBottom: "10px" }}>
              <a href="https://www.facebook.com/theslipbar" target="_blank" rel="noreferrer">
                <img src="/img/icons8-facebook-50.png" alt="Facebook" style={{ width: "30px", height: "auto", margin: "3px" }} />
              </a>
              <a href="https://www.instagram.com/theslipbar" target="_blank" rel="noreferrer">
                <img
                  src="/img/icons8-instagram-50.png"
                  alt="Instagram"
                  style={{ width: "30px", height: "auto", margin: "3px", marginRight: "0px" }}
                />
              </a>
            </div>
            <div className='text-light text-center py-0'>
              <p>© 2024 The Slip Bar & Eatery. All Rights Reserved.</p>
              <p>Website by:{' '} {/* This adds a space */}
                <a href='https://instagram.com/sangitasurfs' target='_blank' rel='noreferrer'>
                  Shangita Paul Engineering
                </a>
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>  
    );
  }
}

export default Footer;
