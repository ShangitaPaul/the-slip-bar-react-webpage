import React, { Component } from "react";
import { MEMBERS, TEAM_GROUP } from "../../data/team";
import AboutUs from "./AboutUs";
import Team from "./Team";

class About extends Component {
  constructor() {
    super();

    this.state = {
      members: MEMBERS
    };
  }

  render() {
    return (
      <div className='container mx-auto px-0'>
        <div className='card af-height-90 af-max-width mx-auto mt-2'>
          <img className='card-img-top' src={TEAM_GROUP[0].link} alt='Team' />
        </div>
        <AboutUs members={this.state.members} />
        <Team members={this.state.members} />
        {console.log(this.state.members)}
      </div>
    );
  }
}

export default About;
