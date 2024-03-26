import React, { Component } from "react";
import LOCATIONS from "../../data/locations";
import Location from "./Location";
import LocationDetails from "./LocationDetails";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: LOCATIONS,
      displayDetails: false,
      currentBranch: 0,
      blur: false
    };
  }

  displayDetails = currentLocation => {
    this.setState({
      currentBranch: currentLocation,
      displayDetails: true,
      blur: true
    });
  };

  closeDetails = () => {
    this.setState({
      currentBranch: 0,
      displayDetails: false,
      blur: false
    });
  };

  render() {
    return (
      <div className='row container mx-auto mt-5'>
        <h3 className='col-12 text-center w-100 mb-3'>Our Locations</h3>
        {this.state.locations.map(location => {
          return (
            <Location
              key={location.id}
              location={location}
              displayDetails={this.displayDetails.bind(this)}
              blur={this.state.blur}
            />
          );
        })}
        {this.state.displayDetails === true ? (
          <LocationDetails
            locations={this.state.locations}
            currentBranch={this.state.currentBranch}
            closeDetails={this.closeDetails}
          />
        ) : null}
      </div>
    );
  }
}

export default Locations;
