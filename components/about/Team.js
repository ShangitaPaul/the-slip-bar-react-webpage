import React, { Component } from "react";
import Member from "./Member";

class Team extends Component {
  render() {
    return (
      <div>
        <h3 className='text-center mt-5'>Our Team</h3>
        {this.props.members.map(member => {
          return <Member key={member.id} member={member} />;
        })}
      </div>
    );
  }
}

export default Team;
