import React, { Component } from "react";

class LocationDetails extends Component {
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  handleClickOutside = e => {
    console.log("you clicked outside");
    this.props.closeDetails();
  };

  render() {
    return (
      <React.Fragment>
        <div
          ref={node => (this.node = node)}
          className='af-position-center af-details-width'
        >
          <div className='col-12 w-100'>
            <div className='card'>
              <div className='card-header'>
                <img
                  src={this.props.currentBranch.link}
                  alt={this.props.currentBranch.city + " Branch"}
                  className='card-img-top'
                />
              </div>
              <div className='card-body'>
                <h3 className='card-heading text-center mb-4'>
                  {this.props.currentBranch.city + " Branch"}
                </h3>
                <div className='card-text'>
                  <div className='mb-1'>
                    Address: {this.props.currentBranch.address},{" "}
                    {this.props.currentBranch.city},{" "}
                    {this.props.currentBranch.country}{" "}
                  </div>
                  <div className='mb-1'>
                    Phone number: {this.props.currentBranch.phone}
                  </div>
                  <div className='mb-1'>
                    Specialty: {this.props.currentBranch.specialty}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LocationDetails;
