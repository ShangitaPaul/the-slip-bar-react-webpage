import React, { Component } from "react";

class Location extends Component {
  render() {
    const { link, city } = this.props.location;
    return (
      <div
        className={`${
          this.props.blur === true ? "af-blur" : null
        } col-12 col-md-4 af-height mb-4`}
        onClick={() => this.props.displayDetails(this.props.location)}
      >
        <div className='card border-0'>
          <div className='card-header p-0'>
            <div>
              <img className='card-img-top' src={link} alt='' />
            </div>
          </div>
          <div className='af-overlay w-100 py-2'>
            <h4 className='text-light'>{city}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
